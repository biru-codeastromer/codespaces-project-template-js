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
    title: "Telegram Bot for Personal Assistance",
    description:
      " Developed a Telegram bot to serve as a personal assistant, facilitating seamless task management and providing quick access to essential information. The bot features commands for setting reminders, managing to-do lists, and retrieving news updates. Leveraged Python and the python-telegram-bot library for the bot's development, ensuring smooth interactions with users. Deployed the bot on PythonAnywhere for 24/7 availability, receiving positive feedback for its intuitive design and user-friendly interface.Technologies Used: Python, python-telegram-bot, PythonAnywhere, APIs",
  },
  {
    title: "Cricket shop website",
    description:
      "Designed and developed a fully functional e-commerce website for a cricket shop, enabling users to browse and purchase cricket equipment online. The website features user authentication, product categorization, and a shopping cart functionality. Implemented a responsive design using HTML, CSS, and JavaScript to ensure compatibility across devices. Integrated payment processing using Stripe API, allowing secure transactions. The project improved my skills in full-stack development and provided insights into user experience design and online marketing strategies.Technologies Used: HTML, CSS, JavaScript, Node.js, Express, MongoDB, Stripe API",
  },
  {
    title: "My Personal Portfolio Website",
    description:
      "Developed a personal portfolio website to showcase my projects, skills, and achievements. The website includes sections for my bio, project highlights, and contact information, all presented in a visually appealing and user-friendly format. Used React for the front end, ensuring smooth navigation and responsiveness. Implemented SEO best practices to improve visibility in search engines. This project served as a platform for potential employers to evaluate my work and skill set, leading to increased interest in my internship applications.Technologies Used: React, HTML, CSS, JavaScript",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
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
