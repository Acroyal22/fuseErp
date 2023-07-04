/** @format */
import React from "react"
import Layout from "../component/layout"
import cell from "../../src/asset/Cell.png"
import fileDownload from "../asset/file_download.svg"
import forward from "../asset/keyboard_arrow_right.svg"
import back from "../asset/keyboard_arrow_left.svg"

import { FaCircle } from "react-icons/fa"
import { HiOutlineDotsHorizontal } from "react-icons/hi"

import "./purchase.css"
function PurchaseOrder({ itemsPerPage }) {
	return (
		<Layout>
			<div className='w-full'>
				<div className='py-10 px-10 flex w-full justify-between'>
					<div>
						<h2 className='text-[#1E293B]  font-bold text-3xl'>
							Purchase order
						</h2>
						<div className=' tracking-wide flex mt-5 '>
							<p className='flex items-end gap-1 text-[#475569] text-base font-normal tracking-widest'>
								You currently have
								<span className='text-xl font-medium'>26</span>
								purchase orders
							</p>
						</div>
					</div>
					<div>
						<button class='flex items-center gap-2 p-[10px] rounded-[4px] h-12 btn-shadow bg-[#2563EB] text-white text-sm font-bold tracking-widest '>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z'
									fill='white'
								/>
							</svg>
							Create New Purchase Order
						</button>
					</div>
				</div>
				<div className='ml-5 bg-white rounded-xl shadow-md px-10 py-10 w-[98%] justify-between h-full'>
					<div className=' bg-white py-10 w-full justify-between flex h-full'>
						<div className='flex'>
							<form>
								<label
									for='default-search'
									class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white w-full'>
									Search
								</label>
								<div class='relative w-96'>
									<div class='absolute w-full inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
										<svg
											aria-hidden='true'
											class='w-5 h-5 text-gray-500 dark:text-gray-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
										</svg>
									</div>
									<input
										type='search'
										id='default-search'
										class='block w-full p-2 pl-10  text-sm text-gray-900   rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-[#CBD5E1] dark:bg-[#ffffff] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 border-2 border-[#CBD5E1] '
										placeholder='Search by vendor name, id, amount...'
										required
									/>
								</div>
							</form>

							<div className='ml-3 text-[#475569]'>
								<select
									id='countries'
									className='h-[36px] border-2 border-[#CBD5E1]  bg-gray-50  text-[#000000] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-[#ffffff]  dark:placeholder-gray-400 dark:text-[#000000] dark:focus:ring-blue-500 dark:focus:border-blue-500 '>
									<option selected>Status</option>
									<option value='US'>Draft</option>
									<option value='CA'>Pending</option>
									<option value='FR'>Issued</option>
									<option value='DE'>Closed</option>
								</select>
							</div>
						</div>
						<div className='flex'>
							<h3 className='p-2 text-base  text-[#475569] flex justify-center'>
								Sort
							</h3>
							<div className='ml-3 '>
								<select
									id='countries'
									className='h-[36px] border-2 border-[#CBD5E1]  bg-gray-50  text-[#000000] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-[#ffffff]  dark:placeholder-gray-400 dark:text-[#000000] dark:focus:ring-blue-500 dark:focus:border-blue-500 '>
									<option selected>Date Added</option>
									<option value='US'>Draft</option>
									<option value='CA'>Pending</option>
									<option value='FR'>Issued</option>
									<option value='DE'>Closed</option>
								</select>
							</div>

							<div className='relative ml-3 text-[#475569 '>
								<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-700'>
									<img src={fileDownload} alt='fileDownload' />
								</div>
								<select className='h-[36px]  border-2 border-[#CBD5E1]  w-full bg-white  rounded-md py-2 pl-8 pr-3 sm:text-sm sm:leading-5'>
									<option>Option 1</option>
									<option>Option 2</option>
									<option>Option 3</option>
								</select>
							</div>
						</div>
					</div>
					<div className=' overflow-x-auto table-fixed w-full'>
						<table className='min-w-full divide-y  divide-gray-200'>
							<thead className='bg-[#F8FAFC] h-24'>
								<tr>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										<input type='checkbox' className='form-checkbox' />
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										#Purchase Order
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										Date created
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										vendor name
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										Expected delivery date
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										Purchase Order Amount
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										Outstanding Balance
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										Status
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										<img width='60' height='20' src={cell} alt='user' />
									</th>
								</tr>
							</thead>
							<tbody className='bg-white divide-y divide-gray-200'>
								{/* Render rows dynamically */}
								<tr>
									<td className='px-6 py-4 whitespace-nowrap'>
										<input type='checkbox' className='form-checkbox' />
									</td>
									<td className='px-6 py-4 text-sm   text-[#2563EB] whitespace-nowrap'>
										PO-000026
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 14, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										DeliverPal
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 19, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6  flex text-sm  py-2 whitespace-nowrap mt-3  bg-[#F8FAFC]'>
										<div className='flex items-center'>
											<FaCircle size={10} className='text-[#475569] mr-2' />
											<span className='text-sm font-Mulish'>Draft</span>
										</div>
									</td>
									<td className='px-6  text-3xl py-4 whitespace-nowrap'>
										<HiOutlineDotsHorizontal />
									</td>
								</tr>
							</tbody>
							<tbody className='bg-white divide-y divide-gray-200'>
								{/* Render rows dynamically */}
								<tr>
									<td className='px-6 py-4 whitespace-nowrap'>
										<input type='checkbox' className='form-checkbox' />
									</td>
									<td className='px-6 py-4 text-sm   text-[#2563EB] whitespace-nowrap'>
										PO-000025
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 14, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Olowookere Enitan
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 19, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6  flex text-sm  py-2 whitespace-nowrap mt-3  bg-[#FFFBEB]'>
										<div className='flex items-center'>
											<FaCircle size={10} className='text-[#D97706] mr-2' />
											<span className='text-sm text-[#D97706] font-Mulish'>
												Pending{" "}
											</span>
										</div>
									</td>
									<td className='px-6  text-3xl py-4 whitespace-nowrap'>
										<HiOutlineDotsHorizontal />
									</td>
								</tr>
							</tbody>
							<tbody className='bg-white divide-y divide-gray-200'>
								{/* Render rows dynamically */}
								<tr>
									<td className='px-6 py-4 whitespace-nowrap'>
										<input type='checkbox' className='form-checkbox' />
									</td>
									<td className='px-6 py-4 text-sm   text-[#2563EB] whitespace-nowrap'>
										PO-000024
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 14, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Jaja Mall
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 19, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6  flex text-sm  py-2 whitespace-nowrap mt-3  bg-[#EFF6FF]'>
										<div className='flex items-center'>
											<FaCircle size={10} className='text-[#2563EB] mr-2' />
											<span className=' text-[#2563EB] text-sm font-Mulish'>
												Issued
											</span>
										</div>
									</td>
									<td className='px-6  text-3xl py-4 whitespace-nowrap'>
										<HiOutlineDotsHorizontal />
									</td>
								</tr>
							</tbody>
							<tbody className='bg-white divide-y divide-gray-200'>
								{/* Render rows dynamically */}
								<tr>
									<td className='px-6 py-4 whitespace-nowrap'>
										<input type='checkbox' className='form-checkbox' />
									</td>
									<td className='px-6 py-4 text-sm   text-[#2563EB] whitespace-nowrap'>
										PO-000023
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 14, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Luxury Shades
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 19, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6  flex text-sm  py-2 whitespace-nowrap mt-3  bg-[#F8FAFC]'>
										<div className='flex items-center'>
											<FaCircle size={10} className='text-[#475569] mr-2' />
											<span className='text-sm font-Mulish'>Closed</span>
										</div>
									</td>
									<td className='px-6  text-3xl py-4 whitespace-nowrap'>
										<HiOutlineDotsHorizontal />
									</td>
								</tr>
							</tbody>
							<tbody className='bg-white divide-y divide-gray-200'>
								{/* Render rows dynamically */}
								<tr>
									<td className='px-6 py-4 whitespace-nowrap'>
										<input type='checkbox' className='form-checkbox' />
									</td>
									<td className='px-6 py-4 text-sm   text-[#2563EB] whitespace-nowrap'>
										PO-000022
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 14, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										All Stars Stationery
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 19, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6  flex text-sm  py-2 whitespace-nowrap mt-3  bg-[#ECFDF5]'>
										<div className='flex items-center'>
											<FaCircle size={10} className='text-[#059669] mr-2' />
											<span className='text-[#059669] text-sm font-Mulish'>
												Delivered
											</span>
										</div>
									</td>
									<td className='px-6  text-3xl py-4 whitespace-nowrap'>
										<HiOutlineDotsHorizontal />
									</td>
								</tr>
							</tbody>
							<tbody className='bg-white divide-y divide-gray-200'>
								{/* Render rows dynamically */}
								<tr>
									<td className='px-6 py-4 whitespace-nowrap'>
										<input type='checkbox' className='form-checkbox' />
									</td>
									<td className='px-6 py-4 text-sm   text-[#2563EB] whitespace-nowrap'>
										PO-000021
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 14, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Goodness Furniture
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 19, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6  flex text-sm  py-2 whitespace-nowrap mt-3  bg-[#ECFDF5]'>
										<div className='flex items-center'>
											<FaCircle size={10} className='text-[#059669] mr-2' />
											<span className='text-[#059669] text-sm font-Mulish'>
												Completed
											</span>
										</div>
									</td>
									<td className='px-6  text-3xl py-4 whitespace-nowrap'>
										<HiOutlineDotsHorizontal />
									</td>
								</tr>
							</tbody>
							<tbody className='bg-white divide-y divide-gray-200'>
								{/* Render rows dynamically */}
								<tr>
									<td className='px-6 py-4 whitespace-nowrap'>
										<input type='checkbox' className='form-checkbox' />
									</td>
									<td className='px-6 py-4 text-sm   text-[#2563EB] whitespace-nowrap'>
										PO-000020
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 14, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Hingees
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 19, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6  flex text-sm  py-2 whitespace-nowrap mt-3  bg-[#F8FAFC]'>
										<div className='flex items-center'>
											<FaCircle size={10} className='text-[#475569] mr-2' />
											<span className='text-sm font-Mulish'>Draft</span>
										</div>
									</td>
									<td className='px-6  text-3xl py-4 whitespace-nowrap'>
										<HiOutlineDotsHorizontal />
									</td>
								</tr>
							</tbody>
							<tbody className='bg-white divide-y divide-gray-200'>
								{/* Render rows dynamically */}
								<tr>
									<td className='px-6 py-4 whitespace-nowrap'>
										<input type='checkbox' className='form-checkbox' />
									</td>
									<td className='px-6 py-4 text-sm   text-[#2563EB] whitespace-nowrap'>
										PO-000019
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 14, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Ellen Nigeria
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 19, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6  flex text-sm  py-2 whitespace-nowrap mt-3  bg-[#EFF6FF]'>
										<div className='flex items-center'>
											<FaCircle size={10} className='text-[#2563EB] mr-2' />
											<span className=' text-[#2563EB] text-sm font-Mulish'>
												Issued
											</span>
										</div>
									</td>
									<td className='px-6  text-3xl py-4 whitespace-nowrap'>
										<HiOutlineDotsHorizontal />
									</td>
								</tr>
							</tbody>
							<tbody className='bg-white divide-y divide-gray-200'>
								{/* Render rows dynamically */}
								<tr>
									<td className='px-6 py-4 whitespace-nowrap'>
										<input type='checkbox' className='form-checkbox' />
									</td>
									<td className='px-6 py-4 text-sm   text-[#2563EB] whitespace-nowrap'>
										PO-000018
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 14, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Crrock Limited
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 19, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6  flex text-sm  py-2 whitespace-nowrap mt-3  bg-[#ECFDF5]'>
										<div className='flex items-center'>
											<FaCircle size={10} className='text-[#059669] mr-2' />
											<span className='text-[#059669] text-sm font-Mulish'>
												Completed
											</span>
										</div>
									</td>
									<td className='px-6  text-3xl py-4 whitespace-nowrap'>
										<HiOutlineDotsHorizontal />
									</td>
								</tr>
							</tbody>
							<tbody className='bg-white divide-y divide-gray-200'>
								{/* Render rows dynamically */}
								<tr>
									<td className='px-6 py-4 whitespace-nowrap'>
										<input type='checkbox' className='form-checkbox' />
									</td>
									<td className='px-6 py-4 text-sm   text-[#2563EB] whitespace-nowrap'>
										PO-000017
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 14, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Shine your Eyes
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										Dec. 19, 2022 8:32 AM
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6 text-sm  py-4 whitespace-nowrap'>
										170,000.00
									</td>
									<td className='px-6  flex text-sm  py-2 whitespace-nowrap mt-3  bg-[#EFF6FF]'>
										<div className='flex items-center'>
											<FaCircle size={10} className='text-[#2563EB] mr-2' />
											<span className=' text-[#2563EB] text-sm font-Mulish'>
												Issued
											</span>
										</div>
									</td>
									<td className='px-6  text-3xl py-4 whitespace-nowrap'>
										<HiOutlineDotsHorizontal />
									</td>
								</tr>
							</tbody>
						</table>
						<div className='flex items-center justify-between mt-5'>
							<div className='flex items-center'>
								<h3 className='p-2 text-base  text-[#475569] flex justify-center'>
									Page 1 of 3
								</h3>

								<ul className='pagination flex gap-2 items-center'>
									<li>
										<button>
											<img src={back} alt='back' />
										</button>
									</li>
									<li className='active'>
										<a href='#'>1</a>
									</li>
									<li>
										<a href='#'>2</a>
									</li>
									<li>
										<a href='#'>3</a>
									</li>

									<li>
										<button>
											<img src={forward} alt='forward' />
										</button>
									</li>
								</ul>
							</div>

							<div className='flex'>
								<h3 className='p-2 text-base  text-[#475569] flex justify-center'>
									Show :
								</h3>

								<select
									id='countries'
									class='border-2 border-[#CBD5E1]  bg-gray-50  text-[#000000] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-[#ffffff]  dark:placeholder-gray-400 dark:text-[#000000] dark:focus:ring-blue-500 dark:focus:border-blue-500 '>
									<option selected>10 rows</option>
									<option value='US'>Draft</option>
									<option value='CA'>Pending</option>
									<option value='FR'>Issued</option>
									<option value='DE'>Closed</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default PurchaseOrder
