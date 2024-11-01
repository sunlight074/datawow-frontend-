import Image from "next/image";
import FormLogin from "./formLogin";

export default function Page() {
	return (
		<div className="w-full h-[100dvh] flex flex-col-reverse lg:flex-row bg-primary-green-500 text-primary-white">
			<div className="w-full lg:w-3/5 h-3/5 lg:h-full flex flex-row lg:flex-col space-y-5 justify-center items-center">
				<FormLogin />
			</div>
			<div className="w-full lg:w-2/5 h-2/5 lg:h-full bg-primary-green-300 rounded-b-3xl lg:rounded-l-3xl flex flex-col space-y-5 justify-center items-center">
				<Image
					src={"/images/login.png"}
					alt="login image"
					className="w-[171px] h-[131px] lg:w-[300px] lg:h-[230px] object-contain"
					width={300}
					height={230}
				/>
				<h2 className="text-2xl lg:text-3xl font-normal  italic">a Board</h2>
			</div>
		</div>
	);
}
