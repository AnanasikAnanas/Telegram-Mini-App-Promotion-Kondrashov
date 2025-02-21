import { useRef } from 'react'

export default function SliderNavigation({ swiperRef }) {
	return (
		<div className='flex justify-between w-full relative'>
			<button
				className='custom-prev absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-white p-8 rounded-full shadow-lg hover:bg-gray-200 duration-300 max-xs:static'
				onClick={() => swiperRef.current?.slidePrev()}
			>
				<ChevronLeft />
			</button>
			<button
				className='custom-next absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-white px-8 py-8 rounded-full shadow-lg hover:bg-gray-200 duration-300 max-xs:static'
				onClick={() => swiperRef.current?.slideNext()}
			>
				<ChevronRight />
			</button>
		</div>
	)
}
