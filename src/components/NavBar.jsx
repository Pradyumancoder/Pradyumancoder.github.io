import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";
import { Link } from "react-scroll";
import { TfiUser } from "react-icons/tfi";
import { AiFillHome } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import { MdContactMail, MdOutlineMail } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { SiGroupon } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import SkeletonNavabar from "./Skeleton/SkeletonNavabar";
import contact from "../assets/img/contact.png";
import edit from "../assets/img/edit.png";
import inbox from "../assets/img/envelope.png";
import settings from "../assets/img/settings.png";
import help from "../assets/img/question.png";
import logout from "../assets/img/log-out.png";
import DropDown from "./DropDown";
import { FiSend } from "react-icons/fi";
import useWindowSize from "../hooks/useWindowSize";

const links = [
  {
    id: 1,
    link: "home",
    icon: <AiFillHome size={30} className="animate-wiggle  hover:text-green-400"></AiFillHome>,
    css: "text-blue-500 scale-125 duration-300",
  },
  {
    id: 2,
    link: "about",
    icon: <TfiUser size={30} className="animate-pulse  hover:text-green-400"></TfiUser>,
    css: "text-blue-500  scale-125 duration-300",
  },
  {
    id: 3,
    link: "projects",
    icon: <TbBrandReactNative size={30} className="animate-spin-slow  hover:text-green-400"></TbBrandReactNative>,
    css: "text-blue-500  scale-125 duration-300",
  },
  {
    id: 4,
    link: "skills",
    icon: <AiFillSetting size={30} className="animate-reverse-spin  hover:text-green-400"></AiFillSetting>,
    css: "text-blue-500  scale-125 duration-300",
  },
  {
    id: 5,
    link: "contact",
    icon: <MdContactMail size={30} className="animate-wiggle  hover:text-green-400"></MdContactMail>,
    css: "text-blue-500  scale-125 duration-300",
  },
];
const NavBar = () => {
  const [open, setOpen] = useState(false);

  const [download, setDownload] = useState(false);
  const [nav, setNav] = React.useState(false);
  const pdf = "/Pradyuman-shukla-Resume.pdf";
  let resumeLink = "https://drive.google.com/file/d/1rnBHmEPEa7HK_dcnX0bOQ6NbpHRjkQRo/view?usp=share_link";

  const [scorll, setScroll] = useState(0);

  const [place, setPlace] = useState("");

  /*
  Home - 0
  About - 615
  Projects - 1200
  Tech Skills - 2400
  Contact - 4100

  */

  useEffect(() => {
    const handleScroll = (event) => {
      let val = Math.round(window.scrollY);
      setScroll(Math.round(window.scrollY));

      if (val >= 0 && val < 380) {
        setPlace("home");
      } else if (val > 380 && val < 820) {
        setPlace("about");
      } else if (val > 820 && val < 2100) {
        setPlace("projects");
      } else if (val > 2100 && val < 3900) {
        setPlace("skills");
      } else if (val > 3900) {
        setPlace("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let menuRef = useRef();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNav(false);
        setOpen(false);
        // console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      document.removeEventListener("mousedown", handler);
      clearTimeout(timer);
    };
  }, [menuRef]);

  return loading ? (
    <SkeletonNavabar></SkeletonNavabar>
  ) : (
    <div ref={menuRef} className="flex justify-between items-center w-full h-16  text-white bg-gray-900  px-4  fixed z-10">
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {scorll > 150 ? <TfiUser className="animate-pulse" size={30}></TfiUser> : <SiGroupon className="animate-spin-slow" size={30}></SiGroupon>}
        <h1 className="text-2xl font-title ml-2 hover:scale-105 hover:text-blue-400 duration-200">{scorll > 150 ? "Pradyuman" : "Portfolio"}</h1>
      </div>
      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <h3>Contact Details</h3>
        <ul>
          <DropDown img={<MdOutlineMail></MdOutlineMail>} text={"shuklapradyuman786@gmail.com"} />
          {/* <DropDown img={<CiMobile3></CiMobile3>} text={"+91 9145298087"} /> */}
          <Link to={"contact"} smooth duration={500}>
            <button
              type="submit"
              className="text-white group bg-gradient-to-b from-cyan-500 to to-blue-500 px-4 py-1 my-4 mx-auto flex gap-2  items-center rounded-md hover:scale-110 duration-300"
            >
              Send Message
              <span className="group-hover:rotate-45 duration-300">
                <FiSend className="animate-wigglelow"></FiSend>
              </span>
            </button>
          </Link>
        </ul>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, css }) => (
          <li
            key={id}
            className={`${
              place === link ? css : ""
            } px-4 font-title cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 hover:text-purple-400 duration-200  `}
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <li className="px-4 font-title cursor-pointer capitalize font-medium text-gray-200 hover:text-purple-400 duration-200  ">
          <p className="flex items-center gap-2">
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              {download ? "Download" : "Resume"}
            </a>

            <a href={resumeLink} download target="_blank" rel="noreferrer">
              <RiDownload2Fill
                onMouseEnter={() => setDownload(true)}
                onMouseLeave={() => setDownload(false)}
                className="w-6 text-2xl hover:scale-110 hover:text-green-400 duration-200 "
              ></RiDownload2Fill>
            </a>
          </p>
        </li>
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center absolute top-0 right-0 w-60 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200">
          {links.map(({ id, link, icon }) => (
            <li key={id} className="px-4 font-title font-medium cursor-pointer capitalize py-6">
              <Link className="flex items-center justify-start gap-4" onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {icon}
                <p className=" hover:text-blue-500">{link}</p>
              </Link>
            </li>
          ))}
          <li className="px-4 font-title cursor-pointer capitalize font-medium text-gray-200 py-2 ">
            <p className="flex items-center justify-start  gap-4">
              <a href={resumeLink} download target="_blank" rel="noreferrer">
                <RiDownload2Fill
                  size={35}
                  onMouseEnter={() => setDownload(true)}
                  onMouseLeave={() => setDownload(false)}
                  className=" hover:scale-105 hover:text-green-400 duration-200 animate-bounce"
                ></RiDownload2Fill>
              </a>
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                {download ? "Download" : "Resume"}
              </a>
            </p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
