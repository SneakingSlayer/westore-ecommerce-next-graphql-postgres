import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");
export function middleware(
  req: NextRequest,
  res: NextResponse,
  ev: NextFetchEvent
) {
  const token = req.cookies.token || null;
  const url = req.url;

  if (
    url.includes("http://localhost:3000/signin") ||
    url.includes("http://localhost:3000/signup")
  ) {
    console.log(token !== null);
    if (token !== null) return NextResponse.redirect("http://localhost:3000/");
    return NextResponse.next();
  }

  return NextResponse.next();
}
