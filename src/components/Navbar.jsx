import React from 'react'
import logo from "../assets/zilUI_Asset 3 1.png"
import {AiOutlineSearch} from "react-icons/ai"

const Navbar = () => {
  return (
    <header className='w-[1100px] mx-auto flex  mt-5'>
        <img src={logo} alt="logo" className='w-[75px] h-[50px] mr-[70px]'/>
        <select className=' w-[200px] border border-[#BDBDBD] rounded-md font-[500]'>
            <option value="delhi">Delhi, NCR</option>
            <option value="delhi">Delhi, NCR</option>
            <option value="delhi">Delhi, NCR</option>
            <option value="delhi">Delhi, NCR</option>
            <option value="delhi">Delhi, NCR</option>
        </select>
        <div className='flex items-center relative text-xl ml-10'>
            <AiOutlineSearch className='absolute left-2'/>
            <input type="text"placeholder='Search in electrician' className='w-[600px] border border-[#BDBDBD] rounded-md pl-10 p-2 outline-none' />
        </div>
    </header>
  )
}

export default Navbar