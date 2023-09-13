import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";


import INFO from "../data/user";



import "./styles/experience.css";

const Experiences = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);



	return (
		<React.Fragment>
			<Helmet>
				<title>{`experiences | ${INFO.main.title}`}</title>
			</Helmet>

			<div className="page-content">
				<NavBar active="experiences" />
				<div className="content-wrapper">
					<div className="experiences-logo-container">
						<div className="experiences-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="title experience-title">
						Work Experience
							<span class="period" data-v-09456b5b="">.</span>
							<p class="description">Here are all of my most recent experiences with web development and what I have learned.</p>
						</div>
					<div className="experiences-main-container">
					<section class="experience-container">
							<div class="job-description">
								<p class="company-title" role="heading">
									Google Developer Student Clubs
								</p>
								<div class="positions-container">
									<div class="level-container">
										<p class="job-title">
											Founder & Lead
										</p>
										<p class="date">
										08/10/2023 - Present
										</p>
									</div>
									<ul class="description-container">
										<li>
											Established and spreadheaded the first Google Developer Student Clubs at 
											the College of Wooster to create an environment for members to learn, support and network with each other.
										</li>
										<li>
											Coordinated logistics between multiple parties to create beneficial events such as Coding Workshops and Tech Talks.
										</li>
									</ul>
									<ul class="skill-badges-container">
										<li class="skill-badge">Team Leadership</li>
										<li class="skill-badge">Communication</li>
										<li class="skill-badge">Team Work</li>
										<li class="skill-badge">Networking</li>
									</ul>
								</div>	
							</div>
						</section>
						<section class="experience-container">
							<div class="job-description">
								<p class="company-title" role="heading">
									AtomRain inc
								</p>
								<div class="positions-container">
									<div class="level-container">
										<p class="job-title">
											Software Engineer Intern
										</p>
										<p class="date">
										05/10/2023 - 07/05/2023
										</p>
									</div>
									<ul class="description-container">
										<li>Optimized UI Performance by revitalizing React and Redux UI components (Security, Payment, Billing) for the
										GraphGrid CDP, resulting in 25% faster load times and a 40% reduction in user-reported glitches.</li>
										<li >Enhanced Amazon Instance Types Configuration: Revamped grid configurations in the UI to align with Amazon
										instance types, improving the efficiency of resource allocation and bolstering the application's performance.</li>
										<li>Boosted Scalability and Codebase Stability: Led upgrades of Node.js and React across the codebase, resulting in
										heightened scalability and code maintainability, while also significantly reducing runtime errors.</li>
									</ul>
									<ul class="skill-badges-container">
										<li class="skill-badge">React.js</li>
										<li class="skill-badge">Node.js</li>
										<li class="skill-badge">JavaScript</li>
										<li class="skill-badge">SASS</li>
										<li class="skill-badge">HTML</li>
										<li class="skill-badge">AWS</li>
										<li class="skill-badge">Redux</li>
										<li class="skill-badge">Postman</li>
										<li class="skill-badge">API Testing</li>
									</ul>
								</div>	
							</div>
						</section>
						<section class="experience-container">
							<div class="job-description">
								<p class="company-title" role="heading">
									College of Wooster
								</p>
								<div class="positions-container">
									<div class="level-container">
										<p class="job-title">
											Career Planning Assistant
										</p>
										<p class="date">
										09/23/2022 - 05/10/2023
										</p>
									</div>
									<ul class="description-container">
										<li>
											Owned the job posting approval process for over 2000 employment and internship opportunities.
										</li>
										<li>
											Improved students' career planning experience through data analysis and custom reports from Handshake, leading to enhanced guidance and decision-making support.
										</li>
									</ul>
									<ul class="skill-badges-container">
										<li class="skill-badge">Communication</li>
										<li class="skill-badge">Networking</li>
										<li class="skill-badge">Career Planning</li>
									</ul>
								</div>	
							</div>
						</section>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experiences;
