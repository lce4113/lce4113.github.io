import { useEffect, useState } from "react";
import { database } from "../database";
import Card from "./Card";

export default function Projects() {
  let [projects, setProjects] = useState([]);
  useEffect(() => { database.getProjects().then(x => setProjects(x)) }, []);
  return (
    <div id="projects" className="flex justify-center items-center w-screen py-24 bg-[#333333]">
      <div className="w-9/12">
        <h2 className="text-8xl text-white font-black text-shadow mb-8">Projects...</h2>
        <div className="flex flex-wrap">
          {projects.map(project => <Card key={project.title} data={project} />)}
          <div className="w-8 h-8 m-8 rounded-full flex justify-center items-center bg-white/50 text-3xl text-black/75 cursor-pointer group transition-all hover:bg-white/75">+</div>
        </div>
      </div>
    </div>
  );
}