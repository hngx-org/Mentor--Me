"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function uploadResource(
  prevState: any,
  formData: FormData
) {
  const resourceData = {
    title: formData.get("course-title"),
    courseDescription: formData.get("course-description"),
    category: formData.get("category"),
    coursetype: formData.get("course-type"),
    price: formData.get("price"),
    ratings: "0.0",
    reviews: "0",
    currency: "N",
    name: "Olamilekan",
    role: "Frontend Developer",
    company: "Self employed",
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
    revalidatePath("/mentor-resources");
    redirect("/mentor-resources");
  } catch (e) {
    const rand = "";
  }
}
