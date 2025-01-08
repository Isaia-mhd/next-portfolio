import Link from 'next/link'
import React from 'react'

const HomeItem = () => {
  return (
    <div className="w-full h-[300px] mt-2 mb-12 rounded-md max-w-[400px] md:max-w-[80%] mx-auto">
        <div className="w-full max-w-[400px] mx-auto md:max-w-[80%] md:mx-0 md:w-[50%] h-full bg-slate-950 py-2 rounded-lg">
            <h1 className="text-white text-2xl">Hey, I am ANDONIAINA Isaia Mohamed</h1>
            <p className="text-white text-sm mt-6">I am a dedicated and innovative Full-Stack Developer with expertise in building modern web applications using Next.js and Laravel. </p>
            <p className="text-white text-sm mt-6">With a passion for creating seamless digital experiences, I specialize in developing scalable, responsive, and performance-driven solutions for diverse clients and industries.</p>
            <div className="w-full mt-6">
                <Link href="#projects" className="py-2 px-7 bg-gradient-to-tl from-blue-800 to-purple-800 rounded-sm text-sm text-white hover:bg-blue-900 transition duration-150 ease-in-out">Projects</Link>
            </div>
        </div>
    </div>
    
  )
}

export default HomeItem