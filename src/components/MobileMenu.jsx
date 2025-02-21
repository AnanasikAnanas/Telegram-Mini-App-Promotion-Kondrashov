import { useState, useEffect } from 'react'
import { X, Menu, Plus } from 'lucide-react'
import { Navigation } from './Navigation'
import { LinkNav } from '../sections/Header'

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.matchMedia('(max-width: 375px)').matches)
		}
		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)
		return () => window.removeEventListener('resize', checkScreenSize)
	}, [])

	if (!isMobile) return null

	return (
		<div className='relative p-4'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<button onClick={() => setIsOpen(!isOpen)} className=''>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
					<button className='px-4 py-2 rounded-full border border-[#2196F3] text-[#2196F3]'>
						<Plus size={20} />
					</button>
				</div>
			</div>
			{isOpen && (
				<div className='fixed inset-0 top-24 bg-black/50'>
					<div className='relative max-w-sm flex flex-col gap-2 text-center'>
						{LinkNav.map((link, index) => (
							<Navigation
								key={index}
								text={link.text}
								targetId={link.targetId}
								onClick={()=> setIsOpen(false)}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
