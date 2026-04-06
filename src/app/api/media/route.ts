import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".svg"];
const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".mov"];

export async function GET(request: NextRequest) {
  const folder = request.nextUrl.searchParams.get("folder");

  if (!folder || !["pictures", "photos", "videos"].includes(folder)) {
    return NextResponse.json({ error: "Invalid folder" }, { status: 400 });
  }

  const publicDir = path.join(process.cwd(), "public", folder);

  if (!fs.existsSync(publicDir)) {
    return NextResponse.json({ files: [] });
  }

  const allowedExtensions =
    folder === "videos" ? VIDEO_EXTENSIONS : IMAGE_EXTENSIONS;

  const files = fs
    .readdirSync(publicDir)
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return allowedExtensions.includes(ext);
    })
    .sort()
    .map((file) => ({
      name: file,
      src: `/${folder}/${file}`,
    }));

  return NextResponse.json({ files });
}
