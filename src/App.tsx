import "./styles.css";
import AppContextProvider from "./context/AppContext";
import ContentWrapper from "./components/ContentWrapper";
import Content from "./components/Content";

export default function App() {
	return (
		<AppContextProvider>
			<ContentWrapper>
				<Content />
			</ContentWrapper>
		</AppContextProvider>
	);
}
