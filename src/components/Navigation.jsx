export const Navigation = ({ text, targetId, onClick, color = 'text-[#212121A3]' }) => {
	const scrollToSection = () => {
		document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
		if (onClick) onClick(); // Закрывает меню после клика
	}
	return (
			<a
				href='#'
				className={` text-xl max-xs:bg-white max-xs:px-6 max-xs:py-3.5 max-xs:w-full max-xs:rounded-full ${color} `}
				onClick={scrollToSection}
			>
				{text}
			</a>
	)
}
