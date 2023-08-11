import React from 'react';
import './Components.css';
import './About.css';

const About = () => {
  return (

    <section className="full-height page2">

      <div className="info">
        <h3 className="desktop_header">About me.</h3>
        <article className="aboutme">I'm Sara, art enthusiast and future Blockchain Developer, seeking an opportunity
          to gain valuable experience in the fields of frontend/backend development
          and Blockchain Technology. Currently, I am studying Blockchain Development
          at Medieinstitutet and have completed several courses to enhance my
          knowledge and skills in HTML/CSS, Javascript, React, Agile methods, Solidity
          and Blockchain within business and law. Additionally, I am currently familiarizing
          myself more with the concepts of Smart Contracts and NodeJS before starting
          my internship in October.
          In my previous professional roles I worked as a manager with a team of staff,
          but I realized that my true interests lie in development and my own artistry.
          This change in direction has allowed me to pursue my passion and further develop
          my skills. My background in web development and graphic design has given me a
          keen eye for detail and a strong understanding of user experience design principles.
        </article>
      </div>

      <div className="skill_list">
        <h3>Skills.</h3>
        <ul>
          <li>
            <strong>HTML</strong>
            <p>Experienced in creating the structure and content of web pages using HTML.</p>
          </li>
          <li>
            <strong>CSS</strong>
            <p>Proficient in styling web pages using CSS to create visually appealing designs.</p>
          </li>
          <li>
            <strong>Javascript</strong>
            <p>Familiar with JavaScript for creating dynamic and interactive web elements.</p>
          </li>
          <li>
            <strong>React</strong>
            <p>Knowledgeable in building modern web applications using React library.</p>
          </li>
          <li>
            <strong>NodeJS</strong>
            <p>Basic understanding of NodeJS for server-side development.</p>
          </li>
        </ul>
      </div>

      <div className="language">
        <h3>Languages.</h3>
        <div className="languageskills">
          <div className="languagedetails">
            <span>Swedish</span>
            <span>100%</span>
          </div>
          <div className="languagebar">
            <div id="lang_swedish-bar"></div>
          </div>
        </div>
        <div className="languageskills">
          <div className="languagedetails">
            <span>English</span>
            <span>95%</span>
          </div>
          <div className="languagebar">
            <div id="lang_english-bar"></div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;
