import Link from "next/link";
import Image from "next/image";
import logo from "../public/cclogo.png";
import { useRouter } from "next/router";
import burger from "../public/hamburger.png";
import React, { useState } from "react";

export default function NavBar() {
	const router = useRouter();

	const [navStatus, setNavStatus] = useState(false);
	const handleNav = () => setNavStatus(!navStatus);
	const closeMobileNav = () => setNavStatus(false);

	return (
		<>
			<nav className="nav-container">
				<div className="nav-menu">
					<div className="logo-container" onClick={closeMobileNav}>
						<Link href="/" className="link-text">
							<a className="logo">
								<Image
									className="top-nav-logo"
									src={logo}
									alt="Company logo"
									width="61"
									height="38.25"
								/>
							</a>
						</Link>
					</div>

					<div className={navStatus ? "links" : "links links-disabled"}>
						<div
							className={
								router.pathname == "/about" ? "nav-about active" : "nav-about"
							}
							onClick={closeMobileNav}
						>
							<Link
								className="link-text"
								href="/about"
								style={{ textDecoration: "none" }}
							>
								<a className="hover:opacity-80">About</a>
							</Link>
						</div>
						<div
							className={
								router.pathname == "/team" ? "nav-team active" : "nav-team"
							}
							onClick={closeMobileNav}
						>
							<Link
								className="block mt-4 lg:inline-block text-teal-600 lg:mt-0 mr-10"
								href="/team"
							>
								<a>Team</a>
							</Link>
						</div>

						<div
							className={
								router.pathname == "/project"
									? "nav-projects active"
									: "nav-projects"
							}
							onClick={closeMobileNav}
						>
							<Link
								className="block mt-4 lg:inline-block text-teal-600 lg:mt-0 mr-10"
								href="/project"
							>
								<a>Projects</a>
							</Link>
						</div>
						<div
							className={
								router.pathname == "/contact"
									? "nav-contact active"
									: "nav-contact"
							}
							onClick={closeMobileNav}
						>
							<Link
								className="block mt-4 lg:inline-block text-teal-600 lg:mt-0 mr-10"
								href="/contact"
							>
								<a>Contact</a>
							</Link>
						</div>
					</div>
					<div className="burger-icon">
						<button className="burger-button" onClick={() => handleNav()}>
							<Image src={burger} alt="hamburger icon" width="25" height="25" />
						</button>
					</div>
				</div>
			</nav>
		</>
	);
}
