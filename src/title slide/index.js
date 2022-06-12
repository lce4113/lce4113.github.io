import Waves from "./Wave";
import Icon from "./Icon";
import discord from "../assets/discord.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

export default function TitleSlide() {
  return (
    <figure className="flex flex-col w-screen h-screen items-center justify-center">
      <Waves />
      <h1 contentEditable="true" className="text-10xl text-transparent bg-clip-text bg-gradient-to-r from-[#32FFAF] to-[#32AFFF] outline-none">Om Mahesh</h1>
      <div className="flex">
        <Icon src={discord} alt="Discord" link="https://discordapp.com/users/712836610139488346/"></Icon>
        <Icon src={github} alt="Github" link="https://github.com/lce4113/"></Icon>
        <Icon src={gmail} alt="Gmail" link="mailto:2om.mahesh@gmail.com"></Icon>
        <Icon src={instagram} alt="Instagram" link="https://www.instagram.com/lce4113/"></Icon>
        <Icon src={linkedin} alt="LinkedIn" link="https://www.linkedin.com/in/om-mahesh-a76025224/"></Icon>
      </div>
    </figure>
  )
}