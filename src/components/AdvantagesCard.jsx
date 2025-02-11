export const AdvantagesCard = ({img, title, text}) => {
	return(
		<div className='flex flex-col gap-8 items-center'>
			<img src={img} alt="" />
			<p className='text-2xl text-center'>{title} <br/><span className='text-[#2121217A]'>{text}</span></p>
		</div>
	)
}