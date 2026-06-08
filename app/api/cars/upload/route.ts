import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
    const formData = await request.formData();
    const image = formData.get("image");

    if (!image || typeof image === "string") {
        return NextResponse.json({ error: "Ingen bild skickades." }, { status: 400 });
    }

    const originalName = image.name || "upload.jpg";
    const extension = path.extname(originalName) || ".jpg";
    const safeName = `${Date.now()}-${originalName.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    const uploadDir = path.join(process.cwd(), "public", "imgs", "cars");
    const targetPath = path.join(uploadDir, safeName);

    await fs.promises.mkdir(uploadDir, { recursive: true });
    const buffer = Buffer.from(await image.arrayBuffer());
    await fs.promises.writeFile(targetPath, buffer);

    return NextResponse.json({ imageSrc: `/imgs/cars/${safeName}` });
}
