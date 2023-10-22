/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from "next/server";

type RecurringFormData = {
  sessionName?: string;
  description?: string;
  sessionType?: string;
  occurence?: string;
  numberOfSession?: number;
  duration?: number;
  time?: string;
  date?: string;
  relevantTopics?: string;
  sessionUrl?: string;
  tag?: string;
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const data: RecurringFormData = await req.json();
  // console.log("data:", data);

  const {
    sessionName,
    description,
    sessionType,
    occurence,
    numberOfSession,
    time,
    date,
    relevantTopics,
    sessionUrl,
    duration,
    tag,
  } = data;

  //    return new NextResponse("Form Submitted");
  return NextResponse.json({
    sessionName,
    description,
    sessionType,
    numberOfSession,
    occurence,
    time,
    date,
    relevantTopics,
    sessionUrl,
    duration,
    tag,
  });
};
