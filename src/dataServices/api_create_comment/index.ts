import { getUserAccessToken } from "@/lib/user_access_token";
import { redirect, RedirectType } from "next/navigation";

export type CreateCommentParams = {
  comment_description: string;
};

export type CreateCommentResult = {
  success: boolean;
};

export async function createComment({
  comment_description,
}: CreateCommentParams): Promise<CreateCommentResult> {
  const userAccessToken = await getUserAccessToken();

  if (!userAccessToken) {
    return redirect("/login", RedirectType.push);
  }

  return new Promise((resolve) => {
    return resolve({
      success: true,
    });
  });
}
