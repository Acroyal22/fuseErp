/** @format */

// import { useState } from "react";
import "./App.css";
import setBodyColor from "./setBodyColor";
import PurchaseOrder from "./purchase/PurchaseOrder";
import { Routes, Route } from "react-router-dom";
import Invoice from "./invoice/Invoice";
function App() {
	setBodyColor({ color: "#F8FAFC" });

	return (
		<Routes>
			<Route path="/" element={<Invoice />} />
			<Route path="/order" element={<PurchaseOrder />} />
		</Routes>
	);
}

export default App;
