"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import clsx from "clsx";

export default function MenuItem() {
	const pathname = usePathname();
	return (
		<div className="w-full h-full flex flex-col space-y-5">
			<div
				className={clsx("flex items-center space-x-3", {
					"font-bold": pathname === "/",
				})}
			>
				<AiOutlineHome className={"w-6 h-6"} />
				<Link href={"/"}>Home</Link>
			</div>
			<div
				className={clsx("flex items-center space-x-3", {
					"font-bold": pathname === "/our-blog",
				})}
			>
				<FiEdit className="w-5 h-5" />
				<Link href={"/our-blog"}>Our Blog</Link>
			</div>
		</div>
	);
}
