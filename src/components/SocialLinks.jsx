import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

const SocialLinks = () => {
  let resumeLink = "https://drive.google.com/file/d/1rnBHmEPEa7HK_dcnX0bOQ6NbpHRjkQRo/view?usp=share_link";
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn<FaLinkedin size={30}></FaLinkedin>
        </>
      ),
      href: "https://www.linkedin.com/in/pradyuman-shukla/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub<FaGithub size={30}></FaGithub>
        </>
      ),
      href: "https://github.com/Pradyumancoder",
    },
    {
      id: 3,
      child: (
        <>
          Mail<HiOutlineMail size={30}></HiOutlineMail>
        </>
      ),
      href: "mailto:shuklapradyuman786@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume<FiDownload size={30}></FiDownload>
        </>
      ),

      href: resumeLink,
      style: "rounded-br-md",
      download: true,
    },
  ];

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    !loading && (
      <>
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed  ">
          <ul>
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={`flex justify-around items-center w-[9.4rem] h-14 px-4 ml-[-100px] hover:ml-[-8px] hover:rounded-md duration-300 bg-gradient-to-b from-gray-800 to-gray-700  -z-10" ${style}`}
              >
                <a
                  href={href}
                  className="flex justify-between hover:animate-pulse  items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  <>{child}</>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className=" flex w-full border-red-500 ">
        
          {links.map(({ id, child, href, style, download }) => (
            <div
              key={id}
              className={`flex justify-around items-center w-[9.4rem] h-14 px-4 hover:rounded-md duration-300 bg-orange-500 -z-10" ${style}`}
            >
              <a href={href} className="flex justify-between   items-center w-full text-white" download={download} target="_blank" rel="noreferrer">
                <>{child}</>
              </a>
            </div>
          ))}
        
      </div> */}
      </>
    )
  );
};

export default SocialLinks;
