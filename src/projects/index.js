export default function Projects() {
  return (
    <div id="projects" className="flex justify-center items-center w-screen h-screen bg-[#333333]">
      <div className="w-9/12 h-5/6">
        <h2 className="text-8xl text-white font-black text-shadow mb-8">Projects...</h2>
        <div className="flex flex-wrap">
          <Card title="lce4113.github.io" />
          <Card title="lce4113.github.io" />
          <Card title="lce4113.github.io" />
          <Card title="lce4113.github.io" />
          <Card title="lce4113.github.io" />
          <Card title="lce4113.github.io" />
        </div>
      </div>
    </div>
  )
}

function Card(props) {
  return (
    <div className="w-96 my-4 mr-8 px-6 pt-5 pb-16 bg-white/[.15] relative group transition-all duration-300 hover:scale-110">
      <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#32FFAF] to-[#32AFFF] brightness-110
        font-mono font-black transition-all duration-500 group-hover:brightness-100 ">lce4113.github.io</h3>
      <p className="text-white/[.65] transition-all duration-300 group-hover:text-white/[.85] font-mono font-bold mb-2">React • CRA • Firebase</p>
      <p className="text-white">A cool website to show off things I do or have done. Somehow contains a description of itself within itself, which is making writing this description feel kind of confusing.</p>
      <p className="absolute bottom-0 mb-5 text-sm text-white/[.65] transition-all duration-300 group-hover:text-white/[.85] italic">Used this <Link content="Figma" href="https://www.figma.com/file/FgCy9aM7jykMEh4GnmIAgg/?node-id=21%3A44" /> to plan the design and content</p>
    </div>
  );
}

function Link(props) {
  return (
    <a className="text-[#5BDFDF]/75 underline hover:text-[#5BDFDF]" href={props.href}>{props.content}</a>
  );
}