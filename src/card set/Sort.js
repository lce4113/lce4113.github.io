import { useState } from "react";
import arrow from "../assets/arrow.png";

export default function Sort({ sorts, setSort }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex items-center">
      <div className="text-white mr-4 text-lg whitespace-nowrap">Sort By</div>
      <div className="relative cursor-pointer select-none">
        <div className="px-4 py-2 text-white bg-[#4B4B4B] rounded-md font-medium text-lg whitespace-nowrap flex items-center justify-between" onClick={() => setOpen(!open)}>
          {sorts[selected].name} <img src={arrow} alt="Arrow" className={"inline-block ml-3 w-3" + (open ? " animate-rotate rotate-180" : "")} />
        </div>
        {open && <ul className="z-10 absolute mt-2 text-white bg-[#4B4B4B] rounded-md border border-black overflow-hidden animate-dropdown">
          {sorts.map((sort, i) => {
            return <li key={i} onClick={() => { setSelected(i); setOpen(false); setSort(sort.func); }}
              className={"px-4 py-3 whitespace-nowrap hover:bg-white/[0.075] flex items-center" + (i === sorts.length - 1 ? "" : " border-b border-black") + (i === selected ? " bg-white/[0.075]" : "")}>
              <div className="w-6 h-4 mr-2 flex justify-center items-center">
                <img src={sort.image} alt={sort.alt} className="inline-block max-w-full max-h-full" />
              </div>
              {sort.name}
            </li>;
          })}
        </ul>}
      </div >
    </div >
  );
}