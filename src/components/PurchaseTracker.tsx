"use client";

import { useEffect } from "react";
import { PLANS } from "@/content/plans";
import { trackPurchase } from "@/lib/track";

/**
 * Fires the purchase conversion on /welcome after a Stripe checkout.
 * Each Stripe Payment Link should redirect to:
 *   https://www.usemetron.com/welcome?plan=<launch|growth|scale|enterprise>&session_id={CHECKOUT_SESSION_ID}
 * Stripe fills in the session id, which we use as the transaction id.
 */
export default function PurchaseTracker() {
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const sessionId = q.get("session_id");
    if (!sessionId) return; // a plain visit to /welcome isn't a purchase
    const plan = PLANS.find((p) => p.id === q.get("plan"));
    trackPurchase({
      plan: plan?.id ?? "unknown",
      value: plan ? plan.setup + plan.monthly : 0, // setup + first month, charged today
      transactionId: sessionId,
    });
  }, []);
  return null;
}
