import CustomPagination from '../components/CustomPagination'
import SliderCases from '../components/SliderCases'
import SliderNavigation from '../components/SliderNavigation'
import { useRef } from 'react'

export const Cases = () => {
	const swiperRef = useRef(null)
	return (
		<section className='p-16 bg-block flex flex-col items-center gap-8 max-xs:p-6 ' id='cases'>
			<CustomPagination className={'custom-pagination'} />
			<h1 className='text-6xl font-medium max-xs:text-3xl'>Real Estate</h1>
			<div className='flex justify-center w-full'>
				<SliderCases />
			</div>
			
		</section>
	)
}
