import React from 'react'
import { useState } from 'react'
import Home from "./Home"
import Projects from './Projects'
import {Link, Route, Routes} from "react-router-dom"


const Navbar = () => {
  const [darkmode,setDarkmode] = useState(true)
  const toggleDark = () =>{
    setDarkmode(prev => !prev)
  }

 
  return (
    <>
    <div className={darkmode?"dark fixed bottom-0 sm:sticky sm:top-0 w-screen sm:w-[98.9vw] ":"fixed bottom-0 sm:sticky sm:top-0 w-screen sm:w-[98.9vw]"} >
      <div className='flex flex-col bg-white dark:bg-[#111111]'>

        <div className='h-1 bg-gradient-to-r from-[#E39600] via-[#E9517E] via-[#8F48EB] to-[#1DA1F2]'></div>
        <div className='flex py-5 sm:px-8 border-y border-gray-300 dark:border-[#2E2E2E]'>
         <a href='#'><h1 className='hidden sm:flex sm:text-xl font-pacifico dark:text-[#EAEAEA] cursor-pointer'>Vivek Kumar</h1> </a>
         
         <ul className='m-auto gap-3 flex sm:gap-10 font-ibm text-bold leading-6 text-[15px] font-semibold sm:mr-3 dark:text-[#F6F6F6] '>
          <Link to="/" className=' px-3 py-1 sm:py-2 sm:px-5 border-2 border-white hover:border-2 hover:border-black rounded-md dark:hover:bg-[#2E2E2E] dark:border-[#2E2E2E] dark:text-[#b1b1b1] dark:hover:text-[#ffffff]' >Home</Link>
          <Link to="/projects" className='px-3 py-1 sm:py-2 sm:px-5 border-2 border-white hover:border-2 hover:border-black rounded-md dark:hover:bg-[#2E2E2E] dark:border-[#2E2E2E] dark:text-[#b1b1b1] dark:hover:text-[#ffffff]' >Projects</Link>
          <a className='px-3 py-1 sm:py-2 sm:px-5 border-2 border-white hover:border-2 hover:border-black rounded-md dark:hover:bg-[#2E2E2E] dark:border-[#2E2E2E] dark:text-[#b1b1b1] dark:hover:text-[#ffffff]' href='https://drive.google.com/file/d/18dH7wA5J9oHyHGNpeVApSz2EP_runA0S/view?usp=sharing' target='_blank' >Resume</a>
          <li className='px-3 py-1 sm:py-2 sm:px-5 border-2 border-white hover:border-2 hover:border-black rounded-md dark:hover:bg-[#2E2E2E] dark:border-[#2E2E2E] dark:text-[#b1b1b1] dark:hover:text-[#ffffff]' onClick={toggleDark}>{darkmode?"Light":"Dark"}</li>

         </ul>
          </div>

      </div>
    </div>
    <Routes>
      <Route path='/' element={<Home darkmode={darkmode}/>}/>
      <Route path='/projects' element ={<Projects darkmode={darkmode}/>} />
    </Routes>
    {/* <Home darkmode={darkmode}/> */}
    </>
  )


}

export default Navbar