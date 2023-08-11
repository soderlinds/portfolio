import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import Portfolio from './components/Portfolio.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <WorkExperience />
      <Portfolio />
      <Footer />
      </div>
  );
}

export default App;
