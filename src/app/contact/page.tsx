
export default function Contact() {
  return (
        <div className="w-full h-[300px] mt-2 mb-2 rounded-md max-w-[400px] md:max-w-[80%] mx-auto">
        <form action="" method="POST" className="w-full max-w-[400px] mx-auto md:max-w-[50%] lg:max-w-[40%] md:mx-0 py-2 rounded-lg">
            <div className="mb-4 text-white font-semibold">
                <h1 className="text-2xl ">Contact</h1>
            </div>
            <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="name" className="text-white text-sm font-semibold">Name</label>
                <input
                type="text"
                name="name"
                id="name"
                className="rounded-lg px-3 text-slate-700 text-sm font-semibold focus:outline-none border-4 focus:border-blue-700 py-2 " placeholder="Name" />
            </div>
            <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="email" className="text-white text-sm font-semibold">E-mail</label>
                <input
                type="email"
                name="email"
                id="email"
                className="rounded-lg px-3 text-slate-700 text-sm font-semibold focus:outline-none border-4 focus:border-blue-700 py-2 " placeholder="johndoe@gmail.com" />
            </div>
            <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="name" className="text-white text-sm font-semibold">Message</label>
                <textarea
                name="name"
                id="name"
                placeholder="Text here!"
                className="h-[100px] rounded-lg px-3 text-slate-700 text-sm font-semibold focus:outline-none border-4 focus:border-blue-700 py-2 "></textarea>
            </div>
            <div className="flex flex-col gap-2 mb-6">
                <button type="submit" className="bg-blue-600 py-2 px-5 text-sm text-white rounded font-light w-[100px] hover:bg-blue-700 transition duration-150 ease-in-out active:bg-blue-800">Send</button>
            </div>
        </form>
    </div>
  )
}



