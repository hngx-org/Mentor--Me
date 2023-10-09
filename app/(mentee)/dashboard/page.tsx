"use client";

import React, { useState } from "react";
import { NextPage } from "next";

import NewMentee from "./newUser";
import RegularMentee from "./regularUser";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";

const MenteeDashboard: NextPage = () => {
  const [isNewUser, setIsNewUser] = useState(true);

  return isNewUser ? <NewMentee /> : <RegularMentee />;
};

export default MenteeDashboard;
