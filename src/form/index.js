import trash from "../assets/trash.png";
import { useEffect } from "react";
import { FieldText, FieldTextExpand } from "./text";
import { Date } from "./date";
import { Number } from "./number";

export default function Form({ title, fieldTypes, fieldValues, setFieldValues, close, onSubmit, onDelete }) {
  useEffect(() => {
    window.addEventListener('keydown', e => { if (e.key === "Escape") close(); });
    return () => window.removeEventListener('keydown', e => { if (e.key === "Escape") close(); });
  }, [close]);

  const onChange = field => e => setFieldValues({ ...fieldValues, [field]: e.target.value });

  return (
    <div className="z-10 left-0 top-0 w-screen h-screen fixed flex justify-center items-center bg-[#333333]/50 backdrop-blur-sm animate-fadeIn">
      <div className="w-1/2 h-5/6 px-20 pt-8 pb-14 flex flex-col bg-[#444444] border rounded-3xl animate-slideIn">
        {onDelete && <div className="self-end absolute opacity-50 hover:opacity-80 cursor-pointer" onClick={() => onDelete(fieldValues.title)}>
          <img src={trash} alt="Trash" className="w-6 invert" />
        </div>}
        <h3 className="leading-normal text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7DFFAF] to-[#7DAFFF]">{title}</h3>
        <div className="px-4 overflow-auto">
          {Object.entries(fieldTypes).map(([name, type]) => {
            switch (type) {
              default:
                return <FieldText name={name.toUpperCase()} key={name}
                  value={fieldValues[name]}
                  onChange={onChange(name)} />;
              case "text-expand":
                return <FieldTextExpand name={name.toUpperCase()} key={name}
                  value={fieldValues[name]}
                  onChange={onChange(name)} />;
              case "date":
                return <Date name={name.toUpperCase()} key={name}
                  value={fieldValues[name]}
                  onChange={onChange(name)} />;
              case "number":
                return <Number name={name.toUpperCase()} key={name}
                  value={fieldValues[name]}
                  onChange={onChange(name)} />;
            }
          })}
        </div>
        <Submit onSubmit={onSubmit} />
      </div>
    </div>
  );
}

const Submit = ({ onSubmit }) =>
  <button
    className="px-2 py-1 mt-6 self-end cursor-pointer rounded-md text-right text-xl font-black text-white bg-gradient-to-r from-[#329664] to-[#3296B9] brightness-90 hover:brightness-100"
    onClick={onSubmit}>Save</button>;
