import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Experiences from "./pages/experience";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	const [showIntro, setShowIntro] = useState(true);
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
		setTimeout(() => {
			setShowIntro(false);
		  }, 4200);
	}, []);

	return (
		<div className="App">
			<div>
			{showIntro ? (
			<div className="loading-container">
				<div class="loading-text-container">
					<div class="text primary-text">
						<p> Hello, my name is <span class="name">Akhmadillo</span>.</p>
						</div>
						<div>
					</div>
					<div class="text secondary-text">
						<p >Welcome to my portolio site!</p>
					</div>
				</div>
			</div>
		) : (
			<div>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/experience" element={<Experiences />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</div>
		)}
    </div>
		</div>
	);
}

export default App;
