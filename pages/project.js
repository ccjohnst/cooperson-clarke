import { ProjectCard } from "../components/cards";
import project1 from "../public/project1.jpeg";
import project2 from "../public/project2.jpg";
import project3 from "../public/project3.jpg";
import project4 from "../public/project4.jpeg";
import project5 from "../public/project5.jpg";
import project6 from "../public/project6.jpg";
import project7 from "../public/project7.jpg";
import Head from "next/head";

export default function Projects() {
	return (
		<>
			<Head>
				<title>Projects</title>
				<meta name="Our projects" content="Our projects" />
			</Head>
			<div className="">
				<div className="main-content-container">
					<h1 className="project-title">Projects</h1>
					<div className="main-content project-container">
						<ProjectCard
							img={project1}
							description="Shopping Centre"
							altText="An image of a shopping centre"
						/>
						<ProjectCard
							img={project2}
							description="Hotel"
							altText="An image of a hotel"
						/>
						<ProjectCard
							img={project3}
							description="Water fountain"
							altText="An image of a water fountain"
						/>
						<ProjectCard
							img={project4}
							description="Library"
							altText="an image of a library"
						/>
						<ProjectCard
							img={project5}
							description="Stairs"
							altText="An image of some stairs"
						/>
						<ProjectCard
							img={project6}
							description="Chapel"
							altText="An image of a chapel"
						/>
						<ProjectCard
							img={project7}
							description="Apartment Block"
							altText="An image of an apartment block"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
