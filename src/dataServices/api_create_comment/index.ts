import { getUserAccessToken } from "@/lib/user_access_token";

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
