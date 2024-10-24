import Link from "next/link"
import { Items } from "./navitems"
const Navbar = () => {
  return (
    <div className="relative flex left-[10%] top-[30px]">
      
      

  
      <div className="relative flex items-center text-white font-bold gap-[40px]">
        <h1 className="font-bold text-white text-2xl">Sasti DUKAN</h1>
      {Items.map((item)=> (
        <Link href={item.Link} key={item.id} className="hover:text-slate-400">
          {item.title}
        </Link>
      ))}
      </div>

      <div className="relative left-[40%] flex gap-[20px]">
        <button className="text-white font-bold p-2 rounded-sm hover:text-blue-500 transition duration-200 hover:underline hover:border-blue-500 ">Login</button>
        <button className="bg-blue-500 text-white font-extrabold p-2 rounded-sm hover:bg-blue-600 uppercase">join us</button>
      </div>

    </div>
  )
}

export default Navbar
