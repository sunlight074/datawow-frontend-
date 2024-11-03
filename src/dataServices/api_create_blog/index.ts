import { getUserAccessToken } from "@/lib/user_access_token";

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
