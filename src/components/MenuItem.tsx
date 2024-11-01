import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

export default function MenuItem() {
	return (
		<div className="w-full h-full flex flex-col space-y-5">
			<div className="flex items-center space-x-3">
				<AiOutlineHome className="w-6 h-6" />
				<Link href={"/"}>Home</Link>
			</div>
			<div className="flex items-center space-x-3">
				<FiEdit className="w-5 h-5" />
				<Link href={"/our-blog"}>Our Blog</Link>
			</div>
		</div>
	);
}
