import React from "react"
import Header from "./Header"
import SideBar from "./SideBar"

function Layout({ children }) {
	return (
		<div className='flex w-full'>
			<SideBar />
			<div className='flex relative w-full'>
				<Header />
				<div className='absolute top-24 mlpx-2 sm:px-6 lg:px-10'>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Layout
