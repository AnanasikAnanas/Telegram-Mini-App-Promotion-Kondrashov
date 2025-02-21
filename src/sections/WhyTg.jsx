import { WhyTgCase } from '../components/WhyTgCase'

export const WhyTg = () => {
	return (
		<section className='bg-block pl-24 pr-12 flex gap-16 max-xs:flex-col max-xs:p-0 max-xs:gap-12' id='why-tg'>
			<img src='/001 1.png' alt='' />
			<div className='flex flex-col gap-12 justify-center max-xs:p-6 max-xs:gap-6'>
				<h1 className='text-6xl max-xs:text-3xl font-medium'>
					Почему Telegram?
				</h1>
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
				<div className='flex gap-5 max-xs:flex-col'>
					<p className='text-[#2121217A] text-xl max-xs:text-sm'>
						Telegram открывает доступ не только к российской аудитории, но и к
						международному рынку.{' '}
					</p>
					<p className='text-[#2121217A] text-xl max-xs:text-sm'>
						Используйте глобальный тренд, чтобы развивать свой бизнес и быть
						впереди конкурентов{' '}
					</p>
				</div>
			</div>
		</section>
	)
}
