import { useState } from 'react';
import Form from '../form';
import { database } from '../database';
import edit from "../assets/edit.png";
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import processString from "react-process-string";

export default function AboutMe() {
  const [formOpen, setFormOpen] = useState(false);
  const [fieldValues, setFieldValues] = useState({ "description": "" });
  const [description, setDescription] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    database.getData("About Me").then(x => {
      setDescription(x[0].description);
      setLastUpdated(x[0].lastUpdated);
    });
  }, []);
  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged(user => { if (user) setAdmin(true); });
  }, []);

  const editClick = () => {
    setFormOpen(true);
    setFieldValues({ "description": description });
  }

  const formOnSubmit = async () => {
    const d = new Date().toLocaleString("default", { dateStyle: 'long' })
    await database.setData("About Me", { title: "data", lastUpdated: d, ...fieldValues });
    window.location.reload();
  };

  const process = processString([{
    regex: /\[([^\]]+)\]\(([^)]+)\)/g,
    fn: (key, result) => <Link key={key} content={result[1]} href={result[2]} />
  }, {
    regex: /\n/g,
    fn: (key) => <br key={key} />
  }, {
    regex: /(•[^\n]+)/g,
    fn: (key, result) => <span key={key} className="text-xl text-white font-bold">{result[1]}</span>
  }]);

  return (
    <div id="about-me" className="flex justify-center items-center w-screen pt-24 pb-60 bg-[#333333]">
      {formOpen && <Form title="About Me"
        fieldTypes={{ "description": "text-expand" }}
        fieldValues={fieldValues}
        setFieldValues={setFieldValues}
        close={() => setFormOpen(false)}
        onSubmit={formOnSubmit} />}
      <div className="w-9/12">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-8xl text-white font-black text-shadow">About Me...</h2>
          <div className="flex items-center">
            <div className="text-white mr-4 text-lg whitespace-nowrap">Last Updated</div>
            <div className="px-4 py-2 text-white bg-[#4B4B4B] rounded-md font-medium text-lg whitespace-nowrap">
              {lastUpdated}
            </div>
          </div>
        </div>
        <div className="relative">
          {admin && <Edit editClick={editClick} />}
          <p className="text-lg text-white/[0.65]">{process(description)}</p>
        </div>
      </div>
    </div>
  );
}

const Edit = ({ editClick }) =>
  <div className="absolute right-0 top-0 p-2 cursor-pointer opacity-50 hover:opacity-[0.85]" onClick={editClick}>
    <img src={edit} alt="Edit" className="w-4" />
  </div>

const Link = ({ href, content }) =>
  <a className="text-[#5BDFDF]/75 underline hover:text-[#5BDFDF]" href={href}>{content}</a>