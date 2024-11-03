"use server";
import { setUserAccessToken } from "@/lib/user_access_token";

export type LoginPayload = {
	username: string;
};

export async function authenticateUser(credentials: LoginPayload) {
	await setUserAccessToken(credentials.username);
}
