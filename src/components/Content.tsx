import { useTheme } from "../hooks/App";
import ChangeThemeButton from "../components/ChangeThemeButton";

const Content: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	const handleToggleTheme = () => {
		toggleTheme();
	};

	return (
		<div style={{ textAlign: "center" }}>
			<h1>Theme : {theme}</h1>
			<ChangeThemeButton />
		</div>
	);
};

export default Content;
