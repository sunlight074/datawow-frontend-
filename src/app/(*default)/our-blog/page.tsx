import EditCardItem from "@/components/EditCardItem";
import InputInteractive from "@/components/InputInteractive";
import { getBlogListByAuth } from "@/dataServices/api_get_blog_list_by_auth";
import { Suspense } from "react";

export default async function Page() {
	const getBlogListResult = await getBlogListByAuth({ userAccessToken: "" });

	if (!getBlogListResult) {
		return <>no data</>;
	}

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<InputInteractive />
			<div className="w-full mt-5 bg-primary-white rounded-md p-5 space-y-5">
				{getBlogListResult.map((item, index) => (
					<div key={item.blog_id}>
						<EditCardItem result={item} />
						{index !== getBlogListResult.length - 1 && <hr className="mt-5" />}
					</div>
				))}
			</div>
		</Suspense>
	);
}
