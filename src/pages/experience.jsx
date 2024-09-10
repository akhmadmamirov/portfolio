import React, { useState, useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import { faStar, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/experience.css";

const Experiences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const experiences = [
    {
      company: "ELECTRONIC ARTS (EA)",
      title: "Software Engineer Intern",
      date: "05/20/2024 - 08/09/2024",
      description: "Developed and onboarded a new Player Account Management Tool of ownership & entitlements.",
      skills: ["Commerce", "Identity", "Java", "JavaScript"],
      image: "EAinternExperience.jpeg"
    },
    {
      company: "AtomRain Inc.",
      title: "Software Engineer Intern",
      date: "05/15/2023 - 07/08/2023",
      description: "Enhanced Security, Payment & Billing components of GraphGrid CDP.",
      skills: ["JavaScript", "React", "Express", "C++"],
      image: "SFMe.png"
    },
		{
      company: "Google Developers Group",
      title: "Founder & Lead",
      date: "08/20/2023 - Present",
      description: "Founded and led the 1st tech club at the College of Wooster under Google Developer Student Clubs.",
      skills: ["Leadership", "Communication", "Networking"],
      image: "GoogleIo.png"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextExperience = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevExperience = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="page-content">
        <NavBar active="experience" />
        <div className="content-wrapper">
          <div className="experiences-logo-container">
            <div className="experiences-logo">
              <Logo width={46} />
            </div>
          </div>
          <div className="title experience-title">
            Work Experience
            <span className="period" data-v-09456b5b="">.</span>
            <p className="description">Here are all of my most recent work experiences and what I have learned.</p>
          </div>
          <div className="experiences-main-container">
            <section className="experience-container">
              <div className="job-description">
                <div>
                  <div className="level-container">
                    <div className="title-left">
                      <p className="company-title" role="heading">
                        {experiences[currentIndex].company}
                      </p>
                      <div className="title-container">
                        <p className="job-title">
                          {experiences[currentIndex].title}
                        </p>
                        <p className="date">
                          {experiences[currentIndex].date}
                        </p>
                        <div className="experience-details">
                          <FontAwesomeIcon
                            icon={faStar}
                            className="experience-social-icon"
                          />
                          <div className="description-container">
                            {experiences[currentIndex].description}
                          </div>
                        </div>
                        <div className="experience-skills">
                          <ul className="skill-badges-container">
                            {experiences[currentIndex].skills.map((skill, index) => (
                              <li key={index} className="skill-badge">{skill}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="experience-image-container">
                      <div className="experience-image-wrapper">
                        <img
                          src={experiences[currentIndex].image}
                          alt="about"
                          className="experience-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
						<div className="button-container">
							<button onClick={prevExperience} className="slider-button left">
								<FontAwesomeIcon icon={faChevronLeft} />
							</button>
							<button onClick={nextExperience} className="slider-button right">
								<FontAwesomeIcon icon={faChevronRight} />
							</button>
						</div>
          </div>
					
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;