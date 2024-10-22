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
import image from "../images/1729540283683.webp";

const imageAltText = "my own background doing coding in mac";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hello! I'm Birajit Saikia, a first-year B.Tech CSE (AI & ML) student at Newton School of Technology, Pune. I am passionate about full-stack development and web development. Currently, I am deepening my knowledge of Node.js and React.js to build scalable and dynamic web applications. With a strong inclination toward web development, I aspire to become a professional web developer.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "ReactJS",
  "REST API",
  "Python programming",
  "C++",
  "Data Structures and Algorithms",
  "Bootstrap",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about building intelligent systems and developing innovative web and more specifically sports web. My aim is to solve real-world problems with AI-driven solutions.";

const About = () => {
  return (
    <section className="padding" id="about">
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