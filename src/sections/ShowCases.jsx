import { Sk } from '../components/icons/Sk'
import { SliderShowCases } from '../components/SliderShowCases'

export const ShowCases = () => {
	return (
		<section className='flex bg-block max-xs:flex-col'>
			<div className='p-16 flex flex-col justify-between max-xs:p-6 max-xs:gap-18'>
				<div className='flex flex-col gap-8 max-xs:gap-3.5'>
					<h2 className='text-3xl font-medium max-xs:text-2xl'>
						30+ экспертов с опытом работы в ИИ, машинном обучении и дизайне
					</h2>
					<p className='text-xl text-[#2121217A] max-xs:text-base'>
						Полный цикл разработки: от анализа до запуска, а также гарантия
						качественного пользовательского опыта
					</p>
				</div>
				<img src="/Clip path group.svg" alt="" className='w-fit'/>
			</div>
			<div className='bg-[#ce343b] px-32 py-16 max-w-7xl rounded-4xl max-xs:px-14'>
				<SliderShowCases/>
			</div>
		</section>
	)
}
