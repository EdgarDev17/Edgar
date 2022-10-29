interface IconCardModel {
	id: number
	name: string
	image: string
	imageAlt: string
	dark: string
}

export const techData: IconCardModel[] = [
	{
		id: 1,
		name: 'React JS',
		imageAlt: 'React JS icon',
		image: '/static/images/technologies/react-icon.svg',
		dark: '/static/images/technologies/react-icon.svg',
	},
	{
		id: 2,
		name: 'Next JS',
		imageAlt: 'Next JS icon',
		image: '/static/images/technologies/nextjs-icon.svg',
		dark: '/static/images/technologies/nextjs-icon-white.svg',
	},
	{
		id: 3,
		name: 'Node JS',
		imageAlt: 'Node JS icon',
		image: '/static/images/technologies/node-icon.svg',
		dark: '/static/images/technologies/node-icon.svg',
	},
	{
		id: 4,
		name: 'Python',
		imageAlt: 'Python icon',
		image: '/static/images/technologies/python-icon.svg',
		dark: '/static/images/technologies/python-icon.svg',
		
	},

	{
		id: 5,
		name: 'Tailwind CSS',
		imageAlt: 'MongoDB icon',
		image: '/static/images/technologies/tailwind-icon.svg',
		dark: '/static/images/technologies/tailwind-icon.svg',

	},
	{
		id: 6,
		name: 'Prisma DB',
		imageAlt: 'Prisma icon',
		image: '/static/images/technologies/prisma-icon.svg',
		dark: '/static/images/technologies/prisma-icon-light.svg',

	},
	{
		id: 7,
		name: 'Mongo DB',
		image: '/static/images/technologies/mongodb-icon.svg',
		imageAlt: 'MongoDB icon',
		dark: '/static/images/technologies/mongodb-icon.svg',
	},
	{
		id: 8,
		name: 'MySQL',
		image: '/static/images/technologies/mysql-icon.svg',
		imageAlt: 'MySQL icon',
		dark: '/static/images/technologies/mysql-icon.svg',

	},
]
