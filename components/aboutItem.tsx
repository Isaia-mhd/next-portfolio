import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutItem = () => {
  const currentYear = new Date().getFullYear();
  return (
    <BackgroundBeamsWithCollision className="w-full max-w-[80%] mx-auto flex flex-col justify-center items-center gap-6 mb-16">

      <div className="w-full flex flex-col justify-center items-center  lg:flex-row lg:justify-between lg:items-start lg:gap-10">
        <div className="w-[250px] h-[300px] lg:w-[480px] lg:h-[350px] rounded-md">
          <Image
            src="/images/piic.jpg"
            alt="my_pic"
            className="w-full h-full rounded-3xl"
            width={500}
            height={300}
          />
        </div>
        {/* TEXT DESCRIPTIVE */}
        <div className="w-full pt-[30px] lg:pt-0 text-center lg:text-start ">
        <p className="text-4xl font-bold text-purple-700">About me</p>
        <p className="text-slate-400 text-sm font-bold mb-3">
          &lt;&gt;Introduction&lt;/&gt;
        </p>
          <p className="text-slate-300 text-sm">
            {`Hello, I'm Andoniaina Isaia Mohamed, a web developer. I'm ${
              currentYear - 2003
            } years old and a Computer Science student at ENI (École Nationale d'Informatique) in Fianarantsoa, Madagascar, where I have been studying since 2024.Before joining ENI, I completed a five-month web development training program at Gasy Tech in Antananarivo in 2023. This training provided me with foundational knowledge in web development, including HTML5, CSS3, JavaScript, and PHP. Now, specializing in Laravel and React.js, I focus on building scalable web applications with robust back-end systems and dynamic, user-friendly interfaces. Committed to clean code and impactful solutions, I deliver high-performance results that emphasize functionality and user experience.`}
          </p>

          {/* BOUTTON de CV et CONTACT */}
          <div className="w-full h-[50px] mx-auto flex justify-center lg:justify-start gap-4 mb-12 mt-6">
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
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default AboutItem;
