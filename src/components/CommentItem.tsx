import Image from "next/image";

export default function CommentItem() {
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
				<p className="font-medium">name</p>
				<p className="text-primary-gray-100">12h ago</p>
			</div>
			<p className="ml-10">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, illo
				quia sapiente ipsa ab, tempore laborum nulla quod ullam, tenetur natus
				odio commodi voluptatibus consectetur eligendi perferendis maxime
				delectus! Dolores cupiditate facilis officiis iure provident molestiae
				animi quidem blanditiis quia.
			</p>
		</div>
	);
}
