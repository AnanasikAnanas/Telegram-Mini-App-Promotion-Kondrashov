import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import { ChevronRight } from './icons/ChevronRight'
import { ChevronLeft } from './icons/ChevronLeft'
import SliderNavigation from './SliderNavigation'

export default function App() {
	const swiperRef = useRef(null)
	return (
		<div className='flex flex-col relative items-center justify-center w-full gap-8'>
			{/* Верхние кнопки */}
			<div className='flex gap-2 mb-4'>
				<button className='bg-white text-black px-5 py-4 rounded-full shadow-md text-2xl hover:bg-gray-200 duration-300 max-xs:text-base max-xs:px-3.5 max-xs:py-3'>
					Поиск
				</button>
				<button className='bg-white text-black px-5 py-4 rounded-full shadow-md text-2xl hover:bg-gray-200 duration-300 max-xs:text-base max-xs:px-3.5 max-xs:py-3'>
					Выбор категории
				</button>
			</div>

			{/* Swiper */}
			<div className='relative w-full flex justify-center max-xs:flex-col'>
				<Swiper
					onSwiper={swiper => (swiperRef.current = swiper)}
					modules={[Pagination, Navigation]}
					slidesPerView={1}
					effect='fade'
					centeredSlides={true}
					pagination={{
						el: '.custom-pagination',
						clickable: true,
						renderBullet: (index, className) =>
							`<span class="${className} w-2.5 h-2.5 bg-gray-400 mx-1 rounded-full"></span>`,
					}}
					navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
					className='rounded-lg overflow-hidden flex items-center justify-center w-full max-w-2xl'
				>
					<SwiperSlide className='flex justify-center items-center h-fit w-full'>
						<img src='/image-case1.png' alt='' className='' />
					</SwiperSlide>
					<SwiperSlide className='flex justify-center w-full'>
						<img src='/image-case2.png' alt='' className='rounded-4xl' />
					</SwiperSlide>
					<SwiperSlide className='flex justify-center w-full'>
						<img src='/image-case3.png' alt='' className='rounded-4xl' />
					</SwiperSlide>
				</Swiper>
				{/* Кастомные стрелки */}
			</div>
		</div>
	)
}
