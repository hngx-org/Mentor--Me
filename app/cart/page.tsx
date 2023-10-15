import React from "react";
import dynamic from "next/dynamic";

const DynamicCartComponent = dynamic(
  () => import("@/components/Cart/CartComponent"),
  {
    ssr: false,
  }
);
export default function CartPage() {
  return <DynamicCartComponent />;
}
