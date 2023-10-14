// src/components/SubscriptionPlan.tsx
import React from "react";

interface SubscriptionPlanProps {
  selectedPlan: string;
  onChange: (value: string) => void;
}

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = ({
  selectedPlan,
  onChange,
}) => (
  <div className="w-full">
    <p className="font-Hanken font-bold text-lg mb-3">Subscription Plan</p>
    <select
      id="plan"
      name="plan"
      className="focus:outline-none p-2 w-full border border-Neutra30 rounded-md"
      value={selectedPlan}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select your Subscription Plan</option>
      <option value="basic">Basic Plan</option>
      <option value="premium">Premium Plan</option>
      <option value="ultimate">Ultimate Plan</option>
    </select>
  </div>
);

export default SubscriptionPlan;
