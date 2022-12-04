import React from "react";

import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	HashRouter,
} from "react-router-dom";
import Home from "../components/homepage";
import SpltRls from "../components/Splatted-Ralsei";
import SmplCrd from "../components/demoCard";

function Router() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/splatted-ralsei" element={<SpltRls />} />
				<Route path="/card" element={<SmplCrd />} />
			</Routes>
		</HashRouter>
	);
}

export default Router;
