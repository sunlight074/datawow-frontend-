"use client";
import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";
import Highlighter from "react-highlight-words";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import type { BlogListResult } from "@/dataServices/api_get_blog_list";

type Props = {
	classNameTitle?: string;
	classNameDescription?: string;
	result: BlogListResult;
};

export default function CardItem({
	classNameDescription,
	classNameTitle,
	result,
}: Props) {
	const searchParams = useSearchParams();
	const search = searchParams.get("search");

	const normalSearch = useMemo(() => {
		return search ? search.split(" ") : [];
	}, [search]);

	return (
		<div className="flex flex-col space-y-3">
			<div className="flex space-x-3 items-center">
				<Image
					src={"/images/profile.jpeg"}
					alt="profile"
					className="rounded-full object-contain"
					width={30}
					height={30}
				/>
				<p>
					<Highlighter
						searchWords={normalSearch}
						textToHighlight={result.blog_created_by}
					/>
				</p>
			</div>
			<div className="bg-gray-200 w-fit p-1 rounded-md text-sm">
				{result.community_name}
			</div>
			<div className="w-full space-y-1">
				<h2 className={twMerge("font-bold", classNameTitle)}>
					<Highlighter
						searchWords={normalSearch}
						textToHighlight={result.blog_title}
					/>
				</h2>
				<p className={twMerge("line-clamp-2", classNameDescription)}>
					<Highlighter
						searchWords={normalSearch}
						textToHighlight={result.blog_description}
					/>
				</p>
			</div>
			<div className="flex space-x-2 items-center text-primary-gray-100">
				<FiMessageCircle />
				<p>{result.comment_count}</p>
				<p>comments</p>
			</div>
		</div>
	);
}
