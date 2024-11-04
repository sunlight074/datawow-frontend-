import { getUserAccessToken } from "@/lib/user_access_token";
import { redirect, RedirectType } from "next/navigation";

export type CreateBlogParams = {
  title: string;
  content: string;
  community_id: string;
};

type CreateBlogResult = {
  success: boolean;
};

export async function createBlog({
  title,
  content,
  community_id,
}: CreateBlogParams): Promise<CreateBlogResult> {
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
