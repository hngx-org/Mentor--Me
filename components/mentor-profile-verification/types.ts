import React, { ReactEventHandler } from "react";

export interface ButtonControlProps {
  onNext?: ReactEventHandler;
  onPrev?: ReactEventHandler;
  handleSubmit?: ReactEventHandler;
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
    graduationFile: File | null;
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
    fullname: string;
    dateofBirth: string;
    idType: string;
    idNumber: string;
    uploadID: File | null;
  };
}
