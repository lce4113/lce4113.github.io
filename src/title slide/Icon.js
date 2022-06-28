export default function Icon(props) {
  return <a className="group relative w-16 h-16" href={props.link} target="_blank" rel="noopener noreferrer">
    <div className="flex justify-center items-center absolute w-[3.8rem] h-[3.8rem] rounded-xl bg-white transition-transform group-hover:scale-125">
      <img
        className="absolute w-14 rounded-xl transition-transform group-hover:scale-90"
        src={props.src} alt={props.alt} />
    </div>
  </a>
}