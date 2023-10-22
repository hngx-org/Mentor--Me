import React, { ReactEventHandler } from "react";

export interface ButtonControlProps {
  onNext?: () => void;
  onPrev?: ReactEventHandler;
  handleSubmit?: () => void;
  formData?: FormData; // Add this prop for formData
  setFormData?: React.Dispatch<React.SetStateAction<FormData>>;
}

export interface StepListProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formSubmitted: boolean;
}

export interface FormData {
  certificates: {
    certificationName: string;
    issuingInstitution: string;
    graduationYear: string;
    graduationFile: string;
  };

  qualifications: {
    qualification: string;
    yearsExperience: string;
    qualificationDesc: string;
  };
  achievements: {
    achievementName: string;
    issuingOrganization: string;
    yearReceived: string;
    achievementDesc: string;
  };
  identification: {
    fullName: string;
    dateOfBirth: string;
    idType: string;
    idNumber: string;
    uploadID: string;
  };
}
