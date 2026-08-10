declare global {
  interface Window {
    Intercom?: ((command: string, ...args: unknown[]) => void) & {
      booted?: boolean;
    };
    intercomSettings?: Record<string, unknown>;
    attachEvent?: (event: string, listener: EventListener) => void;
  }
}

export const INTERCOM_APP_ID =
  (import.meta.env.VITE_INTERCOM_APP_ID as string | undefined)?.trim() || "a291av90";

const INTERCOM_LAUNCHER_SELECTOR = "#intercom-chat-button";

let bootPromise: Promise<void> | null = null;

function loadIntercomScript(appId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.getElementById("intercom-script")) {
      resolve();
      return;
    }

    const w = window;
    const ic = w.Intercom;
    if (typeof ic === "function") {
      resolve();
      return;
    }

    const queue = function (...args: unknown[]) {
      const i = w.Intercom as ((command: string, ...args: unknown[]) => void) & {
        q?: unknown[];
      };
      i.q = i.q || [];
      i.q.push(args);
    };
    w.Intercom = queue as typeof w.Intercom;

    const script = document.createElement("script");
    script.id = "intercom-script";
    script.async = true;
    script.src = `https://widget.intercom.io/widget/${appId}`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Intercom widget"));
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript?.parentNode?.insertBefore(script, firstScript);
  });
}

/** Boot the real Intercom messenger (hides default launcher; uses #intercom-chat-button). */
export function bootIntercom(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (bootPromise) return bootPromise;

  bootPromise = (async () => {
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: INTERCOM_APP_ID,
      hide_default_launcher: true,
      custom_launcher_selector: INTERCOM_LAUNCHER_SELECTOR,
    };

    await loadIntercomScript(INTERCOM_APP_ID);

    if (typeof window.Intercom === "function") {
      window.Intercom("boot", window.intercomSettings);
      window.Intercom("update", window.intercomSettings);
    }
  })().catch((err) => {
    bootPromise = null;
    console.error("[Intercom]", err);
  });

  return bootPromise ?? Promise.resolve();
}

export function openIntercomMessenger(): void {
  void bootIntercom().then(() => {
    if (typeof window.Intercom === "function") {
      window.Intercom("show");
    }
  });
}

export function hideIntercomMessenger(): void {
  if (typeof window.Intercom === "function") {
    window.Intercom("hide");
  }
}
