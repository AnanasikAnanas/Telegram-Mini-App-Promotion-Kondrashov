import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './sections/Header'
import { Home } from './sections/Home'

function App() {
	return (
		<div className='p-4 flex flex-col gap-4'>
			<div className='p-4 flex flex-col gap-4 bg-block rounded-4xl'>
				<Header />
        <Home/>
			</div>
		</div>
	)
}

export default App
