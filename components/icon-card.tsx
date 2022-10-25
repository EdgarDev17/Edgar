import Image from 'next/future/image'

interface IconCardModel {
	name: string
	image: string
	imageAlt: string
}

export default function IconCard({ image, name, imageAlt }: IconCardModel) {
	return (
		<>
			<div className='flex transform flex-col items-center gap-y-5 transition-all hover:scale-[1.15] hover:font-bold'>
				<Image alt={imageAlt} src={image} width={100} height={100} />
				<p className='mt-1 text-gray-800 dark:text-gray-200'>{name}</p>
			</div>
		</>
	)
}
