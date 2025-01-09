import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";
import React from "react";

const AboutItem = () => {
  return (
    <BackgroundBeamsWithCollision className="w-full max-w-[80%] mx-auto flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold text-purple-700">About me</p>
        <p className="text-slate-400 text-sm font-bold">
          &lt;&gt;Introduction&lt;/&gt;
        </p>
      </div>

      <div className="w-full h-[50px] flex justify-center gap-4 mb-12">
        <Link
          href="#contact"
          className="text-xs lg:text-md font-semibold py-4 px-2 lg:px-7 border-2 border-transparent !bg-gradient-to-tl !from-blue-800 !to-purple-800 !rounded-full text-md text-white hover:bg-blue-900 transition duration-150 ease-in-out"
        >
          Contact me
        </Link>
        <a
          href="/resume/Isaia_resume.pdf"
          download
          className="text-xs lg:text-md font-semibold py-4 px-2 lg:px-7 bg-none border-2 border-blue-500 !rounded-full text-md text-white hover:border-purple-900 transition duration-500 ease-in-out"
        >
          Download my resume
        </a>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default AboutItem;
