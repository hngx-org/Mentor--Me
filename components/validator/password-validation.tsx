import React, { useState, useRef } from "react";

export interface PasswordPopoverProps {
  password: string;
}

export interface PasswordRequirementProps {
  meets: boolean;
  label: string;
}

export interface ProgressBarProps {
  color: string;
  value: number;
}

function ProgressBar({ color, value }: ProgressBarProps) {
  const bgColor =
    color === "teal"
      ? "bg-brand-green-primary"
      : color === "yellow"
      ? "bg-yellow-500"
      : "bg-red-300";

  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2.5 mb-2.5">
      <div
        className={`${bgColor} h-full rounded-full`}
        style={{ width: `${value}%` }}
      >
        {}
      </div>
    </div>
  );
}

const PasswordPopover: React.FC<PasswordPopoverProps> = ({ password }) => {
  const requirements = [
    { re: /[0-9]/, label: "Includes number" },
    { re: /[a-z]/, label: "Includes lowercase letter" },
    { re: /[A-Z]/, label: "Includes uppercase letter" },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
  ];

  function getStrength(password: string) {
    let multiplier = password.length > 5 ? 0 : 1;

    requirements.forEach((requirement) => {
      if (!requirement.re.test(password)) {
        multiplier += 1;
      }
    });

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
  }

  const strength = getStrength(password);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

  return (
    <div className="relative">
      <ProgressBar color={color} value={strength} />
    </div>
  );
};

export default PasswordPopover;
