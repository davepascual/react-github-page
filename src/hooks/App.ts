import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useTheme = () => {
	const app = useContext(AppContext);

	const whenDark = <DarkValue, LightValue>(
		darkValue: DarkValue,
		lightValue: LightValue
	): DarkValue | LightValue => {
		return app.theme === "dark" ? darkValue : lightValue;
	};

	const whenLight = <LightValue, DarkValue>(
		lightValue: LightValue,
		darkValue: DarkValue
	): DarkValue | LightValue => {
		return whenDark(darkValue, lightValue);
	};

	return {
		theme: app.theme,
		toggleTheme: app.toggleTheme,
		whenDark,
		whenLight,
	};
};
