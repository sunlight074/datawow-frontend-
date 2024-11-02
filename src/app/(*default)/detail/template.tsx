import Sidebar from "@/components/Sidebar";

function template({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-full h-full flex flex-row ">
			<div className="hidden lg:block lg:w-1/5 p-5 lg:p-10">
				<Sidebar />
			</div>
			<div className="w-full h-screen lg:w-4/5 bg-white">
				<div className="p-5 lg:p-10">{children}</div>
			</div>
		</div>
	);
}

export default template;
