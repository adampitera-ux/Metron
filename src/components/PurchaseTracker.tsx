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
    // Only a real Stripe Checkout session id (cs_live_… / cs_test_…) counts. A plain visit, the
    // unfilled "{CHECKOUT_SESSION_ID}" placeholder or a hand-typed URL must never record a sale.
    if (!sessionId || !/^cs_(live|test)_[A-Za-z0-9]+$/.test(sessionId)) return;
    const plan = PLANS.find((p) => p.id === q.get("plan"));
    if (!plan) return;
    trackPurchase({
      plan: plan.id,
      value: plan.setup + plan.monthly, // setup + first month, charged today
      transactionId: sessionId,
    });
  }, []);
  return null;
}
