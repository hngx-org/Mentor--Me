"use server";

import { revalidatePath } from "next/cache";

export default async function uploadResource(
  prevState: any,
  formData: FormData
) {
  const resourceData = {
    title: formData.get("course-title"),
    courseDescription: formData.get("course-description"),
    category: formData.get("category"),
    courseType: formData.get("course-type"),
    price: formData.get("price"),
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
  } catch (e) {
    const rand = "";
  }
}
