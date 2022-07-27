import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest): NextResponse {
    return NextResponse.next();
}
