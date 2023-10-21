"use client";

//  This component accepts 2 components : 1. MentorFormBuilder 2. MentorProgressBar
// The MentorFormBuilder renders the forms for each screen, while accepting data from the formData.js file
// The MentorProgressBar renders the progress bar in each screen based on a state variable called currForm
// The left side of the screen houses an svg element and a Container div which has the 5 forms. Each form is shown based on the state of currForm
// The Container div has 5 divs, in which each div houses the heading, progressbar and the form itself

import React, { useEffect, useRef, useState } from "react";

import { MentorProvider } from "./MentorContext";

import { MentorProfileCreationForms } from "./MentorUI";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";

export default function MentorPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <MentorProvider>
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <MentorProfileCreationForms />
      )}
    </MentorProvider>
  );
}
