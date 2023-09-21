import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-content">
					<p class="created-by" >
						Created by 
						<span class="name">Akhmadillo Mamirov</span>
					</p>
					<p class="last-updated">Last Updated: 09/21/2023</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
