// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

export const SliderShowCases = () => {
	return (
		<div className='relative w-full  '>
			<Swiper
				spaceBetween={30}
				grabCursor={true}
				loop={true}
				slidesPerView={3}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
				className=''
			>
				<SwiperSlide className='w-fit'>
					<img src='/Снимок экрана 2025-02-11 115407.png' alt='' className='w-fit' />
				</SwiperSlide>
				<SwiperSlide className='w-full'>
					<img src='/Снимок экрана 2025-02-11 115436.png' alt='' className='w-fit' />
				</SwiperSlide>
				<SwiperSlide className='w-full'>
					<img src='/Снимок экрана 2025-02-11 115449.png' alt='' className='w-fit' />
				</SwiperSlide>
				<SwiperSlide className='w-fit'>
					<img src='/Снимок экрана 2025-02-11 115407.png' alt='' className='w-fit' />
				</SwiperSlide>
				<SwiperSlide className='w-full'>
					<img src='/Снимок экрана 2025-02-11 115436.png' alt='' className='w-fit' />
				</SwiperSlide>
				<SwiperSlide className='w-full'>
					<img src='/Снимок экрана 2025-02-11 115449.png' alt='' className='w-fit' />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
