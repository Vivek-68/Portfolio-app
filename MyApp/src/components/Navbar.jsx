import React from 'react'
import { useState } from 'react'
import Home from "./Home"
import Projects from './Projects'


const Navbar = () => {
  const [darkmode,setDarkmode] = useState(true)
  const toggleDark = () =>{
    setDarkmode(prev => !prev)
  }

 
  return (
    <>
    <div className={darkmode?"dark":" "}>
      <div className='flex flex-col dark:bg-[#111111]'>

        <div className='h-1 bg-gradient-to-r from-[#E39600] via-[#E9517E] via-[#8F48EB] to-[#1DA1F2]'></div>
        <div className='flex justify-between p-5 border-y border-gray-300 dark:border-[#2E2E2E]'>
         <a href='#'><h1 className='text-xl font-pacifico dark:text-[#EAEAEA] cursor-pointer'>Vivek Kumar</h1> </a>
         <ul className='flex gap-10 font-ibm text-bold leading-6 text-[15px] font-semibold mr-3 dark:text-[#F6F6F6]'>
          <li className='py-2 px-5 border-2 border-white hover:border-2 hover:border-black rounded-md dark:hover:bg-[#2E2E2E] dark:border-[#2E2E2E] dark:text-[#b1b1b1] dark:hover:text-[#ffffff]' >Home</li>
          <li className='py-2 px-5 border-2 border-white hover:border-2 hover:border-black rounded-md dark:hover:bg-[#2E2E2E] dark:border-[#2E2E2E] dark:text-[#b1b1b1] dark:hover:text-[#ffffff]' >Projects</li>
          <a className='py-2 px-5 border-2 border-white hover:border-2 hover:border-black rounded-md dark:hover:bg-[#2E2E2E] dark:border-[#2E2E2E] dark:text-[#b1b1b1] dark:hover:text-[#ffffff]' href='https://drive.google.com/file/d/18dH7wA5J9oHyHGNpeVApSz2EP_runA0S/view?usp=sharing' target='_blank' >Resume</a>
          <li className='py-2 px-5 border-2 border-white hover:border-2 hover:border-black rounded-md dark:hover:bg-[#2E2E2E] dark:border-[#2E2E2E] dark:text-[#b1b1b1] dark:hover:text-[#ffffff]' onClick={toggleDark}>{darkmode?"Light":"Dark"}</li>

         </ul>
          </div>

      </div>
    </div>
    <Home darkmode={darkmode}/>
    </>
  )


}

export default Navbar