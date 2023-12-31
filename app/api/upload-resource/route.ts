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
      formData.videoUrl as string,
      {
        resource_type: "video",
        allowed_formats: ["mp4", "mkv", "ogg", "avi", "webm"],
        timeout: 120000,
      }
    );

    formData.videoUrl = result.url;

    const res = await fetch(
      `https://api.unsplash.com/search/photos?client_id=2ftKLo4PsEAc2RAGFEZNcPbhFH7N0cs2KR4BFWKjsjI&page=1&query=${formData.title}`
    );

    if (!res.ok) throw new Error("Error fetching resource image");
    const imageResponse = await res.json();

    if (imageResponse.total === 0) {
      console.log("Errored");
      throw new Error("Please enter a short title with logical meaning");
    }

    const {
      results: [
        {
          urls: { raw },
        },
      ],
    } = imageResponse;

    console.log("formdata", formData);
    formData.imageUrl = raw;

    console.log("formData", formData);

    const res2 = await fetch("https://hngmentorme.onrender.com/api/resources", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // if (!res2.ok) throw new Error("Error fetching resource image");

    const data = await res2.json();
    console.log(data);
    if (data._id === undefined) {
      return NextResponse.json({
        success: false,
        error: "There was an error uploading the resource.",
      });
    }
    if (data.error) {
      return NextResponse.json({ success: false, error: data.error.message });
    }
    revalidatePath("/mentor-resources");
    return NextResponse.json(data);
  } catch (e: any) {
    console.log(e.message);
    return NextResponse.json({ error: e.message });
  }
}
