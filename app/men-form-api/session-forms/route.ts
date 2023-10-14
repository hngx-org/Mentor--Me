/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from "next/server";

type FormData = {
  sessionName?: string;
  description?: string;
  attendeesLimit?: number;
  time?: string;
  date?: string;
  topics?: string;
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const data: FormData = await req.json();
  console.log("data:", data);

  const { sessionName, description, attendeesLimit, time, date, topics } = data;

  //    return new NextResponse("Form Submitted");
  return NextResponse.json({
    sessionName,
    description,
    attendeesLimit,
    time,
    date,
    topics,
  });
};

// export default POST;
