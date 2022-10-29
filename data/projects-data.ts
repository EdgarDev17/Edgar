import Iprojects from '../interfaces/project'

export const projectsData: Iprojects[] = [
	{
		id: 1,
		title: 'Recipe Up: Recipes Website',
		src:'https://recipe-one-beta.vercel.app/',
		description:
			'This website allows users to look for a recipe amoung hundreds of recipes, users are able to save their favorite recipes in their account and share them with their friends.',
		gradient: 'from-[#ef4444] to-[#ef4444]',
		languages: [
			'NextJS',
			'TailwindCSS',
			'NodeJS',
			'MongoDB',
			'PrismaDB',
			'NextAuth',
      'Framer Motion'
		],
		image: '/static/images/recipe.png',
	},
	{
		id: 2,
		title: 'Spotify Profile',
		src: 'https://spotify-music-app-profile.vercel.app/',
		description:
			'This is a web app for visualizing personalized Spotify user data, User can check their top artists, top songs, their playlists and share data with their friends',
		gradient: 'from-[#10b981] to-[#a5b4fc]',
		languages: [
			'NextJS',
			'TailwindCSS',
			'NodeJS',
			'MongoDB',
			'PrismaDB',
			'NextAuth',
      'Framer Motion'
		],
		image: '/static/images/music.png',
	},
	{
		id: 3,
		title: 'Videocalls Meeting',
		src:'https://meetup-edgardev.vercel.app/',
		description:
			'This websites allows user to make videocalls, text chat, create meetings. Users can join the meeting using personalized codes',
		gradient: 'from-[#10b981] to-[#a5b4fc]',
		languages: [
			'NextJS',
			'TailwindCSS',
			'Twilio API',
			'MongoDB',
			'PrismaDB',
			'NextAuth',
			'Framer Motion',
		],
		image: '/static/images/videocall.png',
	},
]
