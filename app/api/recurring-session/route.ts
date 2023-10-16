/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from "next/server";

type RecurringFormData = {
  sessionName?: string;
  description?: string;
  sessionType?: string;
  occurrence?: string;
  time?: string;
  date?: string;
  relevantTopics?: string;
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const data: RecurringFormData = await req.json();
  console.log("data:", data);

  const {
    sessionName,
    description,
    sessionType,
    occurrence,
    time,
    date,
    relevantTopics,
  } = data;

  //    return new NextResponse("Form Submitted");
  return NextResponse.json({
    sessionName,
    description,
    sessionType,
    occurrence,
    time,
    date,
    relevantTopics,
  });
};
