import React from "react";

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
					<p class="last-updated">Last Updated: 09/05/2024</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
