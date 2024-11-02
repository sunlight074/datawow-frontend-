import CardItem from "@/components/CardItem";
import InputInteractive from "@/components/InputInteractive";
import { Suspense } from "react";

export default function Page() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<InputInteractive />
			<div className="w-full mt-5 bg-primary-white rounded-md p-5 space-y-5">
				{Array.from({ length: 6 }, (_, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index}>
						<CardItem />

						{index !== 6 && <hr className="mt-5" />}
					</div>
				))}
			</div>
		</Suspense>
	);
}
