import React, { useState } from "react";
import Image from "next/image";
import RadioButton from "./Radio";
import PricingSelect from "./PricingInput";
import SubscriptionPlan from "./SubscriptionPlan";
import NotesTextarea from "./Notes";
import { clock } from "@/public";
import Calendarcomponent from "./Calender";
import { Button } from "@/components/buttons/button";

const MentorProfileRight = () => {
  interface TxF {
    id: string;
    time: String;
  }
  const TimeSlots: TxF[] = [
    { id: "1", time: "11:30AM" },
    { id: "2", time: "11:30AM" },
    { id: "3", time: "11:30AM" },
    { id: "4", time: "11:30AM" },
    { id: "5", time: "11:30AM" },
    { id: "6", time: "11:30AM" },
  ];

  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [selectedPricing, setSelectedPricing] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const handlePlanChange = (value: string) => {
    setSelectedPlan(value);
  };

  const handlePricingChange = (value: string) => {
    setSelectedPricing(value);
  };

  const handleNotesChange = (value: string) => {
    setNotes(value);
  };

  return (
    <div className="space-y-10">
      <div className="">
        <p className="font-Hanken font-bold text-lg mb-3">Available Sessions</p>
        <Calendarcomponent />
      </div>
      <div>
        <p className="font-Hanken font-bold text-lg mb-3">
          Available time slots
        </p>
        <ul className="flex flex-wrap gap-3 ">
          {TimeSlots.map((time) => (
            <li
              key={time.id}
              className="border border-black py-2 px-5 rounded-lg flex gap-2"
            >
              <Image src={clock} alt="" />
              {time.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-grow border-t border-Neutra30" />
      <div>
        {" "}
        <p className="font-Hanken font-bold text-lg mb-3">Time Zones</p>
        <RadioButton />
      </div>
      <SubscriptionPlan
        selectedPlan={selectedPlan}
        onChange={handlePlanChange}
      />
      <PricingSelect
        selectedPricing={selectedPricing}
        onChange={handlePricingChange}
      />
      <NotesTextarea notes={notes} onChange={handleNotesChange} />
      <div className="flex justify-center !py-20">
        <Button className="text-[10px] w-2/3 p-3" variant="primary" paddingLess>
          Book A Session
        </Button>
      </div>
    </div>
  );
};

export default MentorProfileRight;
