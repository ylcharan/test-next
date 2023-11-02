// Get - getting data
// POST - creating data
// PUT - updating data

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  // fetch data from db
  return NextResponse.json([
    { id: 1, name: "mosh" },
    { id: 2, name: "charan" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  return NextResponse.json({ id: 1, name: body.name });
}
