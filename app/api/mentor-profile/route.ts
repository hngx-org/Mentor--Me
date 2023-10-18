/* eslint-disable import/prefer-default-export */

import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "dp5ysdt4c",
  api_key: "484974749171579",
  api_secret: "Cg4R45jPQx1TUmrTpmMenPI4MYo",
});

export async function POST(request: NextRequest) {
  const data = await request.json();
  //   const url = `eager=w_400,h_300,c_pad|w_260,h_200,c_crop&public_id=sample_image&timestamp=${Date.now()}`;
  //   const response = await fetch(
  //     `https://api.cloudinary.com/v1_1/dp5ysdt4c/image/upload`,
  //     {
  //       method: "POST",
  //       body: data,
  //     }
  //   );

  try {
    const response = await cloudinary.v2.uploader.upload(data, {
      resource_type: "image",
    });
    console.log(response);

    return NextResponse.json({ url: response.url });
  } catch (e) {
    return NextResponse.json({ error: "error" });
  }
}
