import "./App.css";
import Router from "./router";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<Router />
			</ThemeProvider>
		</>
	);
}

export default App;
