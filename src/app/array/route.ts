/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from 'next/server'
 
export async function POST(request: Request) { 
    const res   = await request.text()  
    console.log(res)
    const array = [{test: "hello"},{test: "hello"}]
  return NextResponse.json(array)
} 