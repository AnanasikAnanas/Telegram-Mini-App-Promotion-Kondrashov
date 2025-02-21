export const CardHIW = ({ title, text }) => {
	return (
		<div className='p-8 flex flex-col gap-3 rounded-2xl bg-white max-w-[25rem] max-xs:p-6'>
			<h2 className='text-3xl font-medium max-xs:text-2xl'>{title}</h2>
			<p className='text-xl max-xs:text-base'>{text}</p>
		</div>
	)
}
