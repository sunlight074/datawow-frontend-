"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Highlighter from "react-highlight-words";
import { FiMessageCircle } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import FormEditBlog, { type FormValue } from "./FormEditBlog";
import DeleteDialog from "./DeleteDialog";
import type { BlogListByAuthResult } from "@/dataServices/api_get_blog_list_by_auth";
import { deleteBlog } from "@/dataServices/api_delete_blog";
import { UpdateBlogById } from "@/dataServices/api_update_blog_by_id";

type Props = {
	classNameTitle?: string;
	classNameDescription?: string;
	result: BlogListByAuthResult;
};

export default function EditCardItem({
	classNameDescription,
	classNameTitle,
	result,
}: Props) {
	const searchParams = useSearchParams();
	const search = searchParams.get("search");

	const normalSearch = useMemo(() => {
		return search ? search.split(" ") : [];
	}, [search]);

	const handleDelete = async (id: string) => {
		try {
			await deleteBlog({
				blog_id: id,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleEdit = async (value: FormValue) => {
		try {
			await UpdateBlogById({
				title: value.title,
				content: value.description,
				community_id: value.community,
				blog_id: result.blog_id,
			});
		} catch (e) {
			console.log(e);
		}
	};

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
				<div className="flex justify-between w-full">
					<Highlighter
						searchWords={normalSearch}
						textToHighlight={result.blog_created_by}
					/>

					<div className="flex space-x-3">
						<FormEditBlog onChange={handleEdit} data={result} />
						<DeleteDialog
							onChange={() => {
								handleDelete(result.blog_id);
							}}
						/>
					</div>
				</div>
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
