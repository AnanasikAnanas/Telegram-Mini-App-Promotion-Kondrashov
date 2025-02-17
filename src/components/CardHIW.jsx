export const CardHIW = ({ title, text }) => {
	return (
		<div className='p-8 flex flex-col gap-3 rounded-2xl bg-white max-w-[25rem]'>
			<h2 className='text-3xl font-medium'>{title}</h2>
			<p className='text-xl'>{text}</p>
		</div>
	)
}
