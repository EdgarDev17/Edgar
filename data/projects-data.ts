import Iprojects from '../interfaces/project'

export const projectsData: Iprojects[] = [
	{
		id: 1,
		title: 'Recipe Up: Recipes Website',
		src:'https://github.com/EdgarDev17/recipe',
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
		image: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png',
	},
	{
		id: 2,
		title: 'Videocalls Meeting',
		src:'https://github.com/EdgarDev17/google-meetup',
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
		image: '/project.png',
	},
	{
		id: 3,
		title: 'Spotify Profile',
		src: 'https://github.com/EdgarDev17/spotify-music-app',
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
]
