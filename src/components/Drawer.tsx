"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer } from "vaul";
import MenuItem from "./MenuItem";
import { FaArrowRightLong } from "react-icons/fa6";

export default function DrawerCustom() {
	return (
		<Drawer.Root direction="right">
			<Drawer.Trigger asChild>
				<RxHamburgerMenu className="w-8 h-8" />
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 bg-black/40" />
				<Drawer.Content className="bg-primary-green-500  text-primary-white p-5 flex flex-col rounded-t-[10px] h-full w-4/6 mt-24 fixed bottom-0 right-0">
					<Drawer.Title />
					<Drawer.Trigger>
						<FaArrowRightLong className="w-5 h-5 mb-10" />
					</Drawer.Trigger>
					<MenuItem />
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
}
