export const Home = () => {
	return (
		<section className='flex justify-between items-center max-xs:flex-col max-xs:gap-12'>
			<div className='flex flex-col gap-16 text-center items-center'>
				<div className='flex flex-col gap-8 max-xs:gap-6'>
					<h1 className='text-8xl font-medium max-xs:text-5xl'>Треть рынка в один клик!</h1>
					<h3 className='text-3xl max-xs:text-2xl'>
						Разработайте Telegram Mini App — будущее мобильной коммерции уже
						здесь!
					</h3>
				</div>
				<button className='px-8 py-5 rounded-full bg-[#2196F3] w-fit text-white text-xl cursor-pointer max-xs:px-6 max-xs:py-3.5 max-xs:text-sm'>Хочу мини-приложение!</button>
			</div>
			<video src="308171b5d94010f0aac153677f31357226d13e53.mp4" controls className='rounded-2xl max-xs:object-cover max-xs:h-[765px] max-xs:px-2  '></video>
		</section>
	)
}
