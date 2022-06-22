export default function Card(props) {
  // props.data.caption.replace(/a/g, "");
  return (
    <a target="_blank" rel="noreferrer" href={props.data.link} className="w-96 my-4 mr-8 px-6 pt-5 pb-16 bg-white/[.15] relative group transition-all duration-300 hover:scale-110">
      <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#32FFAF] to-[#32AFFF] brightness-110
        font-mono font-black transition-all duration-500 group-hover:brightness-100 ">{props.data.title}</h3>
      <p className="text-white/[.65] transition-all duration-300 group-hover:text-white/[.85] font-mono font-bold mb-2">{props.data.tags}</p>
      <p className="text-white">{props.data.description}</p>
      <p className="absolute bottom-0 mb-5 text-sm text-white/[.65] transition-all duration-300 group-hover:text-white/[.85] italic">{props.data.caption}</p>
    </a>
  );
}

function Link(props) {
  return (
    <a className="text-[#5BDFDF]/75 underline hover:text-[#5BDFDF]" href={props.href}>{props.content}</a>
  );
}