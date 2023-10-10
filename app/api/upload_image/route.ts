/* eslint-disable import/prefer-default-export */
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ error: "File not found" });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = `/uploads/${file.name}`;
  await writeFile(path, buffer);
  console.log(`Uploaded file: ${path}`);

  return NextResponse.json({ success: true });
}
