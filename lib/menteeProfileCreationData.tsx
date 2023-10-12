export type FormProps = {
  id: number;
  label: string;
  placeholder: string;
  nature: string;
  type: string;
};

const form1Arr = [
  {
    id: 1,
    label: "Enter your full name",
    placeholder: "Full name",
    nature: "input",
    type: "text",
  },
  {
    id: 2,
    label: "What gender do you identify as?",
    placeholder: "Select Gender",
    nature: "dropdown",
    type: "",
  },
  {
    id: 3,
    label: "Which city / country do you live in?",
    placeholder: "Select City/ Country",
    nature: "dropdown",
    type: "",
  },
];

const form2Arr = [
  {
    id: 1,
    label: "What is your expertise?",
    placeholder: "Select Expertise",
    nature: "input",
    type: "text",
  },
  {
    id: 2,
    label: "Company/School",
    placeholder: "Enter Company/School",
    nature: "dropdown",
    type: "",
  },
  {
    id: 3,
    label: "Your Title",
    placeholder: "E.g Product designer, student etc",
    nature: "dropdown",
    type: "",
  },
];

const form3Arr = [
  {
    id: 1,
    label: "Write a Bio",
    placeholder: "Tell us about yourself, your goal and what you love",
    nature: "",
    type: "textarea",
  },
  {
    id: 2,
    label: "What is your top goal right now?",
    placeholder: "Select goal",
    nature: "dropdown",
    type: "",
  },
];

const form4Arr = [
  {
    id: 1,
    label: "What discipline would you like to get mentored in?",
    placeholder: "Select Discipline",
    nature: "",
    type: "",
  },
  {
    id: 2,
    label: "Need help with any specific tools? (optional)",
    placeholder: "+ Add tools",
    nature: "dropdown",
    type: "",
  },
  {
    id: 3,
    label: "Need help with any specific skills? (optional)",
    placeholder: "+ Add skills",
    nature: "dropdown",
    type: "",
  },
  {
    id: 4,
    label: "Want a mentor from a specific country? (optional)",
    placeholder: "+ Add countries",
    nature: "dropdown",
    type: "",
  },
];

const formData = [form1Arr, form2Arr, form3Arr, form4Arr];

export default formData;
