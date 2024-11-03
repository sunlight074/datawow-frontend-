export type BlogListByAuthResult = {
	blog_id: string;
	blog_title: string;
	blog_description: string;
	community_id: string;
	community_name: string;
	comment_count: number;
	blog_created_at: string;
	blog_created_by: string;
};

type Props = {
	userAccessToken: string;
};

export function getBlogListByAuth({
	userAccessToken,
}: Props): Promise<BlogListByAuthResult[] | undefined> {
	return new Promise((resolve) => {
		return resolve([
			{
				blog_id: "1",
				blog_title: "Test Blog",
				blog_description: "Test Blog Description",
				community_id: "1",
				community_name: "Test Community",
				comment_count: 5,
				blog_created_at: "2022-01-01T00:00:00.000Z",
				blog_created_by: "admin",
			},
			{
				blog_id: "2",
				blog_title: "Introduction to TypeScript",
				blog_description: "A guide to getting started with TypeScript.",
				community_id: "2",
				community_name: "TypeScript Community",
				comment_count: 10,
				blog_created_at: "2023-03-15T09:30:00.000Z",
				blog_created_by: "user123",
			},
		]);
	});
}
