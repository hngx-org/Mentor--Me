/* eslint-disable import/prefer-default-export */
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const resourceData = {
    category: formData.get("category"),
    description: formData.get("courseDescription")!,
    title: formData.get("title"),
    coursetype: formData.get("courseType"),
    price: formData.get("price"),
    ratings: "0.0",
    reviews: "0",
    currency: "N",
    name: "Olamilekan",
    role: "Frontend Developer",
    company: "Self employed",
    image: "random",
  };

  try {
    const res = await fetch("https://hngmentorme.onrender.com/api/resources", {
      method: "POST",
      body: JSON.stringify(resourceData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    revalidatePath("/mentor-resources");

    if (data.error) {
      return NextResponse.json({ success: false, message: data.error });
    }
    return NextResponse.json({ success: true });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "failed to upload resource" });

  }
}
