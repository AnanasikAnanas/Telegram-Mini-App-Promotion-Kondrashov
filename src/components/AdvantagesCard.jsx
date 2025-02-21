export const AdvantagesCard = ({img, title, text}) => {
	return(
		<div className='flex flex-col gap-8 items-center'>
			<img src={img} alt="" className='max-xs:w-32'/>
			<p className='text-2xl text-center max-xs:text-base'>{title} <br/><span className='text-[#2121217A]'>{text}</span></p>
		</div>
	)
}