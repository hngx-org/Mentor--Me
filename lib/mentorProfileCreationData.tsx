import { continents, countries, languages } from "countries-list";

export type FormProps = {
  id: number;
  label: string;
  placeholder: string;
  nature: string;
  type: string;
};

// getting all the countries from a package
const allCountriesArr = Object.values(countries);
const allCountries = allCountriesArr.map((country) => country.name);

export const form1Arr = [
  {
    id: 1,
    label: "Enter your Name",
    placeholder: "Name",
    nature: "input",
    type: "text",
    apiName: "fullName",
  },
  {
    id: 2,
    label: "Email Address",
    placeholder: "Email Address",
    nature: "",
    type: "email",
    apiName: "email",
  },
  {
    id: 3,
    label: "What gender do you identify as?",
    placeholder: "Male, Female, Rather not say.",
    nature: "dropdown",
    type: "",
    apiName: "gender",
    dropList: ["Male", "Female", "Rather Not Say"],
  },
  {
    id: 4,
    label: "Which country do you live in?",
    placeholder: "Select Country",
    nature: "dropdown",
    type: "",
    apiName: "country",
    dropList: allCountries,
  },
];

export const form2Arr = [
  {
    id: 1,
    label: "Job Title",
    placeholder: "Job title",
    nature: "input",
    type: "text",
    apiName: "title",
  },
  {
    id: 2,
    label: "Company/Organization",
    placeholder: "Company/Organization",
    nature: "",
    type: "",
    apiName: "company",
  },
  {
    id: 3,
    label: "Industry/Field of Expertise",
    placeholder: "Industry/Field of Expertise",
    nature: "dropdown",
    type: "",
    apiName: "expertise",
    dropList: [
      "Backend development",
      "Frontend Development",
      "Mobile Development",
      "UI/UX",
      "Product Management",
      "Video Editing",
    ],
  },
  {
    id: 4,
    label: "Years of Experience",
    placeholder: "3",
    nature: "",
    type: "number",
    apiName: "yearsOfExp",
  },
  {
    id: 5,
    label: "Skils",
    placeholder: "+ Add skils",
    nature: "dropdown",
    type: "",
    dropList: [
      "Backend development",
      "Frontend Development",
      "Mobile Development",
      "UI/UX",
      "Product Management",
      "Video Editing",
      "Soft skills",
    ],
    multiple: true,
    apiName: "skills",
  },
  {
    id: 6,
    label: "LInkedIn Profile",
    placeholder: "Link",
    nature: "",
    type: "url",
    apiName: "linkedin",
  },
  {
    id: 7,
    label: "Other Links",
    placeholder: "Link",
    nature: "",
    type: "url",
    apiName: "other_links",
  },
  {
    id: 8,
    label: "Certifications",
    placeholder: "Certified Developer",
    nature: "",
    type: "",
    apiName: "certifications",
  },
];

export const form3Arr = [
  {
    id: 1,
    label: "Highest Degree Earned",
    placeholder: "Bachelor’s Degree, Diploma..",
    nature: "dropdown",
    type: "",
    apiName: "degree",
    dropList: ["High School", "Diploma", "Bachelor's Degree", "Masters", "PhD"],
  },
  {
    id: 2,
    label: "Institution",
    placeholder: "University of California",
    nature: "",
    type: "",
    apiName: "institution",
  },
  {
    id: 3,
    label: "Year of Graduation",
    placeholder: "2023",
    nature: "",
    type: "number",
    apiName: "year_of_graduation",
  },
];

export const form4Arr = [
  {
    id: 1,
    label: "Bio/Introduction",
    placeholder: "",
    nature: "",
    type: "textarea",
    apiName: "bio",
  },
];

export const form5Arr = [
  {
    id: 1,
    label: "Previous Mentoring Experience",
    placeholder: "List if applicable",
    nature: "",
    type: "",
    apiName: "mentoring_experience",
  },
  {
    id: 2,
    label: "Mentorship Type",
    placeholder: "UI/UX",
    nature: "dropdown",
    type: "",
    apiName: "mentorship_type",
    dropList: [
      "Backend development",
      "Frontend Development",
      "Mobile Development",
      "UI/UX",
      "Product Management",
      "Video Editing",
    ],
  },
  {
    id: 3,
    label: "Mentorship Availability",
    placeholder: "6 hours per week",
    nature: "dropdown",
    type: "",
    apiName: "mentorship_availability",
    dropList: [
      "6 hours per week",
      "15 hours per week",
      "20 hours per week",
      "40+ hours per week",
    ],
  },
  {
    id: 4,
    label: "Preferred Time Slots",
    placeholder: "6:00pm to 8:00pm",
    nature: "dropdown",
    type: "",
    apiName: "preferred_startTime",
    dropList: [
      "8:00am to 10:00am",
      "10:00am to 12:00pm",
      "12:00pm to 3:00pm",
      "3:00pm to 6:00pm",
      "6:00pm to 8:00pm",
      "8:00pm to 10:00pm",
    ],
  },
  {
    id: 5,
    label: "Preferred Days",
    placeholder: "Weekdays - Monday to Friday",
    nature: "dropdown",
    type: "",
    apiName: "preferred_days",
    dropList: ["Weekdays- Monday to Friday", "Weekends - Saturday and Sunday"],
  },
];

export const formData = [form1Arr, form2Arr, form3Arr, form4Arr, form5Arr];
