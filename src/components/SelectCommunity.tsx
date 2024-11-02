"use client";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	type CommunityListResult,
	getCommunityList,
} from "@/dataServices/api_get_community_list";
import clsx from "clsx";
import { use, useEffect, useState } from "react";

type Props = {
	className?: string;
	value?: string;
	placeholder?: string;
	selectCommunity?: string;
	onValueChange?(value: string): void;
};

export default function SelectCommunity({
	className,
	value,
	selectCommunity,
	placeholder = "Community",
	onValueChange,
}: Props) {
	const [communityListResult, setCommunityListResult] =
		useState<CommunityListResult[]>();

	const fetchCommunityList = async () => {
		const result = await getCommunityList();
		setCommunityListResult(result);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchCommunityList();
	}, []);

	return (
		<Select value={value} onValueChange={onValueChange}>
			<SelectTrigger className={`${className} w-[120px] lg:w-[180px]`}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{communityListResult?.map((item) => (
					<SelectItem
						key={item.community_id}
						value={item.community_id}
						className={clsx({
							"bg-primary-green-100": item.community_id === selectCommunity,
						})}
					>
						{item.community_name}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
