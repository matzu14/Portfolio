import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/homepage";
import SpltRls from "../components/Splatted-Ralsei";
import SmplCrd from "../components/demoCard";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/splatted-ralsei" element={<SpltRls />} />
				<Route path="/card" element={<SmplCrd />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
