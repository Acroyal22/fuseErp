const TextInput = ({ label, ...props }) => {
	// const [field, meta] = useField(props)
	return (
		<div className='flex flex-col relative w-full mb-4'>
			<input
				className={`appearance-none py-3 px-[33px] mx-auto w-full rounded-[5px] border border-black 
              
                focus:outline-none input`}
				// {...field}
				autoComplete={"off"}
				{...props}
			/>
			<label
				className='label absolute left-[23px] px-[10px] translate-y-[55%] text-[#18191B]-400'
				htmlFor={props.id || props.name}>
				{label}
			</label>
			{/* {meta.touched && meta.error ? (
				<div className='error text-red-500'>{meta.error}</div>
			) : null} */}
		</div>
	)
}

export default TextInput
