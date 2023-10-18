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

const form1Arr = [
  {
    id: 1,
    label: "Enter your name",
    placeholder: "Name",
    nature: "input",
    type: "text",
    apiName: "fullName",
  },
  {
    id: 2,
    label: "What gender do you identify as?",
    placeholder: "Select Gender",
    nature: "dropdown",
    type: "",
    apiName: "gender",
    dropList: ["Male", "Female", "Rather Not Say"],
  },
  {
    id: 3,
    label: "Which country do you live in?",
    placeholder: "Select Country",
    nature: "dropdown",
    type: "",
    apiName: "country",
    dropList: allCountries,
  },
];

const form2Arr = [
  {
    id: 1,
    label: "What is your expertise?",
    placeholder: "Select Expertise",
    nature: "dropdown",
    type: "text",
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
    id: 2,
    label: "Company/School",
    placeholder: "Enter Company/School",
    nature: "",
    type: "",
    apiName: "company",
  },
  {
    id: 3,
    label: "Your Title",
    placeholder: "E.g Product designer, student etc",
    nature: "",
    type: "",
    apiName: "title",
  },
];

const form3Arr = [
  {
    id: 1,
    label: "Write a Bio",
    placeholder: "Tell us about yourself, your goal and what you love",
    nature: "",
    type: "textarea",
    apiName: "bio",
  },
  {
    id: 2,
    label: "What is your top goal right now?",
    placeholder: "Type in your goal",
    nature: "input",
    type: "",
    apiName: "goal",
  },
];

const form4Arr = [
  {
    id: 1,
    label: "What discipline would you like to get mentored in?",
    placeholder: "Select Discipline",
    nature: "dropdown",
    type: "",
    dropList: [
      "Backend development",
      "Frontend Development",
      "Mobile Development",
      "UI/UX",
      "Product Management",
      "Video Editing",
    ],
    apiName: "discipline_request",
  },
  {
    id: 2,
    label: "Need help with any specific tools? (optional)",
    placeholder: "+ Add tools",
    nature: "dropdown",
    type: "",
    dropList: [
      "Jira",
      "Trello",
      "Postman",
      "Firebase",
      "VS Code",
      "Premier Pro",
      "Javascript",
      "Python",
      "GO",
      "Flutter",
      "C#",
    ],
    multiple: true,
    apiName: "tools_request",
  },
  {
    id: 3,
    label: "Need help with any specific skills? (optional)",
    placeholder: "+ Add skills",
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
    apiName: "skills_request",
  },
  {
    id: 4,
    label: "Want a mentor from a specific country? (optional)",
    placeholder: "Select country",
    nature: "dropdown",
    type: "",
    dropList: allCountries,
    apiName: "country_request",
  },
];

const formData = [form1Arr, form2Arr, form3Arr, form4Arr];

export default formData;
