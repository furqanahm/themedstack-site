/** ConvertKit form for the founding waitlist (MedStack OS + ResearchStack). */
export const CONVERTKIT_FORM_ID = "9373212";
export const CONVERTKIT_ACTION = `https://app.kit.com/forms/${CONVERTKIT_FORM_ID}/subscriptions`;

/**
 * ResearchStack Starter System pricing.
 * Edit these values to change the offer everywhere it appears.
 * - `live: true`  → shows a purchase CTA linking to `checkoutUrl`.
 * - `live: false` → shows a waitlist CTA linking to #waitlist.
 * Paste your Stripe / Gumroad / payment link into `checkoutUrl`.
 */
export const PRICING = {
  live: true,
  currency: "AUD",
  founding: "$497",
  regular: "$997",
  note: "Founding price — limited seats",
  buyCta: "Get founding access",
  waitlistCta: "Join the founding waitlist",
  checkoutUrl: "", // e.g. "https://buy.stripe.com/..."  (empty = placeholder)
};
