import { useEffect, useState } from "react";
import { LIVE_PAYOUTS_BACKEND } from "@/app/liveSiteContent";

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

export function useLiveRewardsFeed(): LiveRewardsFeedState {
  const [state, setState] = useState<LiveRewardsFeedState>(INITIAL_LIVE_REWARDS_STATE);

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

  return state;
}
