import { deleteUserAccessToken } from "@/lib/user_access_token";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  await deleteUserAccessToken();

  return NextResponse.redirect(new URL("/login", req.url));
}
