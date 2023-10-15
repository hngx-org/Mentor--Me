import React from "react";
import dynamic from "next/dynamic";

const DynamicCheckoutComponent = dynamic(
  () => import("@/components/Checkout/CheckoutComponent"),
  {
    ssr: false,
  }
);
export default function CheckoutPage() {
  return <DynamicCheckoutComponent />;
}
