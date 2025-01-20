import Link from "next/link"
const Footer = () => {
  return (
    <div className="w-full max-w-[400px] md:max-w-[80%] mx-auto py-4 flex flex-col justify-center items-center">
        <div className="w-full">
            <h1 className="text-2xl text-purple-700 font-semibold">Link</h1>
            <ul className="text-sm space-y-3">
                
                <li className="">Phone: +261 32 90 707 29 / +261 38 15 956 69</li>
                <li className="">E-mail: <Link className="text-blue-500 underline" href="mailto:mohamedesaie21@gmail.com" target="_blank">mohamedesaie21@gmail.com</Link></li>
                <li className="">Whatsapp: <Link className="text-blue-500 underline" href="https://wa.me/261329070729" target="_blank">+261 32 90 707 29</Link></li>
                <li className="">Git hub: <Link className="text-blue-500 underline" href="https://github.com/Isaia-mhd" target="_blank">Isaia-mhd</Link></li>
                <li className="">Facebook: <Link className="text-blue-500 underline" href="https://web.facebook.com/profile.php?id=100081652459212" target="_blank">MUHHAMED RZ</Link></li>

            </ul>

        </div>
        
        <p className="text-sm text-gray-600">copyright <span>&copy;</span> {new Date().getFullYear()} - Isaia Mohamed </p>
    </div>
  )
}

export default Footer