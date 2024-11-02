"use client";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CiSearch } from "react-icons/ci";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Suspense, useEffect, useState } from "react";
import { debounce } from "lodash";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const formSchema = z.object({
	search: z.string(),
	community: z.string(),
});

type formValue = z.infer<typeof formSchema>;

export default function InputInteractive() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [isFocused, setIsFocused] = useState(false);

	const { watch, control } = useForm<formValue>({
		mode: "onSubmit",
		resolver: zodResolver(formSchema),
		defaultValues: {
			search: "",
			community: "History",
		},
	});
	const mockData = [
		{
			id: "1",
			value: "History",
		},
		{
			id: "2",
			value: "Food",
		},
		{
			id: "3",
			value: "Pets",
		},
		{
			id: "4",
			value: "Health",
		},
		{
			id: "5",
			value: "Fashion",
		},
		{
			id: "6",
			value: "Exercise",
		},
		{
			id: "7",
			value: "Others",
		},
	];

	const updateQueryString = (paramsToUpdate: {
		[name: string]: string | null | undefined;
	}) => {
		const params = new URLSearchParams(searchParams.toString());

		for (const [name, value] of Object.entries(paramsToUpdate)) {
			if (value) {
				params.set(name, value);
			} else {
				params.delete(name);
			}
		}

		return params.toString();
	};

	const handleSearchParams = (value: formValue) => {
		const queryParams = updateQueryString({
			search: value.search,
			community: value.community,
		});
		router.push(`${pathname}?${queryParams}`);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const debouncedWatch = debounce((value) => {
			handleSearchParams(value);
		}, 500);

		const { unsubscribe } = watch((value) => debouncedWatch(value));

		return () => {
			debouncedWatch.cancel();
			unsubscribe();
		};
	}, [watch]);

	return (
		<Suspense>
			<form className="flex items-center space-x-3">
				<div className="flex-1">
					<div className="relative">
						<div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
							<CiSearch />
						</div>
						<Controller
							control={control}
							name="search"
							render={({ field: { onChange, value } }) => (
								<Input
									placeholder="Search"
									className="pl-10"
									onFocus={() => setIsFocused(true)}
									onBlur={() => setIsFocused(false)}
									onChange={onChange}
									value={value}
								/>
							)}
						/>
					</div>
				</div>
				<Controller
					control={control}
					name="community"
					render={({ field: { onChange, value } }) => (
						<Select>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Community" />
							</SelectTrigger>
							<SelectContent>
								{mockData.map((item, index) => (
									<SelectItem
										key={`${item.id}-${index}`}
										value={item.id}
										onChange={onChange}
										className={clsx({
											"bg-primary-green-100": item.id === "1",
										})}
									>
										{item.value}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				/>

				<Button className="bg-primary-success">Create +</Button>
			</form>
		</Suspense>
	);
}
