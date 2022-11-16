import classNames from 'classnames'
import { motion } from 'framer-motion'

interface TextGradientProps {
	text: string
	className?: string
	gradientFrom: string
	gradientTo: string
}

export default function TextGradient({
	text,
	className,
	gradientFrom,
	gradientTo,
}: TextGradientProps) {
	return (
		<span
			className={classNames(className, gradientFrom, gradientTo)}
		>
            {text}
        </span>
	)
}
