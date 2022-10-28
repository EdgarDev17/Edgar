import Iprojects from '../interfaces/project'
import { getRandomGradient } from '../lib/gradient-generator'
import ProjectCard from './project-card'

type props = {
	projects: Iprojects[]
}

export default function ProjectList({ projects }: props) {
	const renderProjectCard = () => {
		return projects.map((project) => {
			let gradient: string = getRandomGradient()

			return (
				<ProjectCard
					key={project.id}
					id={project.id}
					title={project.title}
					description={project.description}
					gradient={gradient}
					languages={project.languages}
					image={project.image}
					src={project.src}
				/>
			)
		})
	}

	return <>{renderProjectCard()}</>
}
