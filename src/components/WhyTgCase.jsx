export const WhyTgCase = ({ number, text }) => {
	return (
		<div className='flex gap-4 items-center'>
			<p className='rounded-full p-1 px-3 max-w-10 flex justify-center font-medium text-[#2196F3] bg-[#2196F314] text-2xl max-xs:text-base'>{number}</p>
			<p className='text-2xl max-xs:text-base'>{text}</p>
		</div>	
	)
}
