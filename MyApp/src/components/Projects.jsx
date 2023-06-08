import React from 'react'
import doit from './../assets/doit.jpg'
import weatherwatch from './../assets/weatherwatch.jpg'
import portfolio from './../assets/portfolio-old.jpg'
import {FiExternalLink} from 'react-icons/fi'

const Projects = (props) => {
  return (
    <div className={props.darkmode?"dark":" "}>
    <div className='mb-12 sm:mb-0 p-6 sm:p-12 dark:bg-[#111111]'>
        <div className='flex flex-col'>
            <div className='sm:ml-[20%] text-[25px] font-ibm text-bold sm:text-6xl dark:text-[#EAEAEA]'>
                <h1>Projects</h1>
            </div>
            <div className='text-[1rem] mt-3 sm:ml-[20%] font-ibm sm:text-xl sm:max-w-[60%] sm:mt-12 text-gray-600 dark:text-[#ABABAB]'>
                <p className='mb-6 sm:mb-12'>Here are some of the projects that I have developed.</p>
</div>
<div className='m-auto my-1 hidden sm:flex tracking-[-4px] text-[24px] font-ibm text-gray-300'>∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿</div>
<div className=' sm:my-8 sm:mt-11 sm:flex sm:my-16 tracking-[-4px] sm:hidden text-[24px] font-ibm text-gray-300'>∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿</div>

<div className='flex flex-col sm:max-w-[60%] sm:m-auto sm:mt-12'>
   <img className='rounded-md my-4 mt-10 sm:my-12'  src={doit} />
   <h2 className='font-ibm text-[1.25rem] sm:text-3xl text-black dark:text-[#EAEAEA] sm:p-3 sm:px-16 my-2 sm:my-4 mt-0'>Do.It.</h2>
   <p className='font-ibm sm:text-0.5xl text-gray-600 dark:text-[#ABABAB]  sm:px-16 sm:mb-8 mb-3'>A task management application that allows the user to create todos to keep track of daily tasks. Also allows the user to delete as well as mark todos as completed.</p>
   <p className='font-ibm sm:text-0.5xl text-gray-600 dark:text-[#ABABAB]  sm:px-16 sm:mb-6'>Built using vanilla javascript, the app uses javascript's local storage api to store the created todos.</p>
   <div className='flex mb-8'>
   <a href='https://vivek-68.github.io/DO.IT./' target='_blank' className='p-1 px-2 mr-6 my-3 font-ibm sm:text-0.5xl text-gray-600 dark:text-[#D9D9D9] flex sm:p-4 sm:py-2 sm:max-w-[15%] sm:mx-16 rounded-full justify-center gap-2 items-center border-2  hover:bg-gray-200 cursor-pointer dark:border-[#2E2E2E] dark:hover:bg-[#2E2E2E] dark:text-[#DBDBDB] dark:bg-[#242424]'> Do.It. <FiExternalLink /></a>
   <a href='https://github.com/Vivek-68/DO.IT.' target='_blank' className='p-1 px-2 my-3 font-ibm sm:text-0.5xl text-gray-600 dark:text-[#D9D9D9] flex sm:p-4 sm:py-2 sm:max-w-[15%] sm:mx-16 rounded-full justify-center gap-2 items-center border-2  hover:bg-gray-200 cursor-pointer dark:border-[#2E2E2E] dark:hover:bg-[#2E2E2E] dark:text-[#DBDBDB] dark:bg-[#242424]'> Github <FiExternalLink /></a>
   </div>


   <img  className='rounded-md my-4 mt-10 sm:my-12' src={weatherwatch} />
   <h2 className='font-ibm text-[1.25rem] sm:text-3xl text-black dark:text-[#EAEAEA] sm:p-3 sm:px-16 my-2 sm:my-4 mt-0'>WeatherWatch</h2>
   <p className='font-ibm sm:text-0.5xl text-gray-600 dark:text-[#ABABAB]  sm:px-16 sm:mb-8 mb-3'>A weather application to get the current weather conditions of all major cities at any point of time. </p>
   <p className='font-ibm sm:text-0.5xl text-gray-600 dark:text-[#ABABAB]  sm:px-16 sm:mb-8'>The app recieves the weather data via api calls using a free weather api. It displays the min, max, average temperature and the general weather condition of the desired place.</p>
   <div className='flex mb-8'>
   <a href='https://vivek-68.github.io/weatherwatch/' target='_blank' className='p-1 px-2 mr-6 my-3 font-ibm sm:text-0.5xl text-gray-600 dark:text-[#D9D9D9] flex sm:p-4 sm:py-2 sm:max-w-[30%] sm:mx-16 rounded-full justify-center gap-2 items-center border-2  hover:bg-gray-200 cursor-pointer dark:border-[#2E2E2E] dark:hover:bg-[#2E2E2E] dark:text-[#DBDBDB] dark:bg-[#242424] sm:p-0 sm:py-0 sm:px-4'> WeatherWatch <FiExternalLink /></a>
   <a href='https://github.com/Vivek-68/weatherwatch' target='_blank' className='p-1 px-2 my-3 font-ibm sm:text-0.5xl text-gray-600 dark:text-[#D9D9D9] flex sm:p-4 sm:py-2 sm:max-w-[15%] sm:mx-16 rounded-full justify-center gap-2 items-center border-2  hover:bg-gray-200 cursor-pointer dark:border-[#2E2E2E] dark:hover:bg-[#2E2E2E] dark:text-[#DBDBDB] dark:bg-[#242424]'> Github <FiExternalLink /></a>
   </div>


   <img  className='rounded-md my-12 sm:mb-6 mb-4' src={portfolio} />
   <h2 className='font-ibm text-[1.25rem] sm:text-3xl text-black dark:text-[#EAEAEA] sm:p-3 sm:px-16 my-2 sm:my-4 mt-0'>Portfolio-App</h2>
   <p className='font-ibm sm:text-0.5xl text-gray-600 dark:text-[#ABABAB]  sm:px-16 sm:mb-8 mb-3'>A portfolio website to showcase my work and connect with people. </p>
   <p className='font-ibm sm:text-0.5xl text-gray-600 dark:text-[#ABABAB]  sm:px-16 sm:mb-8 mb-3'>Developed using React and styled using TailwindCSS, this single page application comes with an elegant responsive design with a sidebar navigation menu and mobile view hamburger menu.</p>
   <div className='flex mb-8'>
   <a href='https://thisisvivek.netlify.app/' target='_blank' className='p-1 px-2 mr-6 my-3 font-ibm sm:text-0.5xl text-gray-600 dark:text-[#D9D9D9] flex sm:p-4 sm:py-2 sm:max-w-[25%] sm:mx-16 rounded-full justify-center gap-2 items-center border-2  hover:bg-gray-200 cursor-pointer dark:border-[#2E2E2E] dark:hover:bg-[#2E2E2E] dark:text-[#DBDBDB] dark:bg-[#242424]'> Portfolio <FiExternalLink /></a>
   <a className='p-1 px-2 my-3 font-ibm sm:text-0.5xl text-gray-600 dark:text-[#D9D9D9] flex sm:p-4 sm:py-2 sm:max-w-[15%] sm:mx-16 rounded-full justify-center gap-2 items-center border-2  hover:bg-gray-200 cursor-pointer dark:border-[#2E2E2E] dark:hover:bg-[#2E2E2E] dark:text-[#DBDBDB] dark:bg-[#242424]'> Github <FiExternalLink /></a>
   </div>


   </div>
   
   <div className='m-auto hidden sm:flex my-1 tracking-[-4px] text-[24px] font-ibm text-gray-300'>∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿</div>
   <div className=' my-8 sm:mt-11 sm:flex sm:my-16 tracking-[-4px] sm:hidden text-[24px] font-ibm text-gray-300'>∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿</div>

   <h2 className='font-ibm text-[1.5rem] sm:text-4xl text-black dark:text-[#EAEAEA] sm:p-3 sm:px-16 my-4 sm:ml-[15%]'>Work in progress</h2>
<div className='sm:ml-[20%] sm:max-w-[60%]'>
   <h2 className='font-ibm text-[1.25rem] sm:text-3xl text-black dark:text-[#EAEAEA] sm:p-3 sm:px-16 my-2 sm:my-4 mt-0'>Srijan-4.0</h2>
   <p className='font-ibm sm:text-0.5xl text-gray-600 dark:text-[#ABABAB]  sm:px-16 sm:mb-8 mb-3'>A website for the 4th rendition of NIT Silchar E-Cell's flagship event. </p>
   <p className='font-ibm sm:text-0.5xl text-gray-600 dark:text-[#ABABAB]  sm:px-16 sm:mb-8 mb-3'>The website is being developed using a wide range of tools such as React, Sass, EsLint, Netlify,etc. The website will have a modern look with elegant animations, beautiful fonts, and a user friedly layout.</p>
   <div className='flex mb-8'>
   <a href='https://thisisvivek.netlify.app/' target='_blank' className='p-1   my-3 font-ibm sm:text-0.5xl text-gray-600 dark:text-[#D9D9D9] flex sm:p-4 sm:py-2 sm:max-w-[25%] sm:mx-16 rounded-full justify-center gap-2 items-center border-2  hover:bg-gray-200 cursor-pointer dark:border-[#2E2E2E] dark:hover:bg-[#2E2E2E] dark:text-[#DBDBDB] dark:bg-[#242424] mr-6'> Srijan-4.0 <FiExternalLink /></a>
   <a className='p-1 px-2 my-3 font-ibm sm:text-0.5xl text-gray-600 dark:text-[#D9D9D9] flex sm:p-4 sm:py-2 sm:max-w-[15%] sm:mx-16 rounded-full justify-center gap-2 items-center border-2  hover:bg-gray-200 cursor-pointer dark:border-[#2E2E2E] dark:hover:bg-[#2E2E2E] dark:text-[#DBDBDB] dark:bg-[#242424]'> Github <FiExternalLink /></a>
   </div>
 </div>  


        </div>
    </div>
    </div>        
  )
}

export default Projects