/** @format */

import React from "react";
import logo from "../../asset/Logo.svg";
import SideBarItem from "./SideBarItem";
import dashboard from "../../asset/sidebar-icons/dashboard.svg";
import Invoice from "../../asset/sidebar-icons/sticky_note.svg";
import HumR from "../../asset/sidebar-icons/supervised_user_circle.svg";
import Management from "../../asset/sidebar-icons/note_alt.svg";
import Inventory from "../../asset/sidebar-icons/inventory.svg";
import Accounting from "../../asset/sidebar-icons/calculate.svg";
import Customer from "../../asset/sidebar-icons/people_alt.svg";
import Settings from "../../asset/sidebar-icons/settings.svg";
import { Link } from "react-router-dom";

function SideBar() {
	return (
		<div className="w-[320px] h-[1024px] bg-white border-r border-[#F1F5F9] pt-6">
			<img className="pl-10" alt="logo" src={logo} />
			<div className="mt-[45px] flex flex-col gap-4">
				<Link to="/">
					<SideBarItem title="Dashboard" icon={dashboard} />
				</Link>
				<SideBarItem title="Invoice" icon={Invoice} dropdown={true} />
				<SideBarItem title="Human Resource" icon={HumR} dropdown={true} />
				<SideBarItem title="Project Management" icon={Management} />
				<SideBarItem title="Inventory" icon={Inventory} />
				<SideBarItem title="Accounting" icon={Accounting} />
				<SideBarItem title="Customer Relations" icon={Customer} />

				<div className="mt-[200px] border-t border-[#F1F5F9]">
					<SideBarItem title="Settings" icon={Settings} />
				</div>
			</div>
		</div>
	);
}

export default SideBar;
