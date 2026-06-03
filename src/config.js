export const MEDSTACK_OS_CHECKOUT_URL =
  "https://buy.stripe.com/fZu00l6Ptbjo3jReqq93y01";

export const MEDSTACK_OS_ACCESS_URL =
  "https://gilded-newsprint-f85.notion.site/00-START-HERE-The-MedStack-OS-Dashboard-37154fbb005b81c2812add1d4db4ec30?source=copy_link";

export const MEDSTACK_OS_LITE_URL =
  "https://blushing-virgo-5ac.notion.site/MedStack-OS-Lite-Free-Medical-Career-Dashboard-018fc7fa305082959e14010ec7486d8b?source=copy_link";

export const MEDSTACK_OS_LITE_FORM_URL = MEDSTACK_OS_LITE_URL;

/**
 * ResearchStack Starter System pricing.
 * Edit these values to change the offer everywhere it appears.
 * - `live: true`  → shows a purchase CTA linking to `checkoutUrl`.
 * - `live: false` → shows a waitlist CTA linking to #waitlist.
 * Paste your Stripe / Gumroad / payment link into `checkoutUrl`.
 */
export const PRICING = {
  live: false,
  currency: "AUD",
  founding: "$497",
  regular: "$997",
  note: "Limited founding seats",
  buyCta: "Get founding access",
  waitlistCta: "Join the founding waitlist",
  checkoutUrl: "", // e.g. "https://buy.stripe.com/..."  (empty = placeholder)
};
