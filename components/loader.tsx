import { motion } from 'framer-motion'
import Lottie from 'lottie-react'

import animationDataItem from '../public/cube.json'

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
				className='flex h-screen w-full items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900'
				onAnimationComplete={() => {
					loading(false)
				}}
			>
				<div className='flex h-screen  w-full flex-col items-center justify-center sm:gap-y-5'>
					<div className='w-80'>
						<Lottie className='' animationData={animationDataItem} />
					</div>
					<motion.h3
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: { duration: 0.7, delay: 0.5 },
						}}
						className='bg-gradient-to-r text-center  from-green-500 via-blue-500 to-purple-500 bg-clip-text text-2xl font-bold text-gray-700 text-transparent md:text-3xl'
					>
						Building out of the box
					</motion.h3>
				</div>
			</motion.div>
		</>
	)
}
