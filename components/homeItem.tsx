"use client"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Typewriter from 'typewriter-effect';

const HomeItem = () => {
  return (
    <BackgroundBeamsWithCollision className="w-full max-w-[80%] mx-auto flex flex-col justify-center items-center gap-6 mb-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl"><Typewriter
  options={{
    strings: [
      "Hey, I'm Isaia Mohamed",
      "<>Web Developper</>"
    ],
    autoStart: true,
    loop: true,
  }}
/></h1>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default HomeItem;
