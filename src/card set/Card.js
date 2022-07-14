import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import processString from "react-process-string";
import edit from "../assets/edit.png";
import { database } from "../database";

export default function Card({ title, data, onEdit }) {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged(user => {
      if (user) setAdmin(true);
    });
  }, []);

  let e = false;
  const open = link => {
    if (e) { e = false; return; }
    database.click(title, data.title);
    window.open(link, '_blank');
  };
  const editClick = () => {
    e = true;
    onEdit();
  };

  const process = processString([{
    regex: /\[(.+)\]\((.+)\)/g,
    fn: (key, result) => <Link key={key} content={result[1]} href={result[2]} />
  }]);
  return (
    <div onClick={() => open(data.link)} className="w-96 my-4 mr-8 px-6 pt-5 pb-16 cursor-pointer bg-white/[.15] relative group transition-all duration-300 hover:bg-white/25 hover:scale-105">
      {admin && <Edit editClick={editClick} />}
      <h3 className="inline-block text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#98FFD7] to-[#98D7FF]
        font-mono font-black transition-all duration-500">{data.title}</h3>
      <p className="text-white/[.65] transition-all duration-300 group-hover:text-white/[.85] font-mono font-bold mb-2">{data.tags}</p>
      <p className="text-white">{process(data.description)}</p>
      <p className="absolute bottom-0 mb-5 text-sm text-white/[.65] transition-all duration-300 group-hover:text-white/[.85] italic">
        {process(data.caption)}</p>
    </div>
  );
}

const Edit = ({ editClick }) =>
  <div className="absolute right-2 top-2 p-2 cursor-pointer opacity-50 hover:opacity-[0.85]" onClick={editClick}>
    <img src={edit} alt="Edit" className="w-4" />
  </div>

const Link = ({ href, content }) =>
  <a className="text-[#5BDFDF]/75 underline hover:text-[#5BDFDF]" href={href}>{content}</a>