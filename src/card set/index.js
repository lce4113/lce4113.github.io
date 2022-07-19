import { database } from "../database";
import Form from "../form";
import Card from "./Card";
import Sort from "./Sort";
import { getAuth } from 'firebase/auth';
import { useState, useEffect } from "react";

export default function CardSet({ title, id, sorts, fieldTypes, fieldInitialValues }) {
  const [admin, setAdmin] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [fieldValues, setFieldValues] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    database.getData(title).then(x => {
      setCards([...x].sort(sorts[0].func));
    });
  }, [title, sorts]);
  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged(user => { if (user) setAdmin(true); });
  }, []);

  const addProject = () => {
    setFormOpen(true);
    setEditing(false);
    setFieldValues(fieldInitialValues);
  };

  const editProject = (projectData) => {
    setFormOpen(true);
    setEditing(true);
    setFieldValues(projectData);
  };

  const formOnSubmit = async () => {
    await database.setData(title, { ...fieldValues, clicks: 0, lastClick: 0 });
    window.location.reload();
  };

  const formOnDelete = async cardTitle => {
    if (!window.confirm(`Are you sure you want to delete ${cardTitle}?`)) return;
    await database.deleteData(title, cardTitle);
    window.location.reload();
  };

  const setSort = sortFunc => setCards([...cards].sort(sortFunc));

  return (
    <div id={id} className="flex justify-center items-center w-screen pt-24 pb-60 bg-[#333333]">
      {formOpen && <Form title={title}
        fieldTypes={fieldTypes}
        fieldValues={fieldValues}
        setFieldValues={setFieldValues}
        close={() => setFormOpen(false)}
        onSubmit={formOnSubmit}
        onDelete={editing && formOnDelete} />}
      <div className="w-9/12">
        <div className="w-full mb-12 flex justify-between items-center">
          <h2 className="text-8xl text-white font-black text-shadow">{title}...</h2>
          <Sort sorts={sorts} setSort={setSort} />
        </div>
        <div className="flex flex-wrap">
          {cards.map(project => <Card key={project.title}
            title={title}
            onEdit={() => editProject(project)}
            data={project} />)}
          {admin && <div onClick={addProject} className="w-96 min-h-[172px] my-4 bg-white/0 hover:bg-white/10 flex justify-center items-center cursor-pointer group transition-all duration-300">
            <div className="w-8 h-8 my-8 rounded-full flex justify-center items-center bg-white/50 text-3xl text-[#333333] group group-hover:bg-white/100 transition-all duration-300">+</div>
          </div>}
        </div>
      </div>
    </div>
  );
};