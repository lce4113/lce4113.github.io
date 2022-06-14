import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    document.onscroll = () => {
      if (window.scrollY > 150) {
        document.querySelector("nav").classList.add("navbar-scrolled");
      } else {
        document.querySelector("nav").classList.remove("navbar-scrolled");
      }
    };
  });

  return (
    <nav className="transition-all fixed top-0 w-screen bg-black/25 py-2 hover:bg-black/50">
      <ul className="flex items-center">
        <li>
          <a id="OM" href="."
            className="transition-all mx-4 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#32FFAF] to-[#32AFFF]">
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
        <pre className="transition-all mx-6 text-white text-2xl hover:underline">{props.content}</pre>
      </a>
    </li>
  );
}