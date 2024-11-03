"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
import clsx from "clsx";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { createComment } from "@/dataServices/api_create_comment";

const formSchema = z.object({
	comment: z
		.string()
		.min(5, { message: "*Title must be at least 5 characters" }),
});

type formValue = z.infer<typeof formSchema>;

export default function FromCreateComment() {
	const [openForDesktop, setOpenForDesktop] = useState<boolean>(false);
	const [openForMobile, setOpenForMobile] = useState<boolean>(false);

	const {
		handleSubmit,
		formState: { errors },
		setValue,
		control,
	} = useForm<formValue>({
		mode: "onSubmit",
		resolver: zodResolver(formSchema),
		defaultValues: {
			comment: "",
		},
	});

	const onSubmit = async (value: formValue) => {
		try {
			await createComment({
				comment_description: value.comment,
			});
		} finally {
			setOpenForDesktop(false);
			setOpenForMobile(false);
			setValue("comment", "");
		}
	};

	const FormInput = ({ onCancel }: { onCancel: () => void }) => {
		return (
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					control={control}
					name="comment"
					render={({ field }) => (
						<Textarea
							{...field}
							rows={5}
							placeholder="What's on your mind.."
							className="col-span-4"
						/>
					)}
				/>
				<p className="text-red-500 text-sm flex justify-start col-span-4 mt-3">
					{errors.comment?.message}
				</p>
				<div className="flex flex-col lg:flex-row gap-3 justify-end mt-5 lg:mt-3">
					<Button
						type="button"
						className="bg-primary-white hover:bg-primary-white  text-primary-success border border-primary-success w-full lg:w-[6.5rem]"
						onClick={onCancel}
					>
						cancel
					</Button>

					<Button
						type="submit"
						className="bg-primary-success hover:bg-primary-success w-full lg:w-[6.5rem]"
					>
						post
					</Button>
				</div>
			</form>
		);
	};

	return (
		<div className="w-full">
			<div className="hidden lg:block">
				<Button
					className={clsx(
						"bg-primary-white text-primary-success hover:bg-primary-white border border-primary-success font-semibold",
						openForDesktop && "hidden",
					)}
					onClick={() => setOpenForDesktop(true)}
				>
					Add Comments
				</Button>
			</div>

			{/* for Desktop */}
			{openForDesktop && (
				<div className="w-full mt-5">
					<FormInput onCancel={() => setOpenForDesktop(false)} />
				</div>
			)}

			{/* for Mobile */}
			<div className="block lg:hidden">
				<Button
					className="bg-primary-white text-primary-success hover:bg-primary-white border border-primary-success font-semibold"
					onClick={() => setOpenForMobile(true)}
				>
					Add Comments
				</Button>
				<Dialog open={openForMobile}>
					<DialogContent className="max-w-[360px]">
						<DialogHeader>
							<DialogTitle className="text-left">Add Comment</DialogTitle>
							<DialogDescription />
						</DialogHeader>
						<FormInput onCancel={() => setOpenForMobile(false)} />
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}
