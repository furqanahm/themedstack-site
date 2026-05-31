/** ConvertKit form for the founding waitlist (MedStack OS + ResearchStack). */
export const CONVERTKIT_FORM_ID = "9373212";
export const CONVERTKIT_ACTION = `https://app.kit.com/forms/${CONVERTKIT_FORM_ID}/subscriptions`;

export const MEDSTACK_OS_CHECKOUT_URL =
  "https://themedstack.lemonsqueezy.com/checkout/buy/f01b485a-19c8-4784-90c6-92ee1f8be525";

export const MEDSTACK_OS_LITE_URL =
  "https://blushing-virgo-5ac.notion.site/MedStack-OS-Lite-Free-Medical-Career-Dashboard-018fc7fa305082959e14010ec7486d8b";

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
