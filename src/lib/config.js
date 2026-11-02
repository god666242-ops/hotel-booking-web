// Central place for public config used by the marketing site.
export const WIDGET_DEMO_URL =
  process.env.NEXT_PUBLIC_WIDGET_DEMO_URL || 'http://localhost:3001/?mock';

export const EMBED_SRC = process.env.NEXT_PUBLIC_EMBED_SRC || 'https://cdn.purebook.in/engine.js';

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.purebook.in';

// Matches the real widget: <hotel-booking-engine data-hotel="slug" ...> + script
export const EMBED_SNIPPET = `<hotel-booking-engine data-hotel="your-hotel-slug" data-primary="#4f46e5"></hotel-booking-engine>
<script defer src="${EMBED_SRC}"></script>`;

// Mirrors backend default (Hotel.paymentConfig.payAtHotelCommissionPercent = 8)
export const PLATFORM_COMMISSION = 0.08;
