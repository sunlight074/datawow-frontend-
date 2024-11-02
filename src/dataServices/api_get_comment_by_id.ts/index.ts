export type CommentResult = {
	id: string;
	name: string;
	description: string;
	created_at: string;
};

type Props = {
	id: string;
};

export async function getCommentById({
	id,
}: Props): Promise<CommentResult[] | undefined> {
	return new Promise((resolve) => {
		return resolve([
			{
				id: "1",
				name: "test comment",
				description: "test comment description",
				created_at: "2022-01-01T00:00:00.000Z",
			},
			{
				id: "2",
				name: "test comment",
				description: "test comment description",
				created_at: "2022-01-01T00:00:00.000Z",
			},
			{
				id: "3",
				name: "test comment",
				description: "test comment description",
				created_at: "2022-01-01T00:00:00.000Z",
			},
			{
				id: "4",
				name: "test comment",
				description: "test comment description",
				created_at: "2022-01-01T00:00:00.000Z",
			},
			{
				id: "5",
				name: "test comment",
				description: "test comment description",
				created_at: "2022-01-01T00:00:00.000Z",
			},
			{
				id: "6",
				name: "test comment",
				description: "test comment description",
				created_at: "2022-01-01T00:00:00.000Z",
			},
		]);
	});
}
