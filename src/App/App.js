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
			{/* <!doctype html><html lang="en"><head><meta charset="utf-8"/><link rel="icon" href="./favicon.ico"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/><meta name="description" content="Web site created using create-react-app"/><link rel="apple-touch-icon" href="./logo192.png"/><link rel="manifest" href="./manifest.json"/><title>React App</title><script defer="defer" src="./static/js/main.78ca7d41.js"></script><link href="./css/main.90d9cd57.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body></html> */}
		</>
	);
}

export default App;
