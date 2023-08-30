import React, { createContext, useMemo, useState } from "react";

export type DarkTheme = "darky";
export type LightTheme = "lighty";

export type ThemeType = DarkTheme | LightTheme;

export type AppContextType = {
	theme: ThemeType;
	toggleTheme: () => void;
};

export const AppContext = createContext<AppContextType>({
	theme: "lighty",
	toggleTheme: () => {},
});

export type AppContextProviderProps = {
	children: JSX.Element | JSX.Element[];
};

const AppContextProvider: React.FC<AppContextProviderProps> = ({
	children,
}) => {
	const [theme, setTheme] = useState<ThemeType>("lighty");

	const toggleTheme = (): void => {
		setTheme((theme) => (theme === "lighty" ? "darky" : "lighty"));
	};

	const value = useMemo(() => {
		return {
			theme,
			toggleTheme,
		};
	}, [theme]);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
