import React, { useEffect, useState } from "react";
import ProPic from "../assets/Gowtham-Chokkalinga-fw20_0116.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { FiExternalLink, FiSend } from "react-icons/fi";
import { MdWavingHand } from "react-icons/md";
import Typed from "react-typed";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import SkeletonHome from "./Skeleton/SkeletonHome";

const Home = () => {
  let resumeLink = "https://drive.google.com/file/d/1rnBHmEPEa7HK_dcnX0bOQ6NbpHRjkQRo/view?usp=share_link";

  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={40}></FaLinkedin>
        </>
      ),
      href: "https://www.linkedin.com/in/pradyuman-shukla/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={40}></FaGithub>
        </>
      ),
      href: "https://github.com/Pradyumancoder",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={40}></HiOutlineMail>
        </>
      ),
      href: "mailto:shuklapradyuman786@gmail.com",
    },
  ];
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  return loading ? (
    <SkeletonHome></SkeletonHome>
  ) : (
    <div name="home" className="md:h-screen h-max w-full  bg-gradient-to-b from-black via-black to-gray-800 pt-2">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-between gap-4  h-full px-4 md:flex-row  ">
        <div className="flex flex-col md:justify-center items-center md:items-start justify-start h-full ml-4">
          <h2 className="text-[1.4rem] text-center sm:text-[2rem] flex-col gap-2 font-bold text-white md:mt-12">
            <span className="flex gap-2">
              Hi<MdWavingHand className="animate-wigglehi text-blue-700"></MdWavingHand>I'm Pradyuman
            </span>
          </h2>
          <span className="text-blue-700 text-[1.4rem] sm:text-[1.8rem] font-bold">
            <Typed strings={["Full-Stack Web-Developer", "MERN Stack-Developer"]} typeSpeed={100} backSpeed={50} loop></Typed>
          </span>
          <p className="text-gray-200 text-[1.2rem] py-4 max-w-md text-justify">
            A passionate Full Stack Software Developer having an experience of building Web applications with HTML, CSS, JavaScript, Reactjs, Nodejs,
            MongoDb and some other cool libraries and frameworks.
            {/* A passionate full-stack web developer, who loves to buid cool projects and work in a team. I want to achieve global recognition and
            exposure with my skillset, toolset and mindset. */}
            {/* 
            A passionate aspiring Full Stack Developer skilled in MERN stack. Actively ready to join in a great lively team in a good start-up environment and give my best


            Full-Stack Developer, Dedicated to developing robust applications that interact with the Front & Backend part of web applications.
            Extensive expertise in website architecture, design, and web design, and web API designs. Problem-solving mindset with a goal to optimize
            my application for better stability and speed. Love to work in a team. */}
            
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-800 to-blue-500 cursor-pointer"
            >
              My Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight className="ml-1" size={30}></MdKeyboardArrowRight>
              </span>
            </Link>
          </div>

          <div className="flex  justify-center md:justify-start  lg:hidden  text-white gap-6 items-center w-[80%] h-[6rem] mt-4 ">
            {links.map((link) => (
              <a key={link.id} href={link.href} className="flex flex-col justify-center items-center text-[2rem] hover:scale-125 duration-300">
                {link.child}
              </a>
            ))}
          </div>
        </div>

        <div className="md:hidden  w-[40%] mt-24 md:mt-0">
         
              <img className="  rounded-full mx-auto w-[70%] md:w-[60%]" src={ProPic} alt="/"></img>
        </div>

        <div className="box w-[40%] hidden  md:block">
          <div className="content">
          
                <img className="pic mx-auto  w-[50%] md:w-[50%]" src={ProPic} alt="/"></img>
                <h2 className="text-4xl">
                  Pradyuman<br></br>
                  <span> Full-Stack Web-Developer</span>
                </h2>
                <a className="flex justify-between items-center gap-2" href={resumeLink} target="_blank" rel="noopener noreferrer">
                  Resume <FiExternalLink></FiExternalLink>
                </a>
              
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
