import { useEffect, useState } from "react";
import { LIVE_PAYOUTS_BACKEND } from "@/app/liveSiteContent";
import { LIVE_PAYOUTS_DEV_ROTATION_INTERVAL_MS } from "@/app/livePayoutsMotion";

export type LiveRewardRecord = {
  name: string;
  amount: string;
  timestamp: string;
};

export type LiveRewardsConnectionState = "connecting" | "connected" | "disconnected";

export type LiveRewardsFeedState = {
  connectionState: LiveRewardsConnectionState;
  records: LiveRewardRecord[];
};

export const MAX_LIVE_REWARDS = 5;

export const INITIAL_LIVE_REWARDS_STATE: LiveRewardsFeedState = {
  connectionState: "connecting",
  records: [],
};

export type LiveRewardsWsMessage = {
  type: string;
  certs?: unknown[];
  cert?: unknown;
};

function isLiveRewardRecord(value: unknown): value is LiveRewardRecord {
  return (
    !!value &&
    typeof value === "object" &&
    typeof (value as LiveRewardRecord).name === "string" &&
    typeof (value as LiveRewardRecord).amount === "string" &&
    typeof (value as LiveRewardRecord).timestamp === "string"
  );
}

export function applyLiveRewardsMessage(
  state: LiveRewardsFeedState,
  message: LiveRewardsWsMessage,
): LiveRewardsFeedState {
  if (message.type === "backlog" && Array.isArray(message.certs)) {
    const validCerts = message.certs.filter(isLiveRewardRecord);
    return { ...state, records: validCerts.slice().reverse().slice(0, MAX_LIVE_REWARDS) };
  }
  if (message.type === "new_cert" && isLiveRewardRecord(message.cert)) {
    return { ...state, records: [message.cert, ...state.records].slice(0, MAX_LIVE_REWARDS) };
  }
  return state;
}

export function deriveInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function timeAgo(isoTimestamp: string, nowMs: number = Date.now()): string {
  const diffSeconds = Math.max(0, (nowMs - new Date(isoTimestamp).getTime()) / 1000);
  if (diffSeconds < 5) return "just now";
  if (diffSeconds < 60) return Math.floor(diffSeconds) + "s ago";
  if (diffSeconds < 3600) return Math.floor(diffSeconds / 60) + "m ago";
  if (diffSeconds < 86400) return Math.floor(diffSeconds / 3600) + "h ago";
  const days = Math.floor(diffSeconds / 86400);
  return days + (days === 1 ? " day ago" : " days ago");
}

const RECONNECT_BASE_MS = 3000;
const RECONNECT_MAX_MS = 60000;

// ─── Dev-only visual fallback ────────────────────────────────────────────
// The real backend only accepts WebSocket connections whose Origin header
// matches the production domain (see LIVE_PAYOUTS_BACKEND's comment in
// liveSiteContent.ts) — on localhost during development the socket is
// always rejected (1008 Policy Violation), so this table would otherwise
// sit on "Connecting…" forever while developing locally. Fictional
// names/amounts only, never real customer records, and gated to
// import.meta.env.DEV — production builds only ever show genuine data
// from the real socket. If the real socket DOES connect (e.g. once
// deployed to the real domain), its messages replace this via the normal
// applyLiveRewardsMessage flow same as any other state update.
function mockLiveRewards(): LiveRewardRecord[] {
  const now = Date.now();
  const hoursAgo = (h: number) => new Date(now - h * 3600_000).toISOString();
  return [
    { name: "Elena Marchetti", amount: "$2,840.15", timestamp: hoursAgo(1) },
    { name: "Kwame Boateng", amount: "$1,975.60", timestamp: hoursAgo(2) },
    { name: "Priya Nair", amount: "$3,102.90", timestamp: hoursAgo(4) },
    { name: "Lucas Ferreira", amount: "$1,340.25", timestamp: hoursAgo(6) },
    { name: "Anastasia Volkov", amount: "$2,567.80", timestamp: hoursAgo(9) },
    { name: "Tomas Novak", amount: "$1,689.45", timestamp: hoursAgo(23) },
  ];
}

// Extra fictional names cycled in one at a time, dev-only (see below) — lets
// the "newest reward slides in, oldest fades out" entrance/exit motion
// actually be observed while developing, since the real backend only ever
// pushes on genuine reward events (unpredictable timing, and unreachable
// from localhost anyway — see the Origin-restriction comment above).
const MOCK_ROTATION_POOL: Omit<LiveRewardRecord, "timestamp">[] = [
  { name: "Freya Lindqvist", amount: "$2,215.40" },
  { name: "Marco Belliveau", amount: "$1,802.75" },
  { name: "Aisha Rahman", amount: "$3,450.20" },
  { name: "Jonas Weber", amount: "$1,590.60" },
];

export function useLiveRewardsFeed(): LiveRewardsFeedState {
  const [state, setState] = useState<LiveRewardsFeedState>(() =>
    import.meta.env.DEV
      ? { connectionState: "connected", records: mockLiveRewards().slice(0, MAX_LIVE_REWARDS) }
      : INITIAL_LIVE_REWARDS_STATE,
  );

  useEffect(() => {
    let cancelled = false;
    let socket: WebSocket | null = null;
    let reconnectTimer: ReturnType<typeof setTimeout> | null = null;
    let attempt = 0;

    function scheduleReconnect() {
      if (cancelled) return;
      const delay = Math.min(RECONNECT_BASE_MS * 2 ** attempt, RECONNECT_MAX_MS);
      attempt += 1;
      reconnectTimer = setTimeout(connect, delay);
    }

    function connect() {
      if (cancelled) return;
      setState((s) => ({ ...s, connectionState: "connecting" }));

      let ws: WebSocket;
      try {
        ws = new WebSocket(LIVE_PAYOUTS_BACKEND.websocket);
      } catch {
        setState((s) => ({ ...s, connectionState: "disconnected" }));
        scheduleReconnect();
        return;
      }
      socket = ws;

      ws.onopen = () => {
        if (cancelled || socket !== ws) return;
        attempt = 0;
        setState((s) => ({ ...s, connectionState: "connected" }));
      };

      ws.onmessage = (event) => {
        if (cancelled || socket !== ws) return;
        let parsed: unknown;
        try {
          parsed = JSON.parse(event.data);
        } catch {
          return;
        }
        if (!parsed || typeof parsed !== "object") return;
        setState((s) => applyLiveRewardsMessage(s, parsed as LiveRewardsWsMessage));
      };

      ws.onclose = () => {
        if (cancelled || socket !== ws) return;
        setState((s) => ({ ...s, connectionState: "disconnected" }));
        scheduleReconnect();
      };

      ws.onerror = () => {
        ws.close();
      };
    }

    connect();

    return () => {
      cancelled = true;
      if (reconnectTimer) clearTimeout(reconnectTimer);
      socket?.close();
    };
  }, []);

  const [, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 30000);
    return () => clearInterval(id);
  }, []);

  // Dev-only: simulate a new reward arriving every ~9s, cycling through
  // MOCK_ROTATION_POOL, so the entrance/exit animation is visible without
  // waiting for a real (unreachable-from-localhost) socket event. No-op
  // entirely in production builds — import.meta.env.DEV is statically
  // false there, so this effect body never runs.
  useEffect(() => {
    if (!import.meta.env.DEV) return;
    let i = 0;
    const id = setInterval(() => {
      const next = MOCK_ROTATION_POOL[i % MOCK_ROTATION_POOL.length];
      i += 1;
      setState((s) => applyLiveRewardsMessage(s, { type: "new_cert", cert: { ...next, timestamp: new Date().toISOString() } }));
    }, LIVE_PAYOUTS_DEV_ROTATION_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return state;
}
