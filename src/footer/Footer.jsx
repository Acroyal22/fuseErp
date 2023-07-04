/** @format */

import { FiRefreshCw } from "react-icons/fi";
import "./footer.css";
const Footer = () => {
	return (
		<footer className="footer  bg-[#000000] py-4 px-6 justify-between flex items-center ">
			<div className="flex items-center ">
				<FiRefreshCw className="ml-10 text-[#2563EB]" />
				<span className="text-[#2563EB] ml-3 font-bold">Make recurring</span>
			</div>
			<div className="flex ">
				<button className="bg-[#EFF6FF] text-[#2563EB] py-2 px-4 rounded-md mr-9 border-2 border-[#2563EB]">
				Save as Draft
				</button>
				<button className="bg-[#2563EB] text-[#FFFFFF] py-4 px-4 rounded-md">
                Proceed to Preview
				</button>
                
			</div>
		</footer>
	);
};

export default Footer;
