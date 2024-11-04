import { getUserAccessToken } from "@/lib/user_access_token";
import { redirect, RedirectType } from "next/navigation";

export type UpdateBlogParams = {
  title: string;
  content: string;
  community_id: string;
  blog_id: string;
};

type UpdateBlogResult = {
  success: boolean;
};

export async function UpdateBlogById({
  title,
  content,
  community_id,
}: UpdateBlogParams): Promise<UpdateBlogResult> {
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
