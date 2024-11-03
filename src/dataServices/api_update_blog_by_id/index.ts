export type UpdateBlogParams = {
	userAccessToken: string;
	title: string;
	content: string;
	community_id: string;
	blog_id: string;
};

type UpdateBlogResult = {
	success: boolean;
};

export function UpdateBlogById({
	userAccessToken,
	title,
	content,
	community_id,
}: UpdateBlogParams): Promise<UpdateBlogResult> {
	return new Promise((resolve) => {
		return resolve({
			success: true,
		});
	});
}
