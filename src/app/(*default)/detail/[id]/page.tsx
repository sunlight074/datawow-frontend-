import CardItem from "@/components/CardItem";
import CommentItem from "@/components/CommentItem";
import FromCreateComment from "@/components/FromCreateComment";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
export default function Page() {
	return (
		<div className="w-full h-full ">
			<Link href={"/"}>
				<div className="rounded-full p-2 bg-primary-green-100 h-10 w-10 flex items-center justify-center">
					<FaArrowLeft />
				</div>
			</Link>

			<div className="w-full mt-10">
				<CardItem
					classNameTitle="text-2xl mb-3"
					classNameDescription="line-clamp-none"
				/>
			</div>

			<div className="w-full mt-7">
				<FromCreateComment />
			</div>

			<div className="w-full mt-10">
				{Array.from({ length: 6 }, (_, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index}>
						<CommentItem />
					</div>
				))}
			</div>
		</div>
	);
}
