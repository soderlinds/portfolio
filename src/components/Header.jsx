import React, { useRef } from 'react';
import './Components.css';
import './Header.css';
import Sara2Image from './Sara2.png';
import About from './About';

const Header = () => {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="page1">
      <div className="flexbox">
        <div className="photo">
          <img src={Sara2Image} className="portrait" width="650" height="879" alt="portrait_Sara" />
        </div>
        <div className="heading1">
          <h1>Hi, I'm Sara.</h1>
        </div>
        <div className="heading2">
          <h2>Blockchain developer</h2>
        </div>
      </div>
      <section className="short-page">
        <div className="presentation">
          <p className="pres_text">Göteborg, Sweden.
            Specializing in Blockchain technology <br className="tablet" /> to help lay the foundation for a safer,
            smarter and more sustainable transport chain. <br />What benefits and utilities do you want to create? What are
            your problems
            today that Blockchain can help solve?</p>
          <a href="mailto:soderlind.sara@gmail.com" className="link_tablet">&nbsp;&nbsp;&nbsp;Let's talk about it ← &nbsp;</a>
        </div>
        <div className="scroll-down" onClick={handleScroll}></div>
      </section>
      {About}
      <div ref={scrollRef}>
        {About}
      </div>
    </header>
  );
};

export default Header;
