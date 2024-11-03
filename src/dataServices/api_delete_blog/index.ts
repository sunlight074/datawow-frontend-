export type DeleteBlogParams = {
	blog_id: string;
	userAccessToken: string;
};

type DeleteBlogResult = {
	success: boolean;
};

export function deleteBlog({
	blog_id,
	userAccessToken,
}: DeleteBlogParams): Promise<DeleteBlogResult> {
	return new Promise((resolve) => {
		return resolve({
			success: true,
		});
	});
}
