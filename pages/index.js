import Head from "next/head";
import VideoPlayer from "../components/videoplayer";
// import video from "../public/houston-skyscrapers.mp4";

export default function Home() {
	return (
		<>
			<Head>
				<title>Cooperson Clarke Architect</title>
				<meta
					name="Website for architects"
					content="Find out about Cooperson Clarke"
				/>
			</Head>
			<VideoPlayer />
			<main className="main-content-container">
				<div className="main-content landing-page">
					<h1 className="home-title">
						<span>Welcome to</span>
						<span>Cooperson Clarke Architects</span>
					</h1>
				</div>
			</main>
		</>
	);
}
