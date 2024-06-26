/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();
  return NextResponse.json(res);
}
