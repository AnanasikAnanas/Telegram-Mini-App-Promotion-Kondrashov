import { useState } from 'react'

export default function ContactForm() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		businessField: '',
	})
	const [submittedData, setSubmittedData] = useState([])

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = e => {
		e.preventDefault()
		setSubmittedData(prev => [...prev, formData])
		setFormData({ firstName: '', lastName: '', phone: '', businessField: '' })
		console.log(submittedData);
	}

	return (
		<div className='flex items-center justify-center rounded-4xl bg-[#2196F3] p-32'>
			<div className='flex gap-32'>
				<div className='flex flex-col justify-between'>
					<div className='flex flex-col gap-12'>
						<h2 className='text-6xl font-medium text-white'>
							Готовы выйти на новый уровень и захватить глобальный рынок?
						</h2>
						<p className='text-2xl text-white'>
							Мы поможем вам стать лидером мобильной коммерции в России и за её
							пределами!
						</p>
					</div>
					<p className='text-[#FFFFFF52]'>©️ Студия Сайтов 2025. Все права защищены</p>
				</div>

				<div className='md:w-1/2'>
					<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
						<div className='flex gap-4'>
							<input
								type='text'
								name='firstName'
								value={formData.firstName}
								onChange={handleChange}
								placeholder='Имя*'
								className='px-12 py-8 bg-white rounded-full focus:outline-none border-0 text-2xl'
							/>
							<input
								type='text'
								name='lastName'
								value={formData.lastName}
								onChange={handleChange}
								placeholder='Фамилия*'
								className='px-12 py-8 bg-white rounded-full focus:outline-none border-0 text-2xl'
							/>
						</div>
						<input
							type='tel'
							name='phone'
							value={formData.phone}
							onChange={handleChange}
							placeholder='Номер телефона*'
							className='px-12 py-8 bg-white rounded-full focus:outline-none border-0 text-2xl'
						/>
						<input
							type='text'
							name='businessField'
							value={formData.businessField}
							onChange={handleChange}
							placeholder='Сфера бизнеса'
							className='px-12 py-8 bg-white rounded-full focus:outline-none border-0 text-2xl'
						/>
						<button
							type='submit'
							className='px-12 py-8 bg-[#212121] cursor-pointer rounded-full focus:outline-none  text-2xl text-white'
						>
							Отправить
						</button>
					</form>
					<p className='text-xl text-[#FFFFFFA3] text-center mt-3'>
						Нажимая кнопку «Отправить», вы даете согласие на обработку
						персональных данных
					</p>
				</div>
			</div>
		</div>
	)
}
