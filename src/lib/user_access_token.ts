"use server";
import { cookies } from "next/headers";

export async function setUserAccessToken(token: string) {
	const cookieStore = await cookies();
	cookieStore.set("token", token);
}

export async function getUserAccessToken() {
	const cookieStore = await cookies();
	return cookieStore.get("token")?.value;
}
