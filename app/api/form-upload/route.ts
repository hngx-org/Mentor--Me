/* eslint-disable import/prefer-default-export */
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const image: File | null = data.get("image") as unknown as File;

  if (!image) {
    return NextResponse.json({ error: "File not found" });
  }

  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = `/uploads/${image.name}`;
  await writeFile(path, buffer);
  // console.log(`Uploaded file: ${path}`);

  return NextResponse.json({ success: true });
}
