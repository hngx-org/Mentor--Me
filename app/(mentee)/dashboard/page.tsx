"use client";

import { NextPage } from "next";
import React, { useState } from "react";
import NewMentee from "./newUser";

const MenteeDashboard: NextPage = () => {
  const [isNewUser, setIsNewUser] = useState(true);

  return <NewMentee />;
};

export default MenteeDashboard;
