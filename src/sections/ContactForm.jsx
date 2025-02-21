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
		<div className='flex items-center justify-center rounded-4xl bg-[#2196F3] p-32 max-xs:flex-col max-xs:p-6' id='contact-form'>
			<div className='flex gap-32 max-xs:flex-col max-xs:gap-12'>
				<div className='flex flex-col justify-between'>
					<div className='flex flex-col gap-12 max-xs:gap-6'>
						<h2 className='text-6xl font-medium text-white max-xs:text-3xl'>
							Готовы выйти на новый уровень и захватить глобальный рынок?
						</h2>
						<p className='text-2xl text-white max-xs:text-base'>
							Мы поможем вам стать лидером мобильной коммерции в России и за её
							пределами!
						</p>
					</div>
					<p className='text-[#FFFFFF52] max-xs:text-xs'>©️ Студия Сайтов 2025. Все права защищены</p>
				</div>

				<div className='md:w-1/2'>
					<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
						<div className='flex gap-4 max-xs:flex-col'>
							<input
								type='text'
								name='firstName'
								value={formData.firstName}
								onChange={handleChange}
								placeholder='Имя*'
								className='px-12 py-8 bg-white rounded-full focus:outline-none border-0 text-2xl max-xs:px-8 max-xs:py-6 max-xs:text-xl'
							/>
							<input
								type='text'
								name='lastName'
								value={formData.lastName}
								onChange={handleChange}
								placeholder='Фамилия*'
								className='px-12 py-8 bg-white rounded-full focus:outline-none border-0 text-2xl max-xs:px-8 max-xs:py-6 max-xs:text-xl'
							/>
						</div>
						<input
							type='tel'
							name='phone'
							value={formData.phone}
							onChange={handleChange}
							placeholder='Номер телефона*'
							className='px-12 py-8 bg-white rounded-full focus:outline-none border-0 text-2xl max-xs:px-8 max-xs:py-6 max-xs:text-xl'
						/>
						<input
							type='text'
							name='businessField'
							value={formData.businessField}
							onChange={handleChange}
							placeholder='Сфера бизнеса'
							className='px-12 py-8 bg-white rounded-full focus:outline-none border-0 text-2xl max-xs:px-8 max-xs:py-6 max-xs:text-xl'
						/>
						<button
							type='submit'
							className='px-12 py-8 bg-[#212121] cursor-pointer rounded-full focus:outline-none  text-2xl text-white max-xs:px-8 max-xs:py-6 max-xs:text-xl'
						>
							Отправить
						</button>
					</form>
					<p className='text-xl text-[#FFFFFFA3] text-center mt-3 max-xs:text-base'>
						Нажимая кнопку «Отправить», вы даете согласие на обработку
						персональных данных
					</p>
				</div>
			</div>
		</div>
	)
}
