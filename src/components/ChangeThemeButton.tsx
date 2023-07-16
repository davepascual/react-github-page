import { useTheme } from "../hooks/App";
import Button from "./Button";

const ChangeThemeButton = () => {
	const { toggleTheme, whenDark } = useTheme();

	return (
		<Button
			onClick={toggleTheme}
			style={{
				backgroundColor: whenDark("#fff", "#000"),
				color: whenDark("#000", "#fff"),
				padding: "10px 15px",
				outline: "none",
				border: "0px",
				cursor: "pointer",
			}}>
			Change theme
		</Button>
	);
};

export default ChangeThemeButton;
