export type CommunityListResult = {
	community_id: string;
	community_name: string;
	comment_create_at: string;
};

export function getCommunityList(): Promise<CommunityListResult[] | undefined> {
	return new Promise((resolve) => {
		return resolve([
			{
				community_id: "1",
				community_name: "History",
				comment_create_at: "2022-01-01T00:00:00.000Z",
			},
			{
				community_id: "2",
				community_name: "Food",
				comment_create_at: "2023-03-15T09:30:00.000Z",
			},
			{
				community_id: "3",
				community_name: "Pets",
				comment_create_at: "2022-01-01T00:00:00.000Z",
			},
			{
				community_id: "4",
				community_name: "Health",
				comment_create_at: "2023-03-15T09:30:00.000Z",
			},
			{
				community_id: "5",
				community_name: "Fashion",
				comment_create_at: "2022-01-01T00:00:00.000Z",
			},
			{
				community_id: "6",
				community_name: "Exercise",
				comment_create_at: "2023-03-15T09:30:00.000Z",
			},
			{
				community_id: "7",
				community_name: "Others",
				comment_create_at: "2022-01-01T00:00:00.000Z",
			},
		]);
	});
}
