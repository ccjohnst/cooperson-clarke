import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { TeamCard } from "../components/cards";
import teamMember1 from "../public/teampic1.jpeg";
import teamMember2 from "../public/teampic2.jpeg";
import teamMember3 from "../public/teampic3.jpeg";
import teamMember4 from "../public/teampic4.jpeg";

export default function Team() {
	return (
		<div className="">
			<div className="main-content-container team-container">
				<h1>Meet the team</h1>
				<div className="main-content team-card-container">
					<TeamCard
						img={teamMember1}
						staffName="John Smith"
						altText="Picture of John Smith"
						jobDescription="Managing Director"
						className="team-card-item"
						telephone="0125 455 598"
						email="john.smith@cca.co.uk"
					/>
					<TeamCard
						img={teamMember2}
						staffName="John Doe"
						altText="Picture of John Doe"
						jobDescription="Head Architect"
						className="team-card-item"
						telephone="0125 455 545"
						email="john.doe@cca.co.uk"
					/>
					<TeamCard
						img={teamMember3}
						staffName="Jane Doe"
						altText="Picture of Jane Doe"
						jobDescription="Chief Designer"
						className="team-card-item"
						telephone="0125 455 254"
						email="jane.doe@cca.co.uk"
					/>
					<TeamCard
						img={teamMember4}
						staffName="Jane Smith"
						altText="Picture of Jane Smith"
						jobDescription="Marketing"
						className="team-card-item"
						telephone="0125 455 201"
						email="jane.smith@cca.co.uk"
					/>
				</div>
			</div>
		</div>
	);
}
