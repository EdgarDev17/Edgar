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
				className='flex h-screen w-full items-center justify-center'
				onAnimationComplete={() => {
					loading(false)
				}}
			>
				<div className='flex flex-col items-center justify-center'>
					<motion.h1 className='text-4xl font-bold text-gray-900 md:text-7xl'>
						Edgardo Rodríguez
					</motion.h1>
					<motion.h3
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: { duration: 0.7, delay: 0.5 },
						}}
						className='mt-3 text-2xl font-bold text-gray-700 md:mt-7 md:text-x text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'
					>
						Building things for the web
					</motion.h3>
				</div>
			</motion.div>
		</>
	)
}
