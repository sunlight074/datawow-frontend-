import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function FormCreatePost() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-primary-success hover:bg-primary-success">
					Create +
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-[380px] lg:max-w-[500px]">
				<DialogHeader>
					<DialogTitle>Create Post</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Input id="name" placeholder="Title" className="col-span-4" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Textarea
							rows={8}
							placeholder="What's on your mind.."
							className="col-span-4"
						/>
					</div>
				</div>
				<DialogFooter className="flex flex-col lg:flex-row space-x-3">
					<DialogClose asChild>
						<Button className="bg-primary-white hover:bg-primary-white  text-primary-success border border-primary-success w-[6.5rem]">
							cancel
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button
							type="button"
							className="bg-primary-success hover:bg-primary-success w-[6.5rem]"
						>
							post
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
