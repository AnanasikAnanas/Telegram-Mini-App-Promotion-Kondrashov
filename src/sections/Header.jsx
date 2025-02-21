import { Logo } from '../components/icons/Logo'
import MobileMenu from '../components/MobileMenu'
import { Navigation } from '../components/Navigation'

export const LinkNav = [
	{
		text: 'Почему Telegram?',
		targetId: 'why-tg',
	},
	{
		text: 'Наши услуги',
		targetId: 'cases',
	},
	{
		text: 'Преимущества',
		targetId: 'advantages',
	},
	{
		text: 'Как это работает?',
		targetId: 'how-it-works',
	},
]

export const Header = ({ targetId }) => {
	const scrollToSection = () => {
		document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
		onClick() // Закрывает меню после клика
	}
	return (
		<header className='flex justify-between items-center h-[4.25rem] bg-white rounded-full relative'>
			<div className='pl-8'>
				<Logo />
			</div>
			<MobileMenu />
			<nav className='gap-12 flex max-xs:hidden'>
				{LinkNav.map((link, index) => (
					<Navigation key={index} text={link.text} targetId={link.targetId} />
				))}
			</nav>
			<button className='px-8 py-5 text-[#2196F3] border border-[#2196F3] rounded-full text-xl font-medium cursor-pointer max-xs:hidden'>
				<Navigation
					text={'Оставить заявку'}
					targetId={'contact-form'}
					color='text-[#2196F3]'
				/>
			</button>
		</header>
	)
}
