declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function pushDataLayerEvent(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });

  // Mock GA4 event (real GA4 would already be listening on the dataLayer above
  // once gtag.js is loaded via the GTM container in layout.tsx).
  // eslint-disable-next-line no-console
  console.info("[analytics] GA4 event:", event, payload);

  // Mock Meta Pixel event. If a real fbq snippet is ever added, this call
  // becomes live automatically since it fires the same window.fbq function.
  if (typeof window.fbq === "function") {
    window.fbq("track", event, payload);
  } else {
    // eslint-disable-next-line no-console
    console.info("[analytics] Meta Pixel event (mocked, fbq not loaded):", event, payload);
  }
}

export function trackLeadSubmitted(payload: Record<string, unknown>) {
  pushDataLayerEvent("generate_lead", payload);
}
