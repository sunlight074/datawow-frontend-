import Sidebar from "@/components/Sidebar";

function template({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-full h-full flex flex-row p-5 lg:p-10">
			<div className="hidden lg:block lg:w-1/5">
				<Sidebar />
			</div>
			<div className="w-full lg:w-3/5">{children}</div>
		</div>
	);
}

export default template;
