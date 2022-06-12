export default function Icon(props) {
  return <a href={props.link} target="_blank" rel="noopener noreferrer">
    <div className="w-16 bg-white mx-2" />
    <img
      className="w-14 rounded-xl transition-transform hover:scale-125"
      src={props.src} alt={props.alt} />;
  </a>
}