import React from 'react';
import './Components.css';
import './Portfolio.css';
import artwebsite from './artwebsite.png';
import crypto from './crypto.png';
import rankify from './rankify.png';

const Portfolio = () => {

  const openWebsite = (url) => {
    window.open(url, '_blank');
  };
  return (
    <section className="page5">
      <div className="portfolio">
        <h3 className="headerPortfolio">Websites and Apps</h3>
      </div>
      <div className="collection">
        <div className="portfolio-item">
          <div className="content" onClick={() => openWebsite('https://soderlinds.github.io/artwebsite/')}>
            <img src={artwebsite} alt="Portfolio 1" />
            <p className="description">Artist's website in HTML, CSS, and Javascript</p>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="content" onClick={() => openWebsite('https://64c21b625f34b459a9dfef11--effortless-sunflower-a3036c.netlify.app/')}>
            <img src={crypto} alt="Portfolio 2" />
            <p className="description">A React application for storing the value of crypto currencies</p>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="content" onClick={() => openWebsite('https://github.com/soderlinds/restaurantreviews/tree/main')}>
            <img src={rankify} alt="Portfolio 3" />
            <p className="description">Blockchain app for restaurant reviews based on unique qr-codes. Not deployed, link to Github.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;