import React, { useState } from "react"
import dropdownIco from "../../asset/sidebar-icons/keyboard_arrow_down.svg"
import dropdownupIco from "../../asset/sidebar-icons/keyboard_arrow_up.svg"
import activePill from "../../asset/sidebar-icons/ActivePolygon.svg"
import inactivePill from "../../asset/sidebar-icons/InactivePolygon.svg"
function SideBarItem({ title, icon, dropdown }) {
	const [dropdownState, setDropdownState] = useState(false)
	return (
		<>
			<div
				className={`flex  gap-2 px-8 h-[56px] items-center justify-between cursor-pointer`}>
				{/*  */}
				<div className='flex gap-2 items-center w-full'>
					<img className='h-6 w-6' alt='side-ico' src={icon} />
					<p className='text-[#475569] font-normal text-base'>{title}</p>
				</div>
				<div className='flex '>
					{dropdown && (
						<div
							onClick={() => setDropdownState((prev) => !prev)}
							className='h-6 w-6'>
							{dropdownState ? (
								<img className='h-6 w-6' alt='side-ico' src={dropdownupIco} />
							) : (
								<img className='h-6 w-6' alt='side-ico' src={dropdownIco} />
							)}
						</div>
					)}
				</div>
			</div>
			{dropdownState && (
				<div className='flex flex-col gap-2'>
					<div className='px-8 h-[40px] flex items-center justify-between text-white bg-[#2563EB] rounded-l-[56px] cursor-pointer'>
						<p className='flex gap-2'>
							<img src={activePill} alt='pill' />
							Purchase Order
						</p>

						<span className='bg-[#EFF6FF] text-[#2563EB] text-[11px] font-medium rounded py-1 px-2'>
							26
						</span>
					</div>
					<div className='px-8 h-[40px] flex items-center justify-between text-[#475569] cursor-pointer'>
						<p className='flex gap-2'>
							<img src={inactivePill} alt='pill' />
							Invoice history
						</p>

						<span className='bg-[#EFF6FF] text-[#2563EB] text-[11px] font-medium rounded p-1 '>
							95
						</span>
					</div>
					<div className='px-8 h-[40px] flex items-center justify-between text-[#475569] cursor-pointer'>
						<p className='flex gap-2'>
							<img src={inactivePill} alt='pill' />
							Estimates
						</p>

						<span className='bg-[#EFF6FF] text-[#2563EB] text-[11px] font-medium rounded p-1 '>
							125
						</span>
					</div>
				</div>
			)}
		</>
	)
}

export default SideBarItem
