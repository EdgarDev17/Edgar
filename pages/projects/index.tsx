import Layout from '../../components/layout'
import Iprojects from '../../interfaces/project'

type Props = {
    projects: Iprojects[]
}


export default function Projects({projects}: Props) {

    // const renderItem = projects.map(item=> item)

    return (
		<>
			<Layout>
				<div className='mx-auto max-w-5xl w-11/12 pt-10'>
                <h1 className='font-bold text-5xl'>{`Welcome`}</h1>
                <h2 className='text-lg'>{`This list of some projects I've worked on`}</h2>                
                </div>
			</Layout>
		</>
	)
}
