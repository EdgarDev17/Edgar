import Link from 'next/link'
import Layout from '../components/layout'
import IconCard from '../components/icon-card'
import { motion, Variants } from 'framer-motion'
import { Suspense } from 'react'
import { useTheme } from 'next-themes'
import { techData } from '../data/tech-data'
import { projectsData } from '../data/projects-data'
import Profile from '../components/Profile'
import ProjectList from '../components/project-list'

const homeAnimation: Variants = {
	visible: {
		opacity: 1,
		transition: {
			duration: 0.9,
			ease: 'easeOut',
			when: 'beforeChildren',
			staggerChildren: 0.1,
			delayChildren: 0.1,
		},
	},
	hidden: { opacity: 0 },
}

const homeItems: Variants = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: -50 },
}

const Home = () => {
	let theme = useTheme()

	const renderTechData = techData.map((item) => {
		let renderIcon: string =
			theme.resolvedTheme === 'dark' ? item.dark : item.image
		return (
			<IconCard
				key={item.id}
				image={renderIcon}
				imageAlt={item.imageAlt}
				name={item.name}
			/>
		)
	})

	return (
		<Suspense fallback={null}>
			<Layout>
				<div className='mx-auto h-full w-11/12 max-w-4xl border-gray-200  dark:border-gray-700'>
					{/* container */}
					<motion.div
						initial='hidden'
						animate='visible'
						variants={homeAnimation}
					>
						{/* this needs to be the firt animated element */}
						<motion.div
							className='md:mt-28 md:mb-28'
							variants={homeItems}
						>
							<Profile />
						</motion.div>

						{/* second animated element  */}
						<motion.h3
							id='projects-section'
							variants={homeItems}
							transition={{ delay: 1 }}
							className='mb-8 md:mb-12 text-2xl font-bold tracking-tight text-black dark:text-white md:text-3xl'
						>
							Features Projects
						</motion.h3>

						{/* third animated element */}
						<motion.div
							transition={{ delay: 1 }}
							variants={homeItems}
							className='flex w-full flex-col gap-y-7'
						>
							<ProjectList projects={projectsData} />
						</motion.div>

						<Link href='/projects'>
							<a className='mt-8 flex h-6  items-center rounded-lg leading-7 text-gray-600 transition-all hover:font-bold hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'>
								Check all projects
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									className='ml-1 h-6 w-6'
								>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z'
									/>
								</svg>
							</a>
						</Link>

						<div>
							<h3
								id='skills-section'
								className='mb-4 mt-16 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl'
							>
								About my skills
							</h3>
							<p className='mb-10 text-gray-600 dark:text-gray-300'>
								I have been learning how to build software for
								about three years, every day I spend time
								learning about best practices, code testing,
								user accessibility, UI design, and even more!
								because I like pushing myself up to learn new
								things about programming every day and grow as a
								developer.
							</p>
							<p className='mb-16 text-gray-600 dark:text-gray-300'>
								Some technologies I{' '}
								<span className='font-medium'>enjoy</span> work
								with include:
							</p>

							<div className='mb-10 grid w-full grid-cols-2 items-center justify-center gap-y-12 md:grid-cols-4 md:gap-x-1 '>
								{renderTechData}
							</div>
						</div>
						<div id='contactme-section'>
							<h2 className='mb-4 text-center text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white md:text-3xl lg:text-3xl'>
								Get in touch
							</h2>
							<p className='mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48'>{`I'm looking for new opportunities if `}</p>
							<button>Send email</button>
						</div>
					</motion.div>
				</div>
			</Layout>
		</Suspense>
	)
}

export default Home
