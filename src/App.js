import React from 'react';
import TitleSlide from "./title slide";
import AboutMe from "./about me";
import CardSet from "./card set";
import Navbar from "./navbar";
import timeline from "./assets/timeline.png";
import clock from "./assets/clock.png";
import star from "./assets/star.png";
import heart from "./assets/heart.png";
import './index.css';
import './auth.js';

export const App = () => <>
  <TitleSlide />
  <AboutMe />
  <CardSet title="Projects" id="projects"
    sorts={[{
      name: "Chronological Order",
      image: timeline,
      alt: "Timeline",
      func: (p1, p2) => (p2["date completed"] > p1["date completed"] ? 1 : -1)
    }, {
      name: "Time Spent",
      image: clock,
      alt: "Clock",
      func: (p1, p2) => p2["time spent"] - p1["time spent"]
    }, {
      name: "Quality",
      image: star,
      alt: "Star",
      func: (p1, p2) => p2["quality"] - p1["quality"]
    }, {
      name: "Popularity",
      image: heart,
      alt: "Heart",
      func: (p1, p2) => p2.clicks - p1.clicks
    }]}
    fieldTypes={{
      "title": "text-plain",
      "tags": "text-plain",
      "description": "text-expand",
      "caption": "text-expand",
      "link": "text-plain",
      "date completed": "date",
      "time spent": "number",
      "quality": "number",
    }}
    fieldInitialValues={{
      "title": "",
      "tags": "",
      "description": "",
      "caption": "",
      "link": "",
      "date completed": new Date().toJSON().slice(0, 10),
      "time spent": "",
      "quality": "",
    }} />
  <CardSet title="Accomplishments" id="accomplishments"
    sorts={[{
      name: "Chronological Order",
      image: timeline,
      alt: "Timeline",
      func: (p1, p2) => (p2["date completed"] > p1["date completed"] ? 1 : -1)
    }, {
      name: "Time Spent",
      image: clock,
      alt: "Clock",
      func: (p1, p2) => p2["time spent"] - p1["time spent"]
    }, {
      name: "Quality",
      image: star,
      alt: "Star",
      func: (p1, p2) => p2["quality"] - p1["quality"]
    }]}
    fieldTypes={{
      "title": "text-plain",
      "tags": "text-plain",
      "description": "text-expand",
      "caption": "text-expand",
      "link": "text-plain",
      "date completed": "date",
      "time spent": "number",
      "quality": "number",
    }}
    fieldInitialValues={{
      "title": "",
      "tags": "",
      "description": "",
      "caption": "",
      "link": "",
      "date completed": new Date().toJSON().slice(0, 10),
      "time spent": "",
      "quality": "",
    }} />
  <Copyright />
  <Navbar />
</>;

const Copyright = () =>
  <div className="font-mono pb-8 bg-[#333333] text-center text-white/50 text-lg">
    Copyright {new Date().getFullYear()} Om Mahesh.
  </div>