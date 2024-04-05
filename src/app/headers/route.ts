/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from "next/server";
 

export   function POST(request: Request) {  
  return NextResponse.json([...request.headers]);
}
