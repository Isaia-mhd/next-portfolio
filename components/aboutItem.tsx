import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutItem = () => {
  return (
    <BackgroundBeamsWithCollision className="w-full max-w-[80%] mx-auto flex flex-col justify-center items-center gap-6 mb-16">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold text-purple-700">About me</p>
        <p className="text-slate-400 text-sm font-bold">
          &lt;&gt;Introduction&lt;/&gt;
        </p>
      </div>

      <div className="w-full flex justify-between items-start gap-10">
        <div className="w-[40%] h-[400px] rounded-md">
          <Image
            src="/images/pic.jpg"
            alt="my_pic"
            className="w-full h-full rounded-3xl"
            width={500}
            height={300}
          />
        </div>
        <div className="w-full">
          <p className="text-slate-300 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa
            delectus aspernatur! Doloremque sit ipsum facilis! Enim dignissimos
            accusamus quis illo odio tempore eius assumenda sint iste.
            Perspiciatis quos corrupti ipsum accusamus commodi nihil hic, itaque
            quidem enim iste blanditiis earum vel aliquam saepe maxime provident
            non
          </p>
          <p className="text-slate-300 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa
            delectus aspernatur! Doloremque sit ipsum facilis! Enim dignissimos
            accusamus quis illo odio tempore eius assumenda sint iste.
            Perspiciatis quos corrupti ipsum accusamus commodi nihil hic, itaque
            quidem enim iste blanditiis earum vel aliquam saepe maxime provident
            non. Suscipit placeat dolores itaque eum doloribus consequuntur?
            Quos sequi neque perspiciatis deserunt autem molestiae ipsum
            reprehenderit illum cum deleniti sit veritatis ipsam voluptates,
            exercitationem maiores, eveniet ea laborum saepe voluptate! Earum
            accusamus, aperiam enim expedita esse consectetur corrupti suscipit
            at eveniet, sunt cum magni molestias voluptas delectus non molestiae
            nisi ipsam voluptatem sed
          </p>
          <div className="w-full h-[50px] flex justify-start gap-4 mb-12 mt-6">
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
