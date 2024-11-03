"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
	DialogDescription,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import SelectCommunity from "./SelectCommunity";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { createBlog } from "@/dataServices/api_create_blog";

const formSchema = z.object({
	title: z.string().min(5, { message: "*Title must be at least 5 characters" }),
	description: z
		.string()
		.min(5, { message: "*Description must be at least 5 characters" }),
	community: z.string().min(1, { message: "*Community is required" }),
});

type formValue = z.infer<typeof formSchema>;

export default function FormCreateBlog() {
	const [open, setOpen] = useState<boolean>(false);
	const {
		handleSubmit,
		formState: { errors },
		setValue,
		control,
	} = useForm<formValue>({
		mode: "onSubmit",
		resolver: zodResolver(formSchema),
		defaultValues: {
			community: "",
			title: "",
			description: "",
		},
	});

	const onSubmit = async (value: formValue) => {
		try {
			await createBlog({
				userAccessToken: "",
				title: value.title,
				content: value.description,
				community_id: value.community,
			});
		} catch (e) {
			console.log(e);
		} finally {
			setOpen(false);
			setValue("title", "");
			setValue("description", "");
			setValue("community", "");
		}
	};

	return (
		<Dialog open={open}>
			<DialogTrigger asChild>
				<Button
					className="bg-primary-success hover:bg-primary-success"
					onClick={() => setOpen(true)}
				>
					Create +
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-[380px] lg:max-w-[500px]">
				<form onSubmit={handleSubmit(onSubmit)}>
					<DialogHeader>
						<DialogTitle className="text-xl">Create Post</DialogTitle>
						<DialogDescription />
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Controller
								control={control}
								name="community"
								render={({ field: { onChange, value } }) => (
									<SelectCommunity
										className="!w-full border border-primary-success col-span-4"
										placeholder="choose a community"
										value={value}
										onValueChange={onChange}
									/>
								)}
							/>
							<p className="text-red-500 text-sm flex justify-start col-span-4">
								{errors.community?.message}
							</p>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Controller
								control={control}
								name="title"
								render={({ field }) => (
									<Input
										{...field}
										placeholder="Title"
										className="col-span-4"
									/>
								)}
							/>
							<p className="text-red-500 text-sm flex justify-start col-span-4">
								{errors.title?.message}
							</p>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Controller
								control={control}
								name="description"
								render={({ field }) => (
									<Textarea
										{...field}
										rows={8}
										placeholder="What's on your mind.."
										className="col-span-4"
									/>
								)}
							/>
							<p className="text-red-500 text-sm flex justify-start col-span-4">
								{errors.description?.message}
							</p>
						</div>
					</div>
					<DialogFooter className="flex flex-col lg:flex-row gap-3">
						<Button
							type="button"
							className="bg-primary-white hover:bg-primary-white  text-primary-success border border-primary-success w-full lg:w-[6.5rem]"
							onClick={() => setOpen(false)}
						>
							cancel
						</Button>

						<Button
							type="submit"
							className="bg-primary-success hover:bg-primary-success w-full lg:w-[6.5rem]"
						>
							post
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
