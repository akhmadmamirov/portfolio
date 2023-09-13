import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Experiences from "./pages/experience";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import "./app.css";

function App() {
	return (
		<div className="App">
			
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
		
    	</div>
		)	
}

export default App;
