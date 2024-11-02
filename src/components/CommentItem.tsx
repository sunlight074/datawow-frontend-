import type { CommentResult } from "@/dataServices/api_get_comment_by_id";
import Image from "next/image";

type Props = {
	commentResult: CommentResult;
};

export default function CommentItem({ commentResult }: Props) {
	return (
		<div className="flex flex-col space-y-3 mb-7">
			<div className="flex space-x-3 items-center">
				<Image
					src={"/images/profile.jpeg"}
					alt="profile"
					className="rounded-full object-contain"
					width={30}
					height={30}
				/>
				<p className="font-medium">{commentResult.name}</p>
				<p className="text-primary-gray-100">{commentResult.created_at} ago</p>
			</div>
			<p className="ml-10">{commentResult.description}</p>
		</div>
	);
}
