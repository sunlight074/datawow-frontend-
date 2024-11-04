import { getUserAccessToken } from "@/lib/user_access_token";
import { redirect, RedirectType } from "next/navigation";

export type DeleteBlogParams = {
  blog_id: string;
};

type DeleteBlogResult = {
  success: boolean;
};

export async function deleteBlog({
  blog_id,
}: DeleteBlogParams): Promise<DeleteBlogResult> {
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
