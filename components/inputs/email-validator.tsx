import React, { useState, useEffect } from "react";

interface EmailValidatorProps {
  email: string;
  setIsValid: (isValid: boolean) => void;
  onValidEmail: () => void;
  inputChanged: boolean;
}
const EmailValidator: React.FC<EmailValidatorProps> = ({
  email,
  setIsValid,
  onValidEmail,
  inputChanged,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValid(isValid);
    if (isValid) {
      onValidEmail();
      setErrorMessage(null);
    } else if (inputChanged) {
      setErrorMessage("Please enter a valid email");
    }
  }, [email, setIsValid, onValidEmail]);
  return errorMessage ? (
    <p className="text-sm text-red-500 -m-5 pl-5">{errorMessage}</p>
  ) : null;
};
export default EmailValidator;
