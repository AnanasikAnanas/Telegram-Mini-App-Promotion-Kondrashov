import { Sk } from '../components/icons/Sk'
import { SliderShowCases } from '../components/SliderShowCases'

export const ShowCases = () => {
	return (
		<section className='flex bg-block'>
			<div className='p-16 flex flex-col justify-between'>
				<div className='flex flex-col gap-8'>
					<h2 className='text-3xl font-medium'>
						30+ экспертов с опытом работы в ИИ, машинном обучении и дизайне
					</h2>
					<p className='text-xl text-[#2121217A]'>
						Полный цикл разработки: от анализа до запуска, а также гарантия
						качественного пользовательского опыта
					</p>
				</div>
				<img src="/Clip path group.svg" alt="" className='w-fit'/>
			</div>
			<div className='bg-[#ce343b] px-32 py-16 w-7xl rounded-4xl'>
				<SliderShowCases/>
			</div>
		</section>
	)
}
