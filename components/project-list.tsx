import Iprojects from '../interfaces/project'
import ProjectCard from './project-card'

type props = {
	projects: Iprojects[]
}

const randomGradient = {
	'1': 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
	'2': 'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600',
	'3': 'bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800',
	'4': 'bg-gradient-to-r from-green-300 to-purple-400',
	'5': 'bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900' 
}

function getRandomItem(): string {
	let keys = Object.keys(randomGradient)
	return keys[Math.floor(Math.random() * keys.length)]
}

export default function ProjectList({ projects }: props) {
	const renderProjectCard = () => {
		return projects.map((project) => {
			let gradient: string = randomGradient[getRandomItem() as keyof typeof randomGradient]
			return (
				<ProjectCard
					key={project.id}
					id={project.id}
					title={project.title}
					description={project.description}
					gradient={gradient}
					languages={project.languages}
					image={project.image}
				/>
			)
		})
	}

	return <>{renderProjectCard()}</>
}
