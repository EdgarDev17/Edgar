import { motion } from 'framer-motion'
import Image from 'next/image'

const container = {
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			ease: 'easeOut',
			when: 'beforeChildren',
			delayChildren: 0.3,
			staggerChildren: 0.4,
		},
	},
	hidden: {
		opacity: 0,
		scale: 0.5,
		y: '-50%',
	},
}

const item = {
	visible: { opacity: 1, y: 0, transition: { ease: 'easeOut' } },
	hidden: { opacity: 0, y: '-50%' },
}

export default function Profile() {
	return (
		<>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={container}
				className='flex flex-col-reverse items-center justify-center sm:flex-row'
			>
				<div className='mr-5 flex flex-col'>
					<motion.h1
						// layoutId='titleName'
						variants={item}
						className=' mb-3 text-3xl font-bold tracking-tight text-black dark:text-white md:mb-7 md:text-6xl'
					>
						Edgardo Rodríguez
					</motion.h1>
					<motion.h2
						variants={item}
						className='mb-7 text-lg text-gray-900 dark:text-gray-300 md:mb-10 md:text-gray-700 lg:text-xl '
					>
						Front End Developer
					</motion.h2>

					<motion.div variants={item}>
						<p className='text-md mb-3 md:pr-10 text-justify text-gray-800 dark:text-gray-300'>
							Hey there! I am focusing on developing fast,
							reliable, scalable and cool software. Right now I am
							focusing on web development mainly on{' '}
							<span className='font-medium text-blue-600 dark:text-blue-200'>
								ReactJS.
							</span>
						</p>
						<p className='text-md mb-16 md:pr-10 text-justify text-gray-800 dark:text-gray-200'>
							I have been crafting software for about three years
							and I am always learning new things every single
							day.
						</p>
					</motion.div>
				</div>
				<motion.div
					variants={item}
					className='mr-auto mt-5  mb-12 lg:mb-10 w-[126px] sm:mr-0 sm:w-[375px]'
				>
					<Image
						alt='Edgardo Rodriguez'
						height={500}
						width={500}
						src='/profile.jpg'
						sizes='30vw'
						priority
						className='rounded-full'
					/>
				</motion.div>
			</motion.div>
		</>
	)
}
