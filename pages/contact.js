import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const mapOptions = {
	center: {
		lat: 0,
		lng: 0,
	},
	zoom: 4,
};

export default function Contact() {
	const mapViewer = useRef(null);

	useEffect(() => {
		const locationMarker = { lat: 51.501476, lng: -0.140634 };
		const loader = new Loader({
			apiKey: "AIzaSyB2KX0g9gDJ752NvTyBE39xHvK6QKIHUBE",
			version: "weekly",
			libraries: ["places"],
		});
		let map;
		loader.load().then(() => {
			map = new google.maps.Map(mapViewer.current, {
				center: locationMarker,
				zoom: 14,
			});
			const marker = new google.maps.Marker({
				position: locationMarker,
				map: map,
			});
		});
	});
	return (
		<>
			<div className="">
				<div className="contact-us-container">
					<div className="contact-page-left">
						<h2>Contact Us</h2>

						<p>
							For general enquiries email:{" "}
							<a href="mailto:welcome@cca.co.uk">welcome@cca.co.uk</a>
						</p>
						<p>Tel: 01234 567 8910</p>
					</div>

					<div className="contact-page-right">
						<h2>Find Us</h2>

						<div id="map" ref={mapViewer}></div>
						<p>Buckingham Palace, London, SW1A 1AA</p>
					</div>
				</div>
			</div>
		</>
	);
}
