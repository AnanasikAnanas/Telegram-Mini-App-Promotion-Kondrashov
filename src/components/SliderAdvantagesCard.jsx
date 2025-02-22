import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { AdvantagesCard } from './AdvantagesCard'

export const SliderAdvantagesCard = () => {
	return (
		<div className='w-full mx-auto'>
			<Swiper
				spaceBetween={20}
				slidesPerView={4} // По умолчанию 4 элемента в ряд
				breakpoints={{
					1024: { slidesPerView: 4, spaceBetween: 30 }, // Десктоп — 3 слайда
					375: { slidesPerView: 1 },
					 // Мобильные (1 элемент)
				}}
				className='py-6'
			>
				<SwiperSlide>
					<AdvantagesCard
						img={'Frame 782.png'}
						title={'Подходит для любой ниши:'}
						text={'магазины, доставка, образование, недвижимость и др.'}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<AdvantagesCard
						img={'Frame 783.png'}
						title={'Уведомления нового поколения:'}
						text={'замените устаревшие SMS на интерактивные сообщения.'}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<AdvantagesCard
						img={'Frame 785.png'}
						title={'Цифровизация и автоматизация:'}
						text={'управляйте продажами и коммуникацией.'}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<AdvantagesCard
						img={'Frame 784.png'}
						title={'Геймификация:'}
						text={'вовлекайте клиентов через акции и розыгрыши.  '}
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
