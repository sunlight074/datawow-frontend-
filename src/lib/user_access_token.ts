"use server";
import { cookies } from "next/headers";

export async function setUserAccessToken(token: string) {
	const cookieStore = await cookies();
	cookieStore.set("user_access_token", token);
}

export async function getUserAccessToken() {
	const cookieStore = await cookies();
	return cookieStore.get("user_access_token")?.value;
}
