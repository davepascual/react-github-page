import { useTheme } from "../hooks/App";

interface ContentWrapperProps{
    children: JSX.Element | JSX.Element[]
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
	const { whenDark } = useTheme();

	return (
		<div
			style={{
				padding: 0,
				margin: 0,
				height: "100vh",
				width: "100vw",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: whenDark("black", "white"),
				color: whenDark("white", "black"),
				transition: "background-color 300ms ease-in ",
			}}>
			{children}
		</div>
	);
};

export default ContentWrapper;
