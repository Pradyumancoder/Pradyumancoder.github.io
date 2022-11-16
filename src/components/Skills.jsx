import React, { useEffect, useState } from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import mongo from "../assets/mongo.png";
import chakra from "../assets/chakra.png";
import vscode from "../assets/vscode.png";
import redux from "../assets/redux.png";
import git from "../assets/git.png";

import postman from "../assets/postman.png";
import { FiSettings } from "react-icons/fi";
import useWindowSize from "../hooks/useWindowSize";
import SkeletonTech from "./Skeleton/SkeletonTech";

const Skills = () => {
  const { width } = useWindowSize();

  const skills = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "cSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "javaScript", style: "shadow-yellow-500" },
    { id: 5, src: node, title: "node", style: "shadow-green-400" },
    { id: 4, src: reactImg, title: "React", style: "shadow-blue-600" },
    { id: 13, src: redux, title: "Redux", style: "shadow-purple-600" },

    { id: 6, src: express, title: "expressJs", style: "shadow-gray-500" },

    { id: 8, src: mongo, title: "mongo-DB", style: "shadow-green-500" },
    { id: 9, src: tailwind, title: "tailwind", style: "shadow-sky-400" },
    { id: 10, src: chakra, title: "chakra-UI", style: "shadow-cyan-500" },
    { id: 7, src: github, title: "github", style: "shadow-gray-500" },
    { id: 11, src: git, title: "Git", style: "shadow-orange-500 bg-gray-900" },
    { id: 12, src: vscode, title: "VsCode", style: "shadow-blue-500" },
    { id: 14, src: postman, title: "Postman", style: "shadow-orange-700" },
  ];
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <SkeletonTech></SkeletonTech>
  ) : (
    <div name="skills" className="bg-gradient-to-b from-gray-800 to-black pt-16 w-full h-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline hover:border-blue-500 duration-300">
            <FiSettings className="inline mr-2 mb-2 animate-spin-slow text-blue-400"></FiSettings>
            {width > 412 ? "Technical Skills" : "Tech Skills"}
          </p>
          <p className="py-6 ">Tech stacks am familiar with</p>
        </div>
        {/*For mobile device it will have 2 cols and bigger than mobile it will have 3 col*/}
        <div className="w-full grid grid-cols-3  md:grid-cols-7 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md duration-500 hover:scale-105  py-2 rounded-lg ${style}`}>
              <img src={src} alt="#" className="w-[40%] mx-auto" />

              <p className="mt-4 font-bold capitalize sm:text-[80%] text-[70%]">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
