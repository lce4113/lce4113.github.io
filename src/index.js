import React from 'react';
import ReactDOM from 'react-dom/client';
import TitleSlide from "./title slide";
import AboutMe from "./about me";
import Projects from "./projects";
import Accomplishments from "./accomplishments";
import Navbar from "./navbar";
import './index.css';
import './auth.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TitleSlide />
    <AboutMe />
    <Projects />
    <Accomplishments />
    <Navbar />
  </React.StrictMode>
);