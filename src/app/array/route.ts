/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from 'next/server'
 
export  function POST(request: Request) { 
    const array = [{test: "hello"},{test: "hello"}]
  return NextResponse.json(array)
} 