import React, { useEffect, useState } from "react";
import aboutMe from "../assets/techskils.png";

import { FaUser } from "react-icons/fa";
import SkeletonHome from "./Skeleton/SkeletonHome";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import SkeletonAbout from "./Skeleton/SkeletonAbout";
const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <SkeletonAbout></SkeletonAbout>
  ) : (
    <div
      name="about"
      className="px-10 md:flex md:pt-20  flex-cols items-center justify-center w-[100%] mx-auto h-full bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center  h-full px-4 md:flex-row mb-10">
        {/* <div className="h-full w-[60%]  flex justify-center items-center "> */}

        <img className=" rounded-full  mx-auto mb-2 w-[38%]  md:w-[50%]" src={aboutMe} alt="/"></img>
      </div>

      <div className=" mx-auto flex flex-col justify-center w-[100%] md:w-[70%] h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:border-blue-500 duration-300 ">
            {" "}
            <FaUser className="inline mb-2 mr-2 animate-bounce text-blue-400"></FaUser>About Me
          </p>
        </div>
        <p className="text-[1.2rem] mt-0 lg:mr-[10rem] text-justify">
          I'm an enthusiastic Full-Stack Web Developer with a passion for developing scalable web applications and working across the full stack.
          Adaptive to all kinds of people and surroundings and always appreciate constructive criticism to improve my performance. A highly
          self-motivated person with effective problem handling skills.
        </p>
        <br></br>

        <p className="text-[1.2rem] text-justify lg:mr-[10rem]">
          I want to work in a dynamic organisation that offers opportunities to enhance my technical skills and knowledge. I hope to work in an
          organisation that trusts in me, gives me challenges and helps me to grow and develop alongside the organisation.
       
        </p>
        <br></br>
       
      </div>
    </div>
  );
};

export default About;
