// import { Text } from '@mantine/core'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";

const HomeItem = () => {
  return (
    <BackgroundBeamsWithCollision className="w-full max-w-[80%] mx-auto flex flex-col justify-center items-center gap-6 mb-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl">Hey, I am </h1>
        <p className="text-white text-4xl font-bold">Isaia Mohamed</p>
        <p className="text-slate-400 text-sm font-bold">
          &lt;&gt;Développeur web&lt;/&gt;
        </p>
      </div>

      {/* <Link
        href="#about"
        className="py-4 px-7 !bg-gradient-to-tl !from-blue-800 !to-purple-800 !rounded-full text-sm text-white hover:bg-blue-900 transition duration-150 ease-in-out mb-12"
      >
        More about me
      </Link>
       */}

{/* <Link
          href="#about"
          className="h-[50px] text-xs lg:text-md font-semibold py-4 px-2 lg:px-7 border-2 border-transparent !bg-gradient-to-tl !from-blue-800 !to-purple-800 !rounded-full text-md text-white hover:bg-blue-900 transition duration-150 ease-in-out mb-12"
        >
          More about me
        </Link> */}
    </BackgroundBeamsWithCollision>
  );
};

export default HomeItem;
