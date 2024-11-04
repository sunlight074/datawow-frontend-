import CardItem from "@/components/CardItem";
import InputInteractive from "@/components/InputInteractive";
import { getBlogList } from "@/dataServices/api_get_blog_list";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
	const getBlogListResult = await getBlogList();

	if (!getBlogListResult) {
		return <>no data</>;
	}

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<InputInteractive />
			<div className="w-full mt-5 bg-primary-white rounded-md p-5 space-y-5">
				{getBlogListResult.map((blog, index) => (
					<Link href={`/detail/${blog.blog_id}`} key={blog.blog_id}>
						<CardItem result={blog} />
						{index !== getBlogListResult.length - 1 && (
							<hr className="mt-5 mb-5" />
						)}
					</Link>
				))}
			</div>
		</Suspense>
	);
}
