import CardItem from "@/components/CardItem";
import CommentItem from "@/components/CommentItem";
import FromCreateComment from "@/components/FromCreateComment";
import { getCommentById } from "@/dataServices/api_get_comment_by_id";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

type tParams = Promise<{ id: string }>;

export default async function Page(props: { params: tParams }) {
	const commentResult = await getCommentById({ id: (await props.params).id });

	return (
		<div className="w-full h-full ">
			<Link href={"/"}>
				<div className="rounded-full p-2 bg-primary-green-100 h-10 w-10 flex items-center justify-center">
					<FaArrowLeft />
				</div>
			</Link>
			<div className="w-full mt-10">
				<CardItem
					result={{
						blog_id: "1",
						blog_title: "Test Blog",
						blog_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
						community_id: "1",
						community_name: "Test Community",
						comment_count: 5,
						blog_created_at: "2022-01-01T00:00:00.000Z",
						blog_created_by: "admin",
					}}
					classNameTitle="text-2xl mb-3"
					classNameDescription="line-clamp-none"
				/>
			</div>
			<div className="w-full mt-7">
				<FromCreateComment />
			</div>
			<div className="w-full mt-10">
				{commentResult?.map((item) => (
					<div key={item.id}>
						<CommentItem commentResult={item} />
					</div>
				))}
			</div>
		</div>
	);
}
