import Image from "next/image";
import Link from "next/link";
import DrawerCustom from "./Drawer";
import { getUserAccessToken } from "@/lib/user_access_token";
export default async function Navbar() {
	const userAccessToken = await getUserAccessToken();

	return (
		<nav className="bg-primary-green-500 h-[60px] w-full flex space-x-3 items-center px-5 text-primary-white">
			<div className="italic font-normal flex-1 ">a Board</div>
			{userAccessToken && (
				<div className="flex space-x-3 items-center">
					<p>{userAccessToken}</p>
					<Image
						src={"/images/profile.jpeg"}
						alt="profile"
						className="rounded-full object-contain"
						width={30}
						height={30}
					/>
				</div>
			)}
			<div className="block lg:hidden">
				<DrawerCustom />
			</div>
			{userAccessToken ? (
				<Link
					href="/api/logout"
					className="bg-red-500 w-fit h-10 px-4 py-3 rounded-md lg:flex items-center font-semibold hover:underline hidden"
				>
					sing out
				</Link>
			) : (
				<Link
					href="/login"
					className="bg-primary-success w-fit h-10 px-4 py-3 rounded-md lg:flex items-center font-semibold hover:underline hidden"
				>
					sing in
				</Link>
			)}
		</nav>
	);
}
