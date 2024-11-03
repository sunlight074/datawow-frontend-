export type CreateCommentParams = {
	comment_description: string;
	userAccessToken: string;
};

export type CreateCommentResult = {
	success: boolean;
};

export function createComment({
	comment_description,
	userAccessToken,
}: CreateCommentParams): Promise<CreateCommentResult> {
	return new Promise((resolve) => {
		return resolve({
			success: true,
		});
	});
}
