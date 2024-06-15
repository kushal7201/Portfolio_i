/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm an IT student currently studying at Indian Institute of Information Technology Allahabad";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "C/C++",
  "Python",
  "Javascript",
  "ReactJs",
  "Flask",
  "Git",
  "Github",
  "HTML",
  "CSS",
  "Node.js",
  "jQuery",
  "Linux",
  "MySQL",
  "REST API",
  "Figma",
  "Java",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a full stack web developer, I have experience working with both front-end and back-end technologies. I enjoy building responsive and interactive user interfaces using HTML, CSS, and JavaScript. On the server-side, I am proficient in languages like Node.js and Python, and I have experience working with databases such as MySQL and MongoDB. I am passionate about creating efficient and scalable web applications that provide a seamless user experience. Feel free to reach out to me for any web development projects or collaborations!";

const About = () => {
  return (
    <section className="padding black" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
