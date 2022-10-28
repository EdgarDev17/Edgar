import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import MobileMenu from './mobile-menu'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { Link } from 'react-scroll'

function NavItem({ href, text }: { href: string; text: string }) {
	const router = useRouter()
	const isActive = router.asPath === href

	return (
			<Link 
				to={href}
				spy={true}
				smooth={true}
				className={cn('cursor-pointer',
					isActive
						? 'font-semibold text-gray-800 dark:text-gray-200 '
						: 'font-normal text-gray-600 dark:text-gray-400',
					'hidden rounded-lg p-1 transition-all hover:bg-gray-100 hover:text-blue-500 dark:hover:text-green-100 dark:hover:bg-gray-800 sm:px-3 sm:py-2 md:inline-block'
				)}
			>
				<span className='capsize'>{text}</span>
			</Link>
	)
}

export default function MenuBar() {
	const [mounted, setMounted] = useState(false)
	const { resolvedTheme, setTheme } = useTheme()
	const { scrollY } = useScroll()
	const [hidden, setHidden] = useState(false)

	useEffect(() => setMounted(true), [])

	useEffect(() => {
		const onUpdate = () => {
			if (scrollY?.current < scrollY?.prev) {
				setHidden(false)
			} else if (
				scrollY.current > 100 &&
				scrollY.current > scrollY.prev
			) {
				setHidden(true)
			}
		}
        
		return scrollY.onChange(() => onUpdate())
	}, [scrollY, hidden])

	return (
		<>
			<motion.div
				className='mb-16 mt-5 flex items-center justify-center sm:mt-0'
				initial={{ y: -25, opacity: 0 }}
				animate={hidden ? { y: -25, opacity: 0, transition:{duration:0.1, ease:'easeOut'}}: { y: 0, opacity: 1 }}
				transition={{ duration: 0.7, ease: 'easeInOut' }}

			>
				<nav className='fixed z-50 mx-auto mt-16 mb-5 flex w-11/12 max-w-4xl scroll-mb-5 items-center justify-between border-gray-200 bg-gray-50 pt-5 pb-5  text-gray-900  dark:border-gray-700 dark:bg-gray-900  dark:text-gray-100 sm:mb-0  sm:w-full sm:pt-12 sm:pb-5'>
					<motion.div className=' ml-[-0.60rem]'>
						<MobileMenu />
						<NavItem key={1} href='about' text='About me' />
						<NavItem key={2} href='projects' text='Projects' />
						<NavItem key={3} href='skills' text='My Skills' />
						<NavItem key={4} href='contact' text='Contact Me' />
					</motion.div>
					<button
						aria-label='Toggle Dark Mode'
						type='button'
						className='flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 ring-gray-300  transition-all hover:ring-2  dark:bg-gray-600'
						onClick={() =>
							setTheme(
								resolvedTheme === 'dark' ? 'light' : 'dark'
							)
						}
					>
						{mounted && (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								className='h-5 w-5 text-gray-800 dark:text-gray-200'
							>
								{resolvedTheme === 'dark' ? (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
									/>
								) : (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
									/>
								)}
							</svg>
						)}
					</button>
				</nav>
			</motion.div>
		</>
	)
}
