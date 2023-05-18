import Iprojects from '../interfaces/project'
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

type props = {
	projects: Iprojects[]
}

const colors: string[] =[
	"#f59e0b",
	"#06b6d4",
	"#10b981" 
]


export default function ProjectList({projects}: props) {
	const renderProjectCard = () => {
		return projects.map((project) => {
			return (
				<Card key={project.id} css={{ w: "100%", h: "400px" }}>
				<Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
				  <Col>
					<Text size={28} weight="bold" transform="uppercase" color="#FFFFFF">
					{project.title}
					</Text>
					<Text h3 color="#d1d5db">
					  {project.description}
					</Text>
				  </Col>


				</Card.Header>
				<Card.Body css={{ p: 0, backgroundColor: "#1e293b" }}>
				  {/* <Card.Image
					src={'../public/static/images/technologies/nextjs-icon-white.svg'}
					objectFit="cover"
					width="100%"
					height="100%"
					alt="Project card background"
					css={{ filter: "brightness(0.5)" }}
				  /> */}
				</Card.Body>
				<Card.Footer
				  isBlurred
				  css={{
					position: "absolute",
					bgBlur: "#0f111466",
					borderTop: "$borderWeights$light solid $gray800",
					bottom: 0,
					zIndex: 1,
				  }}
				>
				  <Row>
					<Col>
					  <Row>
						<Col>
						  <Text color="#d1d1d1" size={12}>
							{project.title}
						  </Text>
						  <Text color="#d1d1d1" size={12}>
							You can check out the code on github
						  </Text>
						</Col>
					  </Row>
					</Col>
					<Col>
					  <Row justify="flex-end">
						<Button
						  flat
						  auto
						  rounded
						  css={{ color: "#94f9f0", bg: "#94f9f026" }}
						  onPress={() => window.open(project.src, "_blank")}
						>
						  <Text
							css={{ color: "inherit" }}
							size={12}
							weight="bold"
							transform="uppercase"
						  >
							View Project on Github
						  </Text>
						</Button>
					  </Row>
					</Col>
				  </Row>
				</Card.Footer>
			  </Card>
			)
		})
	}

	return <>{renderProjectCard()}</>
}
