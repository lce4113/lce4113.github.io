export default function Navbar() {
  return (
    <nav className="fixed top-0 w-screen bg-black/25 py-2 hover:bg-black/50">
      <ul className="flex items-center">
        <li className="mx-4">
          <a href="."
            className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#32FFAF] to-[#32AFFF]">
            OM
          </a>
        </li>
        <Link content="About Me" />
        <Link content="Projects" />
        <Link content="Accomplishments" />
      </ul>
    </nav>
  );
}

function Link(props) {
  return (
    <li className="mx-6">
      <a href="." className="">
        <pre className="text-white text-2xl hover:underline">{props.content}</pre>
      </a>
    </li>
  );
}