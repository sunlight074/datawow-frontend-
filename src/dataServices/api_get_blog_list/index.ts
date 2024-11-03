export type BlogListResult = {
	blog_id: string;
	blog_title: string;
	blog_description: string;
	community_id: string;
	community_name: string;
	comment_count: number;
	blog_created_at: string;
	blog_created_by: string;
};

export function getBlogList(): Promise<BlogListResult[] | undefined> {
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
			{
				blog_id: "3",
				blog_title: "React State Management",
				blog_description:
					"Best practices for managing state in React applications.",
				community_id: "3",
				community_name: "React Developers",
				comment_count: 8,
				blog_created_at: "2023-06-20T12:45:00.000Z",
				blog_created_by: "react_guru",
			},
			{
				blog_id: "4",
				blog_title: "Building REST APIs with Node.js",
				blog_description:
					"A comprehensive guide to building RESTful APIs with Node.js and Express.",
				community_id: "4",
				community_name: "Node.js Enthusiasts",
				comment_count: 3,
				blog_created_at: "2023-07-10T16:00:00.000Z",
				blog_created_by: "node_master",
			},
			{
				blog_id: "5",
				blog_title: "Understanding Async/Await in JavaScript",
				blog_description:
					"An in-depth look at asynchronous programming in JavaScript using async/await.",
				community_id: "5",
				community_name: "JavaScript Experts",
				comment_count: 12,
				blog_created_at: "2023-09-01T14:15:00.000Z",
				blog_created_by: "js_dev",
			},
		]);
	});
}
