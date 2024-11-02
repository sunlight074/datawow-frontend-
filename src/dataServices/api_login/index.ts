import { redirect, RedirectType } from "next/navigation";

export type LoginPayload = {
	username: string;
};

export function authenticateUser(credentials: LoginPayload) {
    localStorage.setItem("token", credentials.username);

	redirect("/", RedirectType.push);
}
