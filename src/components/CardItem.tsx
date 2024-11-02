"use client";
import Image from "next/image";
import Link from "next/link";
import { FiMessageCircle } from "react-icons/fi";
import Highlighter from "react-highlight-words";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
	classNameTitle?: string;
	classNameDescription?: string;
};

export default function CardItem({
	classNameDescription,
	classNameTitle,
}: Props) {
	const searchParams = useSearchParams();
	const search = searchParams.get("search");

	const normalSearch = useMemo(() => {
		return search ? search.split(" ") : [];
	}, [search]);

	return (
		<Link href={"/detail/:1"}>
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
						<Highlighter searchWords={normalSearch} textToHighlight="name" />
					</p>
				</div>
				<div className="bg-gray-200 w-fit p-1 rounded-md text-sm">History</div>
				<div className="w-full space-y-1">
					<h2 className={twMerge("font-bold", classNameTitle)}>
						<Highlighter
							searchWords={normalSearch}
							textToHighlight="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
						laudantium."
						/>
					</h2>
					<p className={twMerge("line-clamp-2", classNameDescription)}>
						<Highlighter
							searchWords={normalSearch}
							textToHighlight="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, iure adipisci! Consequuntur, modi? Dolor quidem suscipit unde asperiores esse architecto exercitationem pariatur facilis similique nostrum. Illum dicta animi quam eaque neque tempore velit. Commodi voluptate soluta amet illum perspiciatis tempore."
						/>
					</p>
				</div>
				<div className="flex space-x-2 items-center text-primary-gray-100">
					<FiMessageCircle />
					<p>32</p>
					<p>comments</p>
				</div>
			</div>
		</Link>
	);
}
