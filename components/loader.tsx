import { motion } from 'framer-motion'

export default function Loader({
	loading,
}: {
	loading: (isComplete: boolean) => void
}) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: '50' }}
				animate={{
					opacity: 1,
					x: 0,
					y: 0,
					transition: { duration: 2.5, ease: 'easeOut' },
				}}
				exit={{
					opacity: 0,
					y: '-50',
					transition: { duration: 1.5, ease: 'easeOut' },
				}}
				className='flex h-screen overflow-hidden w-full items-center justify-center bg-gray-50 dark:bg-gray-900'
				onAnimationComplete={() => {
					loading(false)
				}}
			>
				<div className='flex flex-col items-center justify-center'>
					<motion.h1 className='text-4xl font-bold text-gray-900 dark:text-gray-50 md:text-7xl'>
						Edgardo Rodríguez
					</motion.h1>
					<motion.h3
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: { duration: 0.7, delay: 0.5 },
						}}
						className='md:text-x mt-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-bold text-gray-700 text-transparent md:mt-7'
					>
						Building things for the web
					</motion.h3>
				</div>
			</motion.div>
		</>
	)
}
