import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="title-container">
						<div className="title about-title">
							{INFO.about.title}
							<span class="period" data-v-09456b5b="">.</span>
							<p class="description">Learn more about what technologies I have experience in and why I love to do what I do!</p>
						</div>
					</div>
					<div className="about-container">
						<div className="about-main">
							<div className="personal-bio">
								<h2 class="bio-header">My Bio</h2>
								<p class="about-item"> I'm a 
								<span class="key-word">Software Engineer</span> 
								building the easy to use and high performing applications. 
								Check out some of my work in the Projects section, and my previous experience in the work section! 
								</p>
								<p class="about-item"> I like to say that learning is my hobby and enjoy 
								sharing what I have learned with my peers, so often times I interact with memebers on my Google Developer Clubs team and everyone new ways of doing things.
								<span class="key-word">Software development</span> 
								is so awesome because it is a crosspath of problem solving, coding, and creating a tangible project and design which I love. 
								I get to interact with several teams whether it be business, UX and accessibility, and the back end team to make sure that
								the proejct is on track to being successful.
								</p>
								<p class="about-item" data-v-0104b974=""> 
									I'm always one to <span class="key-word">say "yes" to opportunities</span> 
									that can provide me a chance to learn something new, so please do not hesitate to reach out regarding and business or job opportunities!
									I attached my LinkedIn and GitHub on my home page
								</p>
							</div>
							<div class="skills-container" 
								role="contentinfo" aria-label="skills">
								<h2 class="skills-header">Skills</h2>
								<ul class="row">
									<li class="skill tech" data-v-0104b974="">Python</li>
									<li class="skill tech" data-v-0104b974="">JavaScript</li>
									<li class="skill tech" data-v-0104b974="">C++</li>
									<li class="skill tech" data-v-0104b974="">React.js</li>
									<li class="skill tech" data-v-0104b974="">Node.js</li>
									<li class="skill tech" data-v-0104b974="">Web development</li>
									<li class="skill tech" data-v-0104b974="">TensorFlow</li>
									<li class="skill tech" data-v-0104b974="">NoSQL</li>
									<li class="skill tech" data-v-0104b974="">MongoDB</li>
									<li class="skill tech" data-v-0104b974="">Firebase</li>
									<li class="skill tech" data-v-0104b974="">Git</li>
									<li class="skill tech" data-v-0104b974="">GitHub</li>
									<li class="skill tech" data-v-0104b974="">Agile</li>
									<li class="skill tech" data-v-0104b974="">Code Review</li>
									<li class="skill tech" data-v-0104b974="">Bootstrap</li>
									<li class="skill tech" data-v-0104b974="">HTML</li>
									<li class="skill tech" data-v-0104b974="">CSS</li>
									<li class="skill tech" data-v-0104b974="">Express.js</li>
									</ul><h2 class="skills-header" data-v-0104b974="">Soft Skills</h2>
									<ul class="row"><li class="skill soft">Personable</li>
									<li class="skill soft" data-v-0104b974="">Passionate</li>
									<li class="skill soft" data-v-0104b974="">Ambitious</li>
									<li class="skill soft" data-v-0104b974="">Collaboration</li>
									<li class="skill soft" data-v-0104b974="">Accountable</li>
									<li class="skill soft" data-v-0104b974="">Efficient</li>
									<li class="skill soft" data-v-0104b974="">Outgoing</li>
									<li class="skill soft" data-v-0104b974="">Self-aware</li>
									<li class="skill soft" data-v-0104b974="">Self-learning</li>
									<li class="skill soft" data-v-0104b974="">Accountability</li>
									<li class="skill soft" data-v-0104b974="">Communication</li>
									<li class="skill soft" data-v-0104b974="">Adaptable</li>
								</ul>
							</div>

						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
