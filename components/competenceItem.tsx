import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import React from 'react'

const CompetenceItem = () => {
  return (
    <BackgroundBeamsWithCollision className="w-full max-w-[80%] mx-auto flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-bold text-purple-700">My Skills</p>
        <p className="text-slate-400 text-sm font-bold">
          &lt;&gt;Competences&lt;/&gt;
        </p>
      </div>

      <div className="w-full h-[400px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center px-4 rounded-lg mb-12">
        <div className="bg-blue-950 w-full h-[80%] p-3 rounded-lg">
            <h1 className="text-center text-xl text-blue-500 font-bold">Web developpment</h1>
        </div>
        {/* <div className="bg-slate-300 w-full h-[80%] p-3 rounded-lg "></div>
        <div className="bg-slate-300 w-full h-[80%] p-3 rounded-lg "></div> */}
      </div>
    </BackgroundBeamsWithCollision>
  )
}

export default CompetenceItem