import { CardHIW } from '../components/CardHIW'

export const HowItWorks = () => {
	return (
		<section className='flex flex-col gap-24 items-center bg-block p-24'>
			<div className='flex flex-col gap-16 items-center'>
				<div className='flex flex-col gap-12 items-center'>
					<h1 className='text-6xl font-medium'>Как это работает?</h1>
					<div className='flex gap-4'>
						<CardHIW
							title={'Анализируем'}
							text={'Исследуем ваш бизнес и подбираем решение'}
						/>
						<CardHIW
							title={'Создаем'}
							text={'Настраиваем системы для сбора клиентской информации'}
						/>
						<CardHIW
							title={'Контролируем '}
							text={
								'А вы получаете управление каждым этапом — от первого интереса клиента до покупки'
							}
						/>
					</div>
				</div>
				<h4 className='text-2xl text-[#212121A3] max-w-4xl text-center'>
					Вы видите все процессы в реальном времени и получаете полное
					понимание, как клиенты взаимодействуют с Вашим продуктом
				</h4>
			</div>
			<img src="/Frame 835.png" alt="" />
		</section>
	)
}
