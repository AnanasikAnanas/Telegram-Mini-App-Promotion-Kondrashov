import { AdvantagesCard } from '../components/AdvantagesCard'
import { SliderAdvantagesCard } from '../components/SliderAdvantagesCard'

export const Advantages = () => {
	return (
		<section className='bg-block flex gap-12 p-24 max-xs:p-6' id='advantages'>
			<SliderAdvantagesCard/>
		</section>
	)
}
