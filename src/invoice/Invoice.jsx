/** @format */

import React, { useState } from "react";
import Layout from "../component/layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import "./style.css";
import invoice from "../../src/asset/note.png";
import { FiPlus } from "react-icons/fi";
import { IoCloudUploadSharp } from "react-icons/io5";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import CheckedButtons from "../checked/CheckedButtons";
const Invoice = () => {
	const [invoiceNumber, setInvoiceNumber] = useState("");
	const [invoiceDate, setInvoiceDate] = useState("");
	const [invoiceTitle, setInvoiceTitle] = useState("");
	const [invoiceDescription, setInvoiceDescription] = useState("");
	const [invoiceDue, setInvoiceDue] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [currency, setCurrency] = useState("");
	const [details, setDetails] = useState();
	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		// You can access the form values using the state variables
		console.log({
			invoiceNumber,
			invoiceDate,
			invoiceTitle,
			invoiceDescription,
			invoiceDue,
			dueDate,
			currency,
		});
	};
	const [selectedOptions, setSelectedOptions] = useState([]);
	const [dragging, setDragging] = useState(false);

	const handleDragEnter = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragging(true);
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragging(false);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		setDragging(false);

		const files = Array.from(e.dataTransfer.files);
		// Do something with the dropped files
		console.log(files);
	};
	const handleOptionChange = (event) => {
		const value = event.target.value;
		setSelectedOptions((prevSelectedOptions) => {
			if (prevSelectedOptions.includes(value)) {
				return prevSelectedOptions.filter((option) => option !== value);
			} else {
				return [...prevSelectedOptions, value];
			}
		});
	};
	const [items, setItems] = useState([
		{ id: 1, name: "Item 1", quantity: 2, unitPrice: 10 },
	]);
	const handleQuantityChange = (event, itemId) => {
		const updatedItems = items.map((item) =>
			item.id === itemId
				? { ...item, quantity: Number(event.target.value) }
				: item
		);
		setItems(updatedItems);
	};

	const handleUnitPriceChange = (event, itemId) => {
		const updatedItems = items.map((item) =>
			item.id === itemId
				? { ...item, unitPrice: Number(event.target.value) }
				: item
		);
		setItems(updatedItems);
	};

	return (
		<Layout>
			<div className="flex">
				<div className="w-5/6 h-screen mb-20">
					<div className="ml-10 flex">
						<span
							className="flex  text-[#2563EB] text-base font-
Mulish"
						>
							<img width="30" height="20" src={invoice} alt="user" />
							Invoice
						</span>
						<FontAwesomeIcon
							icon={faGreaterThan}
							className="text-[#64748B] mt-1 ml-5"
						/>
						<span
							className="ml-5 font-
Mulish text-[#64748B] text-base"
						>
							New Service Invoice
						</span>
					</div>
					<div className="ml-10 my-10">
						<h2
							className="text-2xl font-
Mulish text-[#000000]"
						>
							Invoice Details
						</h2>

						<h2
							className="text-base font-
Mulish text-[#475569]"
						>
							Enter the invoice details below to start creating your invoice
						</h2>
					</div>

					<form
						onSubmit={handleSubmit}
						className="max-w-full mx-auto mr-10 ml-10"
					>
						<div className="grid grid-cols-2 gap-4">
							<div className="flex flex-col relative w-full mb-4">
								<input
									className={`text-[#475569] appearance-none py-4 px-[33px] mx-auto w-full rounded-[5px] border border-[#CBD5E1] ${"border-[#E2E8F0]"} focus:outline-none input bg-[#F8FAFC]`}
								/>
								<label
									className="label absolute left-[23px] px-[10px] translate-y-[55%] text-[#475569]"
									htmlFor="name"
								>
									Invoice Number
								</label>
							</div>

							<div className="flex flex-col relative mb-4">
								<div className="relative">
									<DatePicker
										className={` w-[32rem] appearance-none py-4 px-[33px] mx-auto rounded-[5px] border border-[#CBD5E1] ${"border-[#E2E8F0]"} focus:outline-none DatePicker bg-[#F8FAFC]`}
									/>
									<label
										className="label absolute left-[13px] px-[5px] translate-y-[55%] text-[#475569]"
										htmlFor="date"
									>
										Invoice Date
									</label>
									<FaCalendarAlt className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500" />
								</div>
							</div>
						</div>

						<div className="mt-4">
							<input
								placeholder="Invoice Title:"
								type="text"
								id="invoiceTitle"
								value={invoiceTitle}
								onChange={(e) => setInvoiceTitle(e.target.value)}
								className="w-full border border-[#CBD5E1] rounded-md py-4 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#F8FAFC]"
							/>
						</div>

						<div className="mt-4">
							<textarea
								placeholder="Invoice Description:"
								id="invoiceDescription"
								value={invoiceDescription}
								onChange={(e) => setInvoiceDescription(e.target.value)}
								className="w-full border border-[#CBD5E1] rounded-md py-4 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#F8FAFC]"
							></textarea>
						</div>

						<div className="grid grid-cols-2 gap-4 mt-4">
							<div className="flex flex-col relative w-full mb-2 mt-8">
								<select
									className={`text-[#475569]  py-4 px-[33px] mx-auto w-full rounded-[5px] border border-[#CBD5E1] ${"border-[#E2E8F0]"} focus:outline-none input bg-[#F8FAFC]`}
								>
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
								</select>

								<label
									className="label absolute left-[23px] px-[10px] translate-y-[55%] text-[#475569]"
									htmlFor="name"
								>
									Invoice Due
								</label>
							</div>

							<div className="flex flex-col relative mb-4 mt-8">
								<div className="relative">
									<DatePicker
										className={` w-[32rem] appearance-none py-4 px-[33px] mx-auto rounded-[5px] border border-[#CBD5E1] ${"border-[#E2E8F0]"} focus:outline-none DatePicker bg-[#F8FAFC]`}
									/>
									<label
										className="label absolute left-[23px] px-[10px] translate-y-[55%] text-[#475569]"
										htmlFor="date"
									>
										Due Date
									</label>
									<FaCalendarAlt className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500" />
								</div>
							</div>
						</div>

						<div className="flex flex-col relative w-full mb-2 mt-8">
							<select
								className={` text-[#475569] py-4 px-[33px] mx-auto w-full rounded-[5px] border border-[#CBD5E1] ${"border-[#E2E8F0]"} focus:outline-none input bg-[#F8FAFC]`}
							>
								<option value="option1">GBP</option>
								<option value="option2">USDT</option>
							</select>

							<label
								className="label absolute left-[23px] px-[10px]  translate-y-[55%] text-[#475569]"
								htmlFor="name"
							>
								Currency
							</label>
						</div>
						<hr className=" border-[#BFDBFE] mt-7" />
						<table className="min-w-full mt-5 w-full divide-y divide-gray-200">
							<thead className="border-y-2  ">
								<tr>
									<th className="px-6 py-3 text-left text-xs font-bold text-[#475569]  font-Mulish uppercase tracking-wider">
										Item Detail
									</th>
									<th className="px-6 py-3 text-left text-xs font-bold text-[#475569] font-Mulish uppercase tracking-wider">
										Quantity
									</th>
									<th className="px-6 py-3 text-left text-xs font-bold text-[#475569] font-Mulish uppercase tracking-wider">
										Unit Price
									</th>
									<th className="px-6 py-3 text-left text-xs font-bold text-[#475569] font-Mulish uppercase tracking-wider">
										Amount
									</th>
								</tr>
							</thead>
							<tbody className="bg-[#F8FAFC] divide-y divide-gray-200">
								{items.map((item) => (
									<tr key={item.id}>
										<td className="px-6 py-4 whitespace-nowrap">
											<input
												placeholder="Enter item Description"
												value={details}
												onChange={(event) => setDetails(event, item.id)}
												className="bg-[#F8FAFC] px-12 w-[22rem] py-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
											/>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<input
												type="number"
												value={item.quantity}
												onChange={(event) =>
													handleQuantityChange(event, item.id)
												}
												className="bg-[#F8FAFC] w-40 px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
											/>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<input
												type="number"
												value={item.unitPrice}
												onChange={(event) =>
													handleUnitPriceChange(event, item.id)
												}
												className="bg-[#F8FAFC]  w-40 px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
											/>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<input
												disabled
												value={item.quantity * item.unitPrice}
												onChange={(event) =>
													handleUnitPriceChange(event, item.id)
												}
												className="w-40 px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
											/>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className="flex">
							<FiPlus size={25} className="mx-3 text-[#2563EB]" />{" "}
							<span
								className="text-[#2563EB] font-
Mulish text-base font-bold"
							>
								Add Another Line Item
							</span>
						</div>
						<hr className=" border-[#BFDBFE] mt-7" />
						<div className="mt-5 flex justify-end">
							<span className="mx-20">Subtotal</span>
							<span>0.00</span>
						</div>
						<hr className=" border-[#BFDBFE] mt-7" />
						<div className="px-6 py-4 whitespace-nowrap flex justify-end">
							<div className="px-6 py-4 whitespace-nowrap ">
								<input className="bg-[#F8FAFC]  w-40 px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500" />
							</div>

							<div className="px-6 py-4 whitespace-nowrap ">
								<input className="bg-[#F8FAFC]  w-40 px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500" />
							</div>

							<div className="px-6 py-4 whitespace-nowrap ">
								<input className="bg-[#F8FAFC]  w-40 px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500" />
							</div>
						</div>
						<div className="flex justify-center">
							<span className=" font-medium text-[#475569] font-Mulish">
								TAX (Select all that applies)
							</span>
						</div>

						<div className="flex justify-center ml-20 mt-5 ">
							<div className="mb-2 ml-40 ">
								<label className="flex items-center">
									<input
										type="checkbox"
										value="option1"
										checked={selectedOptions.includes("option1")}
										onChange={handleOptionChange}
										className=" bg-[#F8FAFC] form-checkbox p-5 h-4 w-4 text-indigo-600"
									/>
									<span className=" ml-3 font-normal text-[#475569] font-Mulishml-2">
										Value Added Tax (VAT)
									</span>
								</label>
							</div>
							<div className="mb-2 ml-10 ">
								<label className="flex items-center">
									<input
										type="checkbox"
										value="option2"
										checked={selectedOptions.includes("option2")}
										onChange={handleOptionChange}
										className="bg-[#F8FAFC]  form-checkbox p-5 h-4 w-4 text-indigo-600"
									/>
									<span className="ml-3 text-gray-700">
										Withholding Tax (WTH)
									</span>
								</label>
							</div>
						</div>
						<div className="flex justify-center mt-5 mr-10">
							<span className=" font-medium text-[#475569] font-Mulish text-lg ">
								WITHOLDING TAX
							</span>
						</div>
						<div className="flex justify-end mr-10">
							<div className="px-6 py-4 whitespace-nowrap">
								<select className="bg-[#F8FAFC]  w-40 px-2 py-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500">
									<option value="option1">Percentage</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</select>
							</div>
							<div className="px-6 py-4 whitespace-nowrap ">
								<input className="bg-[#F8FAFC]  w-40 px-2 py-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500" />
							</div>
							<div className="px-6 py-4 whitespace-nowrap ">
								<input
									className="bg-[#F8FAFC]  w-40 px-2 py-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 justify-center"
									placeholder="0.00"
								/>
							</div>
						</div>
						<div className="flex justify-center mt-5 ">
							<span className=" font-medium text-[#475569] font-Mulish text-lg ">
								SHIPPING FEE (Optional)
							</span>
						</div>
						<div className="px-6 py-4 whitespace-nowrap flex justify-end">
							<input
								placeholder="0.00"
								value={details}
								className="bg-[#F8FAFC] px-12 w-[38rem] py-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
							/>
						</div>
						<hr className=" border-[#BFDBFE] mt-7" />
						<div className="mt-5 flex justify-end">
							<span className="mx-20">Total</span>
							<span>0.00</span>
						</div>
						<hr className=" border-[#BFDBFE] mt-7" />
						<div className="p-4">
							<div className="mb-4">
								<label
									className="text-[#475569] font-normal mb-2"
									htmlFor="additionalItems"
								>
									Additional Items
								</label>
								<div className="relative">
									<input
										placeholder="Invoice Note"
										type="text"
										id="additionalItems"
										className="bg-[#F8FAFC]  text-[#475569]  w-full my-4 px-4  py-4 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
									/>
								</div>
							</div>
							<div className="mb-4">
								<div className="relative">
									<textarea
										placeholder="   Terms & Conditions"
										id="termsAndConditions"
										className="bg-[#F8FAFC]  w-full h-32 px-4 py-5  border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
									></textarea>
								</div>
							</div>
							<label
								className="text-[#475569] font-normal mb-3"
								htmlFor="additionalItems"
							>
								ATTACH A SUPPORTING DOCUMENT
							</label>
							<div
								className={`p-4 mt-3 mb-10 border-[#BFDBFE] border rounded-md ${
									dragging ? "border-blue-500" : "border-gray-300"
								}`}
								onDragEnter={handleDragEnter}
								onDragLeave={handleDragLeave}
								onDragOver={handleDragOver}
								onDrop={handleDrop}
							>
								<input type="file" className="hidden " onChange={handleDrop} />
								<div className="flex flex-col items-center justify-center">
									<IoCloudUploadSharp className="text-[#2563EB]" size={44} />
									<p className="mt-2 text-gray-500">
										Click to upload or drag and drop a file ,<br />
										<span className="flex justify-center">
											PDF, MS, PNG or JPEG
										</span>
									</p>
								</div>
							</div>
						</div>
					</form>
				</div>
				<CheckedButtons className="w-1/6"/>
			</div>
			<Footer />
		</Layout>
	);
};

export default Invoice;
