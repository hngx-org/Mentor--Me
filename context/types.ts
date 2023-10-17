export interface CurrentMentor {
  _id: string;
  userProfile: string;
  yearsOfExp: number;
  skills: string;
  linkedin: string;
  certifications: string;
  certification_file: string;
  degree: string;
  institution: string;
  year_of_graduation: number;
  mentoring_experience: string;
  mentorship_type: string;
  mentorship_availability: string;
  preferred_startTime: string;
  preferred_endTime: string;
  preferred_days: string;
  isVerified: string;
  updatedAt: string;
  verificationData: {
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
    _id: string;
  };
  userDetails: {
    _id: string;
    email: string;
    emailVerified: boolean;
    accountDisabled: boolean;
    role: string;
    lastActive: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    profileLink: string;
    bio: string;
    fullName: string;
  };
}
