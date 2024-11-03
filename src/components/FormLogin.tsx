"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authenticateUser } from "@/dataServices/api_sign_in";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	username: z
		.string()
		.min(5, { message: "*Username must be at least 5 characters" }),
});

type formValue = z.infer<typeof formSchema>;

export default function formLogin() {
	const router = useRouter();
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<formValue>({
		mode: "onSubmit",
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
		},
	});

	const onSubmit = async (value: formValue) => {
		try {
			await authenticateUser({ username: value.username });
		} finally {
			router.push("/");
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full max-w-lg mx-auto space-y-5 p-5"
		>
			<h1 className="text-3xl font-bold">Sign in</h1>
			<div className="flex flex-col">
				<Controller
					control={control}
					name="username"
					render={({ field: { onChange, value } }) => (
						<Input
							placeholder="Username"
							value={value}
							onChange={onChange}
							className="bg-primary-white h-10 text-primary-text"
						/>
					)}
				/>
				<p className="text-red-500 text-sm flex justify-start mt-3">
					{errors.username?.message}
				</p>
			</div>
			<Button
				type="submit"
				className="w-full bg-primary-success h-10 hover:bg-primary-success font-semibold"
			>
				Sign In
			</Button>
		</form>
	);
}
