import React, { useState, useRef } from "react";

export interface PasswordPopoverProps {
  password: string;
  inputChanged: boolean;
  setIsPaswordValid: (isValid: boolean) => void;
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
      ? "bg-green-600"
      : color === "yellow"
      ? "bg-yellow-500"
      : "bg-red-500";
  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3.5 -mb-3">
      <div
        className={`${bgColor} h-full rounded-full`}
        style={{ width: `${value}%` }}
      >
        {}
      </div>
    </div>
  );
}
const PasswordPopover: React.FC<PasswordPopoverProps> = ({
  password,
  inputChanged,
  setIsPaswordValid,
}) => {
  const requirements = [
    { re: /[0-9]/, label: "Includes number" },
    { re: /[a-z]/, label: "Includes lowercase letter" },
    { re: /[A-Z]/, label: "Includes uppercase letter" },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
    { re: /^.{8,}$/, label: "Minimum 8 characters" },
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
  const isPasswordValid = strength >= 60 && password.length >= 8;
  if (inputChanged) {
    if (strength >= 60) {
      setIsPaswordValid(isPasswordValid);
    }
    if (isPasswordValid) {
      return null; // If requirements are settled, return null to hide the component
    }
    return (
      <>
        <ProgressBar color={color} value={strength} />
        <div className="text-xs text-gray-500 mt-2">
          <p>Password must include:</p>
          {requirements.map((requirement, index) => (
            <div
              key={requirement.label}
              className={
                requirement.re.test(password)
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              - {requirement.label}
            </div>
          ))}
        </div>
      </>
    );
  }
  return null;
};
export default PasswordPopover;
