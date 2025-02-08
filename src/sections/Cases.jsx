import CustomPagination from '../components/CustomPagination'
import SliderCases from '../components/SliderCases'

export const Cases = () => {
	return(
		<section className='p-16 bg-block flex flex-col items-center gap-8'>
			<CustomPagination className={"custom-pagination"}/>
			<h1 className='text-6xl font-medium'>Real Estate</h1>
			<SliderCases/>
		</section>
	)
}