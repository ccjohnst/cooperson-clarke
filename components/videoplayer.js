const VideoPlayer = () => {
	return (
		<>
			<video autoPlay loop muted playsInline className="background-video">
				<source src="houston-skyscrapers.mp4" type="video/mp4" />
			</video>
		</>
	);
};

export default VideoPlayer;
