import { motion } from 'framer-motion'
import Image from 'next/image'


const container = {
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: 'easeOut',
			when: 'beforeChildren',
			delayChildren: 1,
			staggerChildren: 1,
		},
	},
	hidden: {
		opacity: 0,
		scale: 0,
		y: '-50%',
	},
}

const item = {
	visible: { opacity: 1, y: 0, transition: { duration: 1 } },
	hidden: { opacity: 0, y: '-50%' },

}

export default function Profile() {
	return (
		<>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={container}
				className='flex flex-col sm:flex-row'
			>
				<div className='mr-5 flex flex-col'>
					<motion.h1
						layoutId='titleName'
						variants={item}
						className='mb-3 bg-black bg-transparent bg-clip-text py-3 text-3xl sm:text-5xl font-bold tracking-tight  dark:text-white md:mb-3 md:text-7xl'
					>
						Edgardo Rodriguez
					</motion.h1>

					<motion.h2
						variants={item}
						className='text-md mb-7 text-gray-800 dark:text-blue-200 md:mb-10  lg:text-lg lg:font-medium '
					>
						Software Engineer
					</motion.h2>

					<div>
						<motion.p
							variants={item}
							className='text-md mb-5 text-justify leading-8 text-gray-800 dark:text-gray-300 md:pr-10'
						>
							<span className='mr-3'>Hey there! 👋🏼</span>
							{`I'm focusing on building fast, reliable, scalable and
								cool software. I'm passionate about web
								development mainly using`}
							<span className='ml-3 font-medium text-blue-600 dark:text-blue-200'>
								React JS, TypeScript and Go
							</span>
							.
						</motion.p>
						<motion.p variants={item} className='text-md mb-16 text-justify leading-8 text-gray-800 dark:text-gray-200 md:pr-10'>
							{`I've been building software for about three years. 
								I am always learning new things about software development every single day.`}{' '}
						</motion.p>
					</div>
				</div>

				<motion.div
					variants={item}
					className='mr-auto mt-5 mb-12 hidden h-full w-[200px] sm:mr-0 sm:w-[350px]'
				>
					<Image
						alt='Edgardo Rodriguez'
						height={500}
						width={500}
						src='/avatar.jpg'
						priority
						className='rounded-full'
					/>
				</motion.div>
			</motion.div>
		</>
	)
}
