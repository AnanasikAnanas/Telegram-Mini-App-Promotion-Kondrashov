import { WhyTgCase } from '../components/WhyTgCase'

export const WhyTg = () => {
	return (
		<section className='bg-block pl-24 pr-12 flex gap-16 '>
			<img src='/001 1.png' alt='' />
			<div className='flex flex-col gap-12 justify-center'>
				<h1 className='text-6xl'>Почему Telegram?</h1>
				<div className='flex flex-col gap-5'>
					<WhyTgCase
						number={'1'}
						text={'Клиенту удобнее покупать в мессенджере'}
					/>
					<WhyTgCase
						number={'2'}
						text={
							'Будьте ближе к клиентам — становитесь частью их повседневной жизни'
						}
					/>
					<WhyTgCase number={'3'} text={'Вы рядом, как часть семьи'} />
					<WhyTgCase number={'4'} text={'Новый рынок и глобальный рост'} />
				</div>
				<div className='w-full bg-[#21212114] h-[0.0625rem]'></div>
				<div className='flex gap-5 '>
					<p className='text-[#2121217A] text-xl'>Telegram открывает доступ не только к российской аудитории, но и к международному рынку. </p>
					<p className='text-[#2121217A] text-xl'>Используйте глобальный тренд, чтобы развивать свой бизнес и быть впереди конкурентов </p>
				</div>
			</div>
		</section>
	)
}
