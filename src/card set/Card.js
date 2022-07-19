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
    regex: /\n/g,
    fn: (key) => <br key={key} />
  }, {
    regex: /\[([^\]]+)\]\(([^)]+)\)/g,
    fn: (key, result) => <Link key={key} content={result[1]} href={result[2]} onClick={() => e = true} />
  }, {
    regex: /{([^}]+)}\(([^)]+)\)/g,
    fn: (key, result) => <span key={key} className="font-bold" style={{ color: result[2] }}>{result[1]}</span>
  }]);
  return (
    <div onClick={() => open(data.link)} className="relative w-96 my-4 mr-8 px-6 py-6 cursor-pointer bg-white/[.15] flex flex-col transition-all duration-300 hover:bg-white/25 hover:scale-105">
      {admin && <Edit editClick={editClick} />}
      <h3 className="inline-block text-2xl leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#98FFD7] to-[#98D7FF]
        font-mono font-black transition-all duration-500">{data.title}</h3>
      <p className="text-white/[.65] transition-all duration-300 font-mono font-bold mb-2">{data.tags}</p>
      <p className="text-white mb-5">{process(data.description)}</p>
      <div className="flex-grow flex items-end">
        <p className="bottom-0 text-sm text-white/[.65] transition-all duration-300 italic">
          {process(data.caption)}</p>
      </div>
    </div>
  );
}

const Edit = ({ editClick }) =>
  <div className="absolute right-2 top-2 p-2 cursor-pointer opacity-50 hover:opacity-[0.85]" onClick={editClick}>
    <img src={edit} alt="Edit" className="w-4" />
  </div>

const Link = ({ href, content, onClick }) =>
  <a className="text-[#5BDFDF]/75 underline hover:text-[#5BDFDF]" href={href} onClick={onClick}>{content}</a>