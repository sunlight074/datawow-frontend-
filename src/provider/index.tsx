"use client";
import {
	createContext,
	type Dispatch,
	type SetStateAction,
	useState,
} from "react";

type ProviderData = {
	userAccessToken: string;
};

export type ProviderProps = {
	providerData: ProviderData;
	setProviderData?: Dispatch<SetStateAction<ProviderData>>;
};

const defaultValue: ProviderData = {
	userAccessToken: "",
};

export const ProviderCtx = createContext<ProviderProps>({
	providerData: defaultValue,
});

export default function Provider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [providerData, setProviderData] = useState<ProviderData>(defaultValue);

	return (
		<ProviderCtx.Provider value={{ providerData, setProviderData }}>
			{children}
		</ProviderCtx.Provider>
	);
}
