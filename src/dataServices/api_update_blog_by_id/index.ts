import { getUserAccessToken } from "@/lib/user_access_token";

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
	if (userAccessToken) {
		return new Promise((_, reject) => {
			reject({
				success: false,
			});
		});
	}

	return new Promise((resolve) => {
		return resolve({
			success: true,
		});
	});
}
