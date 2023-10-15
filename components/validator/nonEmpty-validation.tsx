import React, { useState, useEffect } from "react";

interface NonEmptyValidatorProps {
  text: string;
  setIsValid: (isValid: boolean) => void;
  onValidText: () => void;
  inputChanged: boolean;
}

const NonEmptyValidator: React.FC<NonEmptyValidatorProps> = ({
  text,
  setIsValid,
  onValidText,
  inputChanged,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const isValid = text.trim() !== "";

    setIsValid(isValid);

    if (isValid) {
      onValidText();
      setErrorMessage(null);
    } else if (inputChanged) {
      setErrorMessage("This field cannot be empty");
    }
  }, [text, setIsValid, onValidText, inputChanged]);

  return errorMessage ? (
    <p className="text-sm text-red-500 -m-5 pl-5">{errorMessage}</p>
  ) : null;
};

export default NonEmptyValidator;
