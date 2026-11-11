/* Rimba analytics: explicit product events only; no form values or search terms. */
(function () {
  const ALLOWED_EVENTS = {
    destination_viewed: ['destination_id', 'category'],
    package_viewed: ['package_id', 'destination_id'],
    reservation_started: ['package_id'],
    reservation_submitted: ['package_id', 'guest_count_bucket', 'status'],
    msme_product_clicked: ['product_id'],
  };
  const config = window.RIMBA_ANALYTICS;
  if (!config?.projectToken || !config?.apiHost) return;
  const pendingEvents = [];
  let initialized = false;
  window.rimbaTrack = function (event, properties = {}) {
    const allowedKeys = ALLOWED_EVENTS[event];
    if (!allowedKeys) return;
    const safeProps = {};
    for (const key of allowedKeys) {
      if (properties[key] !== undefined && properties[key] !== null) {
        safeProps[key] = properties[key];
      }
    }
    if (initialized && window.posthog) {
      window.posthog.capture(event, safeProps);
    } else if (pendingEvents.length < 50) {
      pendingEvents.push([event, safeProps]);
    }
  };
  const script = document.createElement('script');
  script.async = true;
  const assetHost = config.apiHost
    .replace('://us.i.posthog.com', '://us-assets.i.posthog.com')
    .replace('://eu.i.posthog.com', '://eu-assets.i.posthog.com');
  script.src = `${assetHost.replace(/\/$/, '')}/static/array.js`;
  script.onload = function () {
    if (!window.posthog) return;
    window.posthog.init(config.projectToken, {
      api_host: config.apiHost,
      autocapture: false,
      capture_pageview: true,
      capture_pageleave: true,
      disable_session_recording: true,
      person_profiles: 'identified_only',
      persistence: 'memory',
      ip: false,
    });
    initialized = true;
    for (const [event, properties] of pendingEvents.splice(0)) {
      window.posthog.capture(event, properties);
    }
  };
  document.head.appendChild(script);
})();
