import { Logo } from '../components/icons/Logo'
import { Navigation } from '../components/Navigation'

export const Header = () => {
	return (
		<header className='flex justify-between items-center h-[4.25rem] bg-white rounded-full'>
			<div className='pl-8'>
				<Logo />
			</div>
			<nav className='gap-12 flex'>
				<Navigation text={'Почему Telegram?'} />
				<Navigation text={'Наши услуги'} />
				<Navigation text={'Преимущества'} />
				<Navigation text={'Как это работает'} />
			</nav>
			<button className='px-8 py-5 text-[#2196F3] border border-[#2196F3] rounded-full text-xl font-medium cursor-pointer'>Оставить заявку</button>
		</header>
	)
}
