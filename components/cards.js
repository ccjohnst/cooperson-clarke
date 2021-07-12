import Image from "next/image";
// Takes three params, the img, description and the alttext to be displayed
const ProjectCard = ({ img, description, altText }) => {
	return (
		<>
			<div className="card-container">
				<Image
					src={img}
					alt={altText}
					className="card-item"
					width={250}
					height={250}
				/>
				<h4 className="card-title">{description}</h4>
			</div>
		</>
	);
};

const TeamCard = ({
	img,
	staffName,
	altText,
	jobDescription,
	telephone,
	email,
}) => {
	return (
		<>
			<div className="team-card-container">
				<Image
					src={img}
					alt={altText}
					className="team-card-item"
					width={250}
					height={250}
				/>
				<h4 className="team-card-title">{staffName}</h4>
				<h5>{jobDescription}</h5>
				<p>Tel: {telephone}</p>
				<p>
					Email: <a href={`mailto:${email}`}>{email}</a>
				</p>
			</div>
		</>
	);
};
export { ProjectCard, TeamCard };
