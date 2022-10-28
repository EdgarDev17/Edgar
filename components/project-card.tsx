import Link from 'next/link'
import cn from 'classnames'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Iprojects from '../interfaces/project'

export default function ProjectCard({
	id,
	title,
	description,
	gradient,
	languages,
	image,
	src
}: Iprojects) {
	return (
			<motion.a
				href={src}
				initial={{ opacity: 0, y: '-50%' }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.5}}
				whileHover={{ scale: 1.05, transition: { duration: 0.5, ease: 'easeIn' }}}
				viewport={{ once: true }}
				className={cn('mb-5 bg-gradient-to-r from-green-200 to-green-500', 'p-1 rounded-lg')}
			>
				<div className='flex  flex-col items-center rounded-lg bg-white p-4 dark:bg-gray-800'>
					<div className='block'>
						<h4 className='mb-2 w-full text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50 md:text-xl'>
							{title}
						</h4>
						<p className='text-gray-900 dark:text-gray-200'>
							{description}
						</p>
					</div>
				
					<div className='capsize mt-10 flex flex-wrap items-center gap-2 text-gray-800'>
						{languages.map((item) => (
							<span
								key={item}
								className='mr-2 rounded bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900'
							>
								{item}
							</span>
						))}
					</div>

					<Image
						alt='Web development project preview'
						height={500}
						width={500}
						src={image as any}
						className={'mt-5 rounded-lg'}
					/>
				</div>
			</motion.a>
	)
}
