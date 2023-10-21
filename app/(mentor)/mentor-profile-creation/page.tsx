"use client";

//  This component accepts 2 components : 1. MentorFormBuilder 2. MentorProgressBar
// The MentorFormBuilder renders the forms for each screen, while accepting data from the formData.js file
// The MentorProgressBar renders the progress bar in each screen based on a state variable called currForm
// The left side of the screen houses an svg element and a Container div which has the 5 forms. Each form is shown based on the state of currForm
// The Container div has 5 divs, in which each div houses the heading, progressbar and the form itself

import React, { useEffect, useRef, useState } from "react";
import { useMentorContext } from "@/app/(mentor)/mentor-profile-creation/MentorContext";

import { MentorProvider } from "./MentorContext";

import { MentorProfileCreationForms } from "./MentorUI";

export default function MentorPage() {
  const { formInputs, setFormInputs, currForm, loader } = useMentorContext();
  // storing the data in localstorage

  return (
    <MentorProvider>
      <div className="flex w-full h-full justify-center items-center min-h-[100vh]">
        <MentorProfileCreationForms />
      </div>
    </MentorProvider>
  );
}
