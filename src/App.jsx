import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './sections/Header'
import { Home } from './sections/Home'
import { Cases } from './sections/Cases'
import { Advantages } from './sections/Advantages'
import { WhyTg } from './sections/WhyTg'
import { ShowCases } from './sections/ShowCases'

function App() {
	return (
		<div className='p-4 flex flex-col gap-4'>
			<div className='p-4 flex flex-col gap-4 bg-block rounded-4xl'>
				<Header />
        <Home/>
			</div>
			<Cases/>
			<Advantages/>
			<WhyTg/>
			<ShowCases/>
		</div>
	)
}

export default App
