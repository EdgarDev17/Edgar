import Layout from '../components/layout'
import IconCard from '../components/icon-card'
import { AnimatePresence, LayoutGroup, motion, Variants } from 'framer-motion'
import { Suspense, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { techData } from '../data/tech-data'
import { projectsData } from '../data/projects-data'
import Profile from '../components/Profile'
import ProjectList from '../components/project-list'
import { Element } from 'react-scroll'
import Loader from '../components/loader'

const homeAnimation: Variants = {
	visible: {
		opacity: 1,
		transition: {
			duration: 1.5,
			when: 'beforeChildren',
			delay: 1,
			staggerChildren: 0.1,
			delayChildren: 0.1,
		},
	},
	hidden: { opacity: 0 },
}

const homeItems: Variants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
}

const Home = () => {
	let theme = useTheme()
	const [loading, setLoading] = useState(true)

	const renderTechData = techData.map((item) => {
		let renderIcon: string =
			theme.resolvedTheme == 'dark' ? item.dark : item.image

		return (
			<IconCard
				key={item.id}
				image={renderIcon}
				imageAlt={item.imageAlt}
				name={item.name}
			/>
		)
	})

	const handleLoading = (isAnimationLoading: boolean) => {
		setLoading(isAnimationLoading)
	}

	return (
		<Suspense fallback={null}>
			<LayoutGroup>
				<AnimatePresence>
					{loading ? (
						<motion.div key='loader' className='overflow-y-hidden'>
							<Loader loading={handleLoading} />
						</motion.div>
					) : (
						<Layout>
							<div className='h-full mx-auto max-w-4xl overflow-x-hidden border-gray-200 w-11/12 dark:border-gray-700'>
								{/* container */}
								<motion.div
									initial='hidden'
									animate='visible'
									variants={homeAnimation}
								>
									<motion.div
										id='about'
										className='relative mt-12 flex w-full flex-col items-center justify-center  md:mt-52 md:mb-52'
										variants={homeItems}
									>
										{/* background blob
										<motion.circle
											className='absolute top-10 left-52 h-52 w-52  bg-gradient-to-b  from-pink-300 via-red-300 to-yellow-300 opacity-70  blur-3xl filter dark:from-indigo-500 dark:via-purple-500 dark:to-pink-300 '
											animate={{
												x: [0, -250, -100, 0, 100, 150],
												y: [0, 35, 0, -35, 35],
											}}
											transition={{
												duration: 5,
												yoyo: Infinity,
											}}
										/> */}

										<Profile />

										<svg
											className='hidden animate-bounce dark:text-white md:block lg:mt-32'
											fill='#374151'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
										>
											<polygon points='12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414' />
										</svg>
									</motion.div>

									{/* second animated element  */}
									<Element name='projects' id='projects'>
										<motion.h3
											variants={homeItems}
											transition={{ delay: 2.5 }}
											className='mb-8  text-center text-2xl font-bold tracking-tight text-black dark:text-white md:mb-12 md:text-4xl'
										>
											Features Projects
										</motion.h3>
										{/* third animated element */}
										<motion.div
											transition={{ delay: 2.5 }}
											variants={homeItems}
											className='flex w-full flex-col gap-y-7'
										>
											<ProjectList
												projects={projectsData}
											/>
										</motion.div>
									</Element>

									<a
										href='https://github.com/EdgarDev17?tab=repositories'
										className='mt-8 flex h-6  items-center rounded-lg leading-7 text-gray-600 transition-all hover:font-bold hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
									>
										Check all projects on GitHub
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

									<motion.div
										initial={{ opacity: 0, y: '-50%' }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 1.5, delay: 0.5 }}
										viewport={{ once: true }}
									>
										<Element name='skills' id='skills'>
											<h3
												id='skills-section'
												className='mb-16 mt-32 text-center text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl'
											>
												About my skills
											</h3>
										</Element>
										<p className='mb-10 text-gray-600 dark:text-gray-300 text-left'>
											I have been learning how to build
											software for about{' '}
											<span className='font-bold text-gray-900 dark:text-gray-100'>
												three years
											</span>
											, every day I spend time learning
											about best practices, code testing,
											user accessibility, UI design, and
											even more! because I like pushing
											myself up to learn new things about
											programming every day and grow as a
											developer.
										</p>
										<p className='mb-16 text-gray-600 dark:text-gray-300'>
											Some technologies I{' '}
											<span className='font-medium'>
												enjoy
											</span>{' '}
											work with include:
										</p>

										<div className='mb-32 grid w-full grid-cols-2 items-center justify-center gap-y-12 md:grid-cols-4 md:gap-x-1 '>
											{renderTechData}
										</div>
									</motion.div>

									<Element name='contact' id='contact'>
										<motion.div
											variants={homeAnimation}
											initial='hidden'
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												duration: 1,
												delay: 0.5,
											}}
											viewport={{ once: true }}
											className='flex flex-col items-center justify-center'
										>
											<h2 className='mt-20 mb-10 text-center text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:mt-28 lg:text-4xl'>
												Get in touch
											</h2>
											<p className='mb-6 text-center font-normal text-gray-500  dark:text-gray-400'>
												{`Hey! I'm currently looking for new opportunities, so I'd like to talk with you about it, you could send me an email, and I respond to you back as soon as possible.`}
											</p>
											<a
												href='mailto:edgardorodriguezdev@gmail.com'
												className='mt-10 mb-28 rounded-lg bg-blue-700 px-10 py-3 font-medium text-white hover:scale-[1.05] hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
											>
												Send email
											</a>
										</motion.div>
									</Element>
								</motion.div>
							</div>
						</Layout>
					)}
				</AnimatePresence>
			</LayoutGroup>
		</Suspense>
	)
}

export default Home

// use this line of codes for setting default theme
// @string 'dark' or 'light'

// const {setTheme} = useTheme()
// useEffect(()=>{
// 	setTheme('dark')
// },[])
