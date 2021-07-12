import Image from "next/image";
import github from "../public/GitHub-Mark-Light-32px.png";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-item">
				<h3 className="gitHubIcon">
					Copyright © 2021{" "}
					<a
						href="https://github.com/ccjohnst/"
						target="_blank"
						rel="noopener noreferrer"
					>
						ccjohnst{" "}
						<Image src={github} alt="Github Logo" className="gitHubIcon" />
					</a>
				</h3>
			</div>
		</footer>
	);
};

export default Footer;
