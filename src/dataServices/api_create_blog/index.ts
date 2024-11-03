export type CreateBlogParams = {
	userAccessToken: string;
	title: string;
	content: string;
	community_id: string;
};

type CreateBlogResult = {
	success: boolean;
};

export function createBlog({
	userAccessToken,
	title,
	content,
	community_id,
}: CreateBlogParams): Promise<CreateBlogResult> {
	return new Promise((resolve) => {
		return resolve({
			success: true,
		});
	});
}
