/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log(request)
  const res = await request.text();
  return NextResponse.json({ res: res });
}
