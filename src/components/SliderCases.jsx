import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import CustomPagination from './CustomPagination'
import { ChevronRight } from './icons/ChevronRight'
import { ChevronLeft } from './icons/ChevronLeft'

export default function App() {
	return (
		<div className='flex flex-col items-center w-full gap-8'>
			{/* Верхние кнопки */}
			<div className='flex gap-2 mb-4'>
				<button className='bg-white text-black px-4 py-2 rounded-full shadow-md text-2xl hover:bg-gray-200 duration-300'>
					Поиск
				</button>
				<button className='bg-white text-black px-4 py-2 rounded-full shadow-md text-2xl hover:bg-gray-200 duration-300'>
					Выбор категории недвижимости
				</button>
			</div>

			{/* Swiper */}
			<div className='relative w-full flex justify-center '>
				<Swiper
					modules={[Pagination, Navigation]}
					slidesPerView={1}
					centeredSlides
					pagination={{
						el: '.custom-pagination',
						clickable: true,
						renderBullet: (index, className) =>
							`<span class="${className} w-2.5 h-2.5 bg-gray-400 mx-1 rounded-full"></span>`,
					}}
					navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
					className='rounded-lg overflow-hidden flex justify-center'
				>
					<SwiperSlide className='flex justify-center items-center h-fit'>
						<img src='/image-case1.png' alt='' className=''/>
					</SwiperSlide>
					<SwiperSlide className='flex justify-center'>
						<img src='/image-case2.png' alt='' className='rounded-4xl'/>
					</SwiperSlide>
					<SwiperSlide className='flex justify-center'>
						<img src='/image-case3.png' alt='' className='rounded-4xl' />
					</SwiperSlide>
				</Swiper>
				{/* Кастомные стрелки */}
				<button className='custom-prev absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-white p-8 rounded-full shadow-lg hover:bg-gray-200 duration-300'>
					<ChevronLeft />
				</button>
				<button className='custom-next absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-white px-8 py-8 rounded-full shadow-lg hover:bg-gray-200 duration-300'>
					<ChevronRight />
				</button>
			</div>
		</div>
	)
}
