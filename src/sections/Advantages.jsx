import { AdvantagesCard } from '../components/AdvantagesCard'

export const Advantages = () => {
	return (
		<section className='bg-block flex gap-12 p-24'>
			<AdvantagesCard
				img={'/Frame 782.png'}
				title={'Подходит для любой ниши:'}
				text={'магазины, доставка, образование, недвижимость и др.'}
			/>
			<AdvantagesCard
				img={'/Frame 783.png'}
				title={'Уведомления нового поколения:'}
				text={'замените устаревшие SMS на интерактивные сообщения.'}
			/>
			<AdvantagesCard
				img={'/Frame 785.png'}
				title={'Цифровизация и автоматизация:'}
				text={'управляйте продажами и коммуникацией.'}
			/>
			<AdvantagesCard
				img={'/Frame 784.png'}
				title={'Геймификация:'}
				text={'вовлекайте клиентов через акции и розыгрыши.  '}
			/>
		</section>
	)
}
