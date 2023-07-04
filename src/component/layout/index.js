import React from "react"
import Header from "./Header"
import SideBar from "./SideBar"
import Container from "./Container"

function Layout({ children }) {
	return (
	
			<div className='flex w-full'>
				<SideBar />
				<div className='flex relative w-full'>
					<Header />
					<div className='absolute w-full top-24 '>
						{children}
					</div>
				</div>
			</div>
	
	)
}

export default Layout
