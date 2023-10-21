/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from "next/server";

type FormData = {
  sessionName?: string;
  description?: string;
  attendeesLimit?: number;
  time?: string;
  date?: string;
  relevantTopics?: string;
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const data: FormData = await req.json();
  // console.log("data:", data);

  const {
    sessionName,
    description,
    attendeesLimit,
    time,
    date,
    relevantTopics,
  } = data;

  //    return new NextResponse("Form Submitted");
  return NextResponse.json({
    sessionName,
    description,
    attendeesLimit,
    time,
    date,
    relevantTopics,
  });
};

// export default POST;
