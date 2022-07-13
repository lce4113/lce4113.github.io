import Waves from "./Wave";
import discord from "../assets/discord.png";
import github from "../assets/github.png";
import email from "../assets/email.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

export default function TitleSlide() {
  return (
    <figure className="flex flex-col w-screen h-screen items-center justify-center">
      <Waves />
      <h1 contentEditable="true"
        suppressContentEditableWarning="true"
        className="leading-tight text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#32FFAF] to-[#32AFFF] outline-none">
        Om Mahesh
      </h1>
      <div className="flex items-center">
        <Icon src={discord} alt="Discord" link="https://discordapp.com/users/712836610139488346/"></Icon> <Dot />
        <Icon src={github} alt="Github" link="https://github.com/lce4113/"></Icon> <Dot />
        <Icon src={email} alt="Email" link="mailto:2om.mahesh@gmail.com"></Icon> <Dot />
        <Icon src={instagram} alt="Instagram" link="https://www.instagram.com/lce4113/"></Icon> <Dot />
        <Icon src={linkedin} alt="LinkedIn" link="https://www.linkedin.com/in/om-mahesh-a76025224/"></Icon>
      </div>
    </figure>
  )
}

const Icon = ({ link, src, alt }) =>
  <a className="group relative w-16 h-16" href={link} target="_blank" rel="noopener noreferrer">
    <div className="flex justify-center items-center absolute w-[3.8rem] h-[3.8rem] rounded-xl bg-white transition-transform group-hover:scale-125">
      <img
        className="absolute w-14 rounded-xl transition-transform group-hover:scale-90"
        src={src} alt={alt} />
    </div>
  </a>

const Dot = () =>
  <div className="w-3 h-3 rounded-full bg-white/80 mx-4" />