import React, { useState, Dispatch, SetStateAction } from "react";

interface CardDetailsProps {
  onSetStep: Dispatch<SetStateAction<number>>; // Define the type for onSetStep
}

export default function CardSelect(props: CardDetailsProps) {
  const [step, setStep] = useState(1);
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const frequencyOptions = ["Daily", "Weekly", "Monthly"];
  const paymentOptions = [
    { id: "paypal", label: "PayPal", icon: "/assets/cardimages/paypal.png"},
    { id: "applepay", label: "Apple Pay", icon: "/assets/cardimages/apple-pay.png" },
    { id: "visa", label: "Visa", icon: "/assets/cardimages/visa.png" }, // Use the imported Visa logo image here
    { id: "mastercard", label: "Mastercard", icon: "/assets/cardimages/card.png" }, // Use the imported Mastercard logo image here
  ];

  const handleFrequencyChange = (frequency: React.SetStateAction<string>) => {
    setSelectedFrequency(frequency);
  };

  const handlePaymentOptionChange = (
    optionId: React.SetStateAction<string>
  ) => {
    setSelectedPaymentOption(optionId);
  };

  return (
    <div className="p-12">
      <div className="mt-7">
        <label htmlFor="paymentFrequency" className="text-lg font-light mb-4 p-4">
          Payment Frequency
        </label>
        <div className="relative mb-4 p-4">
          <div>
          </div>
          <select
            value={selectedFrequency}
            onChange={(e) => handleFrequencyChange(e.target.value)}
            className="w-full p-2 pl-10 border rounded-lg bg-white-100"
          >
            <option className="text-sm font-light" value="" disabled>
              Select payment frequency
            </option>
            {frequencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-4">
        <label className="block text-lg font-bold mb-3">
          Choose Preferred Payment Option
        </label>
        <div>
          {paymentOptions.map((option) => (
            <label
              key={option.id}
              htmlFor={option.id}
              className={`mb-2 flex items-center p-2 border rounded cursor-pointer ${
                selectedPaymentOption === option.id
                  ? "border-blue-500"
                  : "border-gray-400"
              }`}
            >
              <input
                type="radio"
                id={option.id}
                name="paymentOption"
                value={option.id}
                checked={selectedPaymentOption === option.id}
                onChange={() => handlePaymentOptionChange(option.id)}
                className="mr-2 appearance-none rounded-full border border-gray-400 w-5 h-5 checked:bg-blue-500 checked:border-transparent"
              />
              {option.label}
              <span className="flex-grow"></span>
              <img width="40px" height="40px" src={option.icon} alt="" />  {/* Use the custom icon here */}
            </label>
          ))}
        </div>
      </div>

      <div className="p-5 flex justify-end">
        <button
          onClick={() => props.onSetStep(3)}
          className="px-4 py-2 bg-black text-white-100 rounded hover:bg-blue-700" style={{color:"white"}}
        >
          Continue ➞
        </button>
      </div>
    </div>
  );
}