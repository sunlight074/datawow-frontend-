"use client";
import { Button } from "@/components/ui/button";
import { FiEdit3 } from "react-icons/fi";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogDescription,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import SelectCommunity from "./SelectCommunity";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import type { BlogListByAuthResult } from "@/dataServices/api_get_blog_list_by_auth";

const formSchema = z.object({
	title: z.string().min(5, { message: "*Title must be at least 5 characters" }),
	description: z
		.string()
		.min(5, { message: "*Description must be at least 5 characters" }),
	community: z.string().min(1, { message: "*Community is required" }),
});

export type FormValue = z.infer<typeof formSchema>;

type Props = {
	data: BlogListByAuthResult;
	onChange: (value: FormValue) => void;
};

export default function FormEditBlog({ data, onChange }: Props) {
	const [open, setOpen] = useState<boolean>(false);
	const {
		handleSubmit,
		formState: { errors },
		setValue,
		control,
	} = useForm<FormValue>({
		mode: "onSubmit",
		resolver: zodResolver(formSchema),
		defaultValues: {
			community: "",
			title: "",
			description: "",
		},
	});

	const onHandleSubmit = async (value: FormValue) => {
		setOpen(false);
		onChange(value);
	};

	useEffect(() => {
		setValue("title", data.blog_title);
		setValue("description", data.blog_description);
		setValue("community", data.community_id);
	}, [setValue, data]);

	return (
		<Dialog open={open}>
			<DialogTrigger asChild>
				<FiEdit3
					className="w-5 h-5 text-primary-success cursor-pointer"
					onClick={() => setOpen(true)}
				/>
			</DialogTrigger>
			<DialogContent className="max-w-[380px] lg:max-w-[500px]">
				<form onSubmit={handleSubmit(onHandleSubmit)}>
					<DialogHeader>
						<DialogTitle className="text-xl ">Edit Post</DialogTitle>
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
							confirm
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
