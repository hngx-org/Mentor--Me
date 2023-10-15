"use client";

//  This component accepts 2 components : 1. MenteeFormBuilder 2. MenteeProgressBar
// The MenteeFormBuilder renders the forms for each screen, while accepting data from the formData.js file
// The MenteeProgressBar renders the progress bar in each screen based on a state variable called currForm
// The left side of the screen houses an svg element and a Container div which has the 4 forms. Each form is shown based on the state of currForm
// The Container div has 4 divs, in which each div houses the heading, progressbar and the form itself

import React, { useEffect, useRef, useState } from "react";
import { MenteeProvider } from "./MenteeContext";
import MenteeProfileCreationForms from "./MenteeUI";

function MenteePage() {
  return (
    <MenteeProvider>
      <MenteeProfileCreationForms />
    </MenteeProvider>
  );
}

export default MenteePage;
