import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React from "react";

const CompetenceItem = () => {
  const frontSkills = [
    { tech: "HTML", level: "80%" },
    { tech: "CSS", level: "70%" },
    { tech: "JAVASCRIPT", level: "50%" },
    { tech: "REACT JS", level: "60%" },
    { tech: "NEXT JS", level: "40%" },
  ];
  const backSkills = [
    { tech: "PHP", level: "80%" },
    { tech: "LARAVEL", level: "70%" },
    { tech: "FIREBASE", level: "50%" },
    { tech: "PYTHON", level: "50%" },
  ];
  return (
    <BackgroundBeamsWithCollision className="w-full max-w-[80%] mx-auto flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold text-purple-700">My Skills</p>
        <p className="text-slate-400 text-sm font-bold">
          &lt;&gt;Competences&lt;/&gt;
        </p>
      </div>

      <div className="w-full rounded-lg">
        <div className="bg-blue-950 w-full p-3 rounded-lg flex flex-col gap-10 justify-start items-center">
          <h1 className="text-center text-xl text-blue-500 font-bold">
            Web developpment
          </h1>
          <div className="w-full flex justify-around">
            <ul className="w-[400px]">
            <h2 className="text-center text-sm font-semibold">FRONT END</h2>
              {frontSkills.map((skill) => (
                <li className="w-full pb-4" key={skill.tech}>
                  <p className="flex justify-between w-full text-xs font-light">
                    <span> {skill.tech} </span> {skill.level}
                  </p>
                  <div className="w-full bg-slate-100 h-2 !rounded-md">
                    <div
                      className={`!bg-blue-700 h-full`}
                      style={{ width: `${skill.level}` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="w-[400px]">
            <h2 className="text-center text-sm font-semibold">BACK END</h2>
              {backSkills.map((skill) => (
                <li className="w-full pb-4" key={skill.tech}>
                  <p className="flex justify-between w-full text-xs font-light">
                    <span> {skill.tech} </span> {skill.level}
                  </p>
                  <div className="w-full bg-slate-100 h-2 !rounded-md">
                    <div
                      className={`!bg-blue-700 h-full`}
                      style={{ width: `${skill.level}` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default CompetenceItem;
