/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from "next/server";

import { headers } from 'next/headers'

export   function POST(request: Request) {  
  const FALLBACK_IP_ADDRESS = 'local/unknown'
  const forwardedFor = headers().get('x-forwarded-for')
  let ress;
  if (forwardedFor) {
    ress =  forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS
  }
 
  ress =  headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS 

  return NextResponse.json({ ip: ress });
}
