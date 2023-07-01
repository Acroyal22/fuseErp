/** @format */

import { useState } from "react";
import "./App.css";
import setBodyColor from "./setBodyColor";
import PurchaseOrder from "./purchase/PurchaseOrder";


function App() {
	setBodyColor({ color: "#F8FAFC" });

	return (
		<div>
			<PurchaseOrder />
		</div>
	);
}

export default App;
