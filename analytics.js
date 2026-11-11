/* Rimba analytics: explicit product events only; no form values or search terms. */
(function () {
  const config = window.RIMBA_ANALYTICS;
  if (!config?.projectToken || !config?.apiHost) return;
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
      person_profiles: 'identified_only',
      persistence: 'memory',
      ip: false,
    });
    window.rimbaTrack = function (event, properties = {}) {
      window.posthog.capture(event, properties);
    };
  };
  document.head.appendChild(script);
})();
