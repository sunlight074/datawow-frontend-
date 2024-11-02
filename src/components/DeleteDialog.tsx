"use client";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogFooter,
	DialogTrigger,
} from "@/components/ui/dialog";
import { RiDeleteBinLine } from "react-icons/ri";
import { Button } from "./ui/button";
import { useState } from "react";

type Props = {
	onChange: () => void;
};

export default function DeleteDialog({ onChange }: Props) {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Dialog open={open}>
			<DialogTrigger>
				<RiDeleteBinLine
					className="w-5 h-5 text-primary-success"
					onClick={() => setOpen(true)}
				/>
			</DialogTrigger>
			<DialogContent className="max-w-[380px] lg:max-w-[400px]">
				<DialogHeader>
					<DialogTitle className="text-center space-y-3">
						Please confirm if you wish to
						<br />
						delete the post
					</DialogTitle>
					<DialogDescription className="text-center mt-3">
						Are you sure you want to delete this post? <br />
						Once deleted, it cannot be recovered
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="flex flex-col lg:flex-row gap-3">
					<Button
						type="button"
						className="bg-primary-white hover:bg-primary-white  text-primary-black border border-primary-black w-full "
					>
						cancel
					</Button>

					<Button
						type="submit"
						className="bg-red-500 hover:bg-red-500 w-full "
						onClick={() => {
							setOpen(false);
							onChange();
						}}
					>
						delete
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
