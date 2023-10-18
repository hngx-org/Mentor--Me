/* eslint-disable import/prefer-default-export */
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const resourceId = await request.json();

  try {
    const res = await fetch(
      `https://hngmentorme.onrender.com/api/resources/${resourceId}`,
      {
        method: "DELETE",
      }
    );
    revalidatePath("/mentor-resources/uploaded-resources");
    if (!res.ok) {
      return NextResponse.json({
        error: "There was an error deleting the resource",
      });
    }
    return NextResponse.json({
      success: "Resource deleted successfully",
    });
  } catch (e: any) {
    return NextResponse.json({
      error: "There was an error deleting the resource",
    });
  }
}
