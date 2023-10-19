/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from "next/server";

type OneOffFormData = {
  sessionName?: string;
  description?: string;
  sessionType?: string;
  time?: string;
  date?: string;
  relevantTopics?: string;
  sessionUrl?: string;
  duration?: number;
  tag?: string;
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const data: OneOffFormData = await req.json();
  console.log("data:", data);

  const {
    sessionName,
    description,
    sessionType,
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
    time,
    date,
    relevantTopics,
    sessionUrl,
    duration,
    tag,
  });
};
