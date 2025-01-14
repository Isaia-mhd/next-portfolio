"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React, { useState } from "react";

const ProjectItem = () => {
  const [isActive, setIsActive] = useState(false);
  const projects = [
    {
      name: "Xinda",
      description: "Xinda is a project collaborated with my brother",
      slug: "Xinda is a Wood treatment company",
      tech: "Next Js",
      status: "Collaboration",
      imgUrl: "url('/images/xinda.png')",
      url: "https://xinda.mg/"
    },
    {
      name: "Realtor Clone",
      description: "Realtor Clone is my practice project while I'm learning React Js",
      slug: "Bk is a...",
      tech: "React Js / Firebase",
      status: "Personal",
      imgUrl: "url('/images/realtor.png')",
      url: "https://isaia-realtor-clone.vercel.app/"
    },
    {
      name: "E-Commerce",
      description: "This project is in the process of building",
      slug: "E-comm is a...",
      tech: "Blade / Laravel",
      status: "Personal",
      imgUrl: "url('/images/ecommerce.png')",
      url: ""
    },
  ];

  return (
    <BackgroundBeamsWithCollision className="w-full max-w-[80%] mx-auto flex flex-col justify-center items-center gap-6">

      <div id="project" className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold text-purple-700 pt-[60px] ">My Portfolio</p>
        <p className="text-slate-400 text-sm font-bold">
          &lt;&gt;All projects&lt;/&gt;
        </p>
        {/* <InfiniteMovingCardsDemo /> */}
      </div>

      <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center px-4 rounded-lg">
        {projects.map((project) => (
          <div className="border-2 w-full h-[400px] p-3 rounded-lg " key={project.name}>
            <div
              className="w-full h-[70%] rounded-md"
              style={{
                backgroundImage: project.imgUrl,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="w-full h-[20%] pt-3">
              <div className="w-full flex justify-between items-center">
                  <h1 className="text-xl text-blue-700 font-semibold"><a className="hover:underline" href={project.url} target="_blank">{project.name}</a></h1>
                  <p className="text-xs text-blue-700 font-bold">{project.tech}</p>
              </div>
              <p className={`ext-sm font-light text-slate-200 pt-3 ${!isActive && "truncate"}`}> {project.description} </p>
              <button onClick={()=> setIsActive(!isActive)} className="text-blue-700 underline font-semibold text-sm">{isActive ? "See less" : "See more"}</button>
    
            </div>
          </div>
        ))}
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default ProjectItem;
