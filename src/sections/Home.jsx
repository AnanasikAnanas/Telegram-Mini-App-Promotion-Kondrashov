export const Home = () => {
	return (
		<section className='flex justify-between items-center'>
			<div className='flex flex-col gap-16 text-center items-center'>
				<div className='flex flex-col gap-8'>
					<h1 className='text-8xl font-medium'>Треть рынка в один клик!</h1>
					<h3 className='text-3xl'>
						Разработайте Telegram Mini App — будущее мобильной коммерции уже
						здесь!
					</h3>
				</div>
				<button className='px-8 py-5 rounded-full bg-[#2196F3] w-fit text-white text-xl cursor-pointer'>Хочу мини-приложение!</button>
			</div>
			<video src="/308171b5d94010f0aac153677f31357226d13e53.mp4" controls className='rounded-2xl max-w-[60.125rem]'></video>
		</section>
	)
}
