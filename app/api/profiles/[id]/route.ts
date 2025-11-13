import { NextResponse } from "next/server";
import profiles from "@/data/profiles";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // ✅ Fixes "params is Promise"
  const profile = profiles.find((p) => p.id === id);
  if (!profile)
    return NextResponse.json({ message: "Not found" }, { status: 404 });

  return NextResponse.json(profile);
}
