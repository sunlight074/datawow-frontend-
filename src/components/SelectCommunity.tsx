import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";

type Props = {
	className?: string;
	value?: string;
	selectCommunity?: string;
	onValueChange?(value: string): void;
};

export default function SelectCommunity({
	className,
	value,
	selectCommunity,
	onValueChange,
}: Props) {
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

	return (
		<Select value={value} onValueChange={onValueChange}>
			<SelectTrigger className={`${className} w-[120px] lg:w-[180px]`}>
				<SelectValue placeholder="Community" />
			</SelectTrigger>
			<SelectContent>
				{mockData.map((item) => (
					<SelectItem
						key={item.id}
						value={item.id}
						className={clsx({
							"bg-primary-green-100": item.id === selectCommunity,
						})}
					>
						{item.value}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
