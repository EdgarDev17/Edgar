import { motion } from 'framer-motion'
import Image from 'next/future/image'

const container = {
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.9,
			ease: 'easeOut',
			when: 'beforeChildren',
			staggerChildren: 0.3,
		},
	},
	hidden: {
		opacity: 0,
		scale: 0.5,
		y: '-50%',
	},
}

const item = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: '-50%' },
}

export default function Profile() {
	return (
		<>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={container}
				className='flex flex-col-reverse items-start sm:flex-row'
			>
				<div className='flex flex-col pr-8'>
					<motion.h1
						variants={item}
						className='mb-3 text-3xl font-bold tracking-tight text-black dark:text-white md:mb-5 md:text-5xl'
					>
						Edgardo Rodríguez
					</motion.h1>
					<motion.h2
						variants={item}
						className='md:text-normal mb-7 text-lg text-gray-900 dark:text-gray-300 md:mb-10 md:text-gray-700 '
					>
						Front End Developer
					</motion.h2>

					<motion.div variants={item}>
						<p className='text-md mb-3 text-justify text-gray-800 dark:text-gray-300'>
							Hey there! I am focusing on developing fast,
							reliable, scalable and cool software. Right now I am
							focusing on web development mainly on{' '}
							<span className='text-blue-500 dark:text-blue-300'>
								ReactJS
							</span>{' '}
							or{' '}
							<span className='text-green-500 dark:text-green-300'>
								Vue.
							</span>
						</p>
						<p className='text-md mb-16 text-justify text-gray-800 dark:text-gray-200'>
							I have been crafting software for about three years
							and I am learning new things every single day.
						</p>
					</motion.div>
				</div>
				<div className='relative mb-8 mr-auto w-[126px] sm:mb-0 sm:w-[400px]'>
					<Image
						alt='Edgardo Rodriguez'
						height={500}
						width={500}
						src='/profile.jpg'
						sizes='30vw'
						priority
						className='rounded-full'
					/>
				</div>
			</motion.div>
		</>
	)
}
