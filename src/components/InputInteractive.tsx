import SelectCommunity from "./SelectCommunity";
import { Input } from "./ui/input";

export default function InputInteractive() {
	return (
		<div className="flex items-center space-x-3">
			<div className="flex-1">
				<Input placeholder="Search" />
			</div>
			<SelectCommunity />
		</div>
	);
}
