import { NextResponse } from "next/server";
import { readFileSync, existsSync } from "fs";
import path from "path";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get("file");

  if (!file) {
    return new NextResponse("File parameter is missing", { status: 400 });
  }

  // Sanitize file name to prevent directory traversal
  const sanitizedFile = path.basename(file);
  const filePath = path.join(process.cwd(), "public", sanitizedFile);

  if (!existsSync(filePath)) {
    return new NextResponse("File not found", { status: 404 });
  }

  try {
    const fileBuffer = readFileSync(filePath);

    // Force aggressive download headers for mobile browsers
    const response = new NextResponse(fileBuffer);
    response.headers.set("Content-Disposition", `attachment; filename="${sanitizedFile}"`);
    response.headers.set("Content-Type", "application/vnd.android.package-archive");
    response.headers.set("Content-Length", fileBuffer.length.toString());
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    return response;
  } catch (error) {
    console.error("Error serving file:", error);
    return new NextResponse("Failed to read file", { status: 500 });
  }
}
