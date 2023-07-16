import React, { createContext, useMemo, useState } from "react";

export type DarkTheme = "dark";
export type LightTheme = "light";

export type ThemeType = DarkTheme | LightTheme;

export type AppContextType = {
	theme: ThemeType;
	toggleTheme: () => void;
};

export const AppContext = createContext<AppContextType>({
	theme: "light",
	toggleTheme: () => {},
});

export type AppContextProviderProps = {
	children: JSX.Element | JSX.Element[];
};

const AppContextProvider: React.FC<AppContextProviderProps> = ({
	children,
}) => {
	const [theme, setTheme] = useState<ThemeType>("light");

	const toggleTheme = (): void => {
		setTheme((theme) => (theme === "light" ? "dark" : "light"));
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
