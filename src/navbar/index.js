import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    document.onscroll = () => {
      if (window.scrollY > 200) {
        document.querySelector("nav").classList.add("navbar-scrolled");
      } else {
        document.querySelector("nav").classList.remove("navbar-scrolled");
      }
    };
  });

  return (
    <nav className="transition-all duration-300 fixed top-0 w-screen bg-black/25 backdrop-blur-sm py-2 hover:bg-black/50">
      <ul className="flex items-center">
        <li>
          <a id="OM" href="."
            className="transition-all duration-300 mx-4 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#32FFAF] to-[#32AFFF]">
            OM
          </a>
        </li>
        <Link content="About Me" href="#about-me" />
        <Link content="Projects" href="#projects" />
        <Link content="Accomplishments" href="#accomplishments" />
      </ul>
    </nav>
  );
}

function Link(props) {
  return (
    <li>
      <a href={props.href} className="">
        <pre className="transition-all duration-300 mx-6 text-white text-2xl hover:underline">{props.content}</pre>
      </a>
    </li>
  );
}