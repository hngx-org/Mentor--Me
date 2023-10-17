/* eslint-disable import/prefer-default-export */
import { revalidatePath } from "next/cache";
import cloudinary from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData: { [prop: string]: string | File } = await request.json();

  cloudinary.v2.config({
    cloud_name: "dp5ysdt4c",
    api_key: "484974749171579",
    api_secret: "Cg4R45jPQx1TUmrTpmMenPI4MYo",
  });

  try {
    const result = await cloudinary.v2.uploader.upload(
      formData.file as string,
      {
        resource_type: "image",
      }
    );
    delete formData.file;

    formData.file = result.url;

    formData.ratings = "0.0";
    formData.reviews = "0";
    formData.currency = "N";

    console.log("works");

    const res = await fetch("https://hngmentorme.onrender.com/api/resources", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.error) {
      return NextResponse.json({ success: false, message: data.error });
    }
    revalidatePath("/mentor-resources");
    return NextResponse.json({ success: true });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "failed to upload resource" });
  }
}
