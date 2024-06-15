/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "SentryVision 🔗",
    description:
      " Developed and implemented real-time video anomaly detection system using AI and ML, leading to a 90% reduction in response time to public safety incidents.",
    url: "https://github.com/kushal7201/SentryVision",
  },
  {
    title: "SustainHub 🔗",
    description:
      "Designed and developed web platform for public facility issue reporting and tracking, contributing to increase in issue resolution efficiency.",
    url: "https://github.com/kushal7201/Sustain_Hub_GSC",
  },
  {
    title: "Movify 🔗",
    description:
      "Developed a movie recommendation system that leverages the concept of blends within a group, enabling users to discover movies based on interests and preferences.",
    url: "https://github.com/kushal7201/Hackout-project",
  },
  {
    title: "Muskaan 🔗",
    description:
      "Created an app design for needy and donor interaction under Out-of-Context '23 Design Hackathon held at IIIT-Allahabad from 29th September till 1st",
    url: "https://devfolio.co/projects/muskaan-2a89",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container project-box">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a className="purple" href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
