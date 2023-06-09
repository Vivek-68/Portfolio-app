import React from 'react'
import {BsTwitter,BsFacebook,BsLinkedin,BsGithub} from 'react-icons/bs'


const Home = (props) => {
  return (
    <div className={props.darkmode?"dark":" "}>
    <div className='mb-12 sm:mb-0 p-6 sm:p-12 dark:bg-[#111111]'>
        <div className='flex flex-col'>
            <div className=' text-[28px] sm:ml-[20%] font-ibm text-bold sm:text-6xl dark:text-[#EAEAEA]'>
                <h1>Vivek Kumar.</h1>
                <h1>Web Developer.</h1>
            </div>
            <div className='text-[1rem] my-6 sm:ml-[20%] font-ibm sm:text-xl sm:max-w-[60%]  sm:mt-12 text-gray-600 dark:text-[#ABABAB]'>
                <p className='mb-12'>I am Vivek Kumar, an India based web developer and a computer science student at NIT Silchar. I specialise in front-end development using React 
and TailwindCSS.</p>
            <ul className='flex gap-1 sm:gap-7'>
<a href='https://twitter.com/viv_e_k?t=07uG0iAk3c5UMZdPeIIxFQ&s=09' target='_blank' ><li className=' p-2 border-2 border-white rounded-md hover:bg-gray-200 cursor-pointer dark:border-[#111111] dark:hover:bg-[#2E2E2E] dark:hover:text-[#DBDBDB]'>            <BsTwitter className='text-[1.375rem] sm:text-2xl cursor-pointer '/>
</li></a>
<a href='https://www.facebook.com/profile.php?id=100075924322738&mibextid=ZbWKwL' target='_blank' >
<li className='p-2 border-2 border-white rounded-md hover:bg-gray-200 cursor-pointer dark:border-[#111111] dark:hover:bg-[#2E2E2E] dark:hover:text-[#DBDBDB]'>            <BsFacebook className='text-[1.375rem] sm:text-2xl cursor-pointer '/>
</li></a>
<a href='https://github.com/Vivek-68' target='_blank'><li className='p-2 border-2 border-white rounded-md hover:bg-gray-200 cursor-pointer dark:border-[#111111] dark:hover:bg-[#2E2E2E] dark:hover:text-[#DBDBDB]'>
<BsGithub className='text-[1.375rem] sm:text-2xl cursor-pointer  '/>
</li> </a>
<a href='https://www.linkedin.com/in/vivek-kumar-21223922a' target='_blank'><li className='p-2 border-2 border-white rounded-md hover:bg-gray-200 cursor-pointer dark:border-[#111111] dark:hover:bg-[#2E2E2E] dark:hover:text-[#DBDBDB]'>
<BsLinkedin className='text-[1.375rem] sm:text-2xl cursor-pointer  '/>
</li></a>
<a className='flex m-auto ml-4 border-2 border-black p-2 px-3 sm:p-2 sm:px-4 rounded-3xl text-semibold text-[14px] sm:text-[16 px] hover:bg-gray-200 cursor-pointer dark:border-[#2E2E2E] dark:hover:bg-[#2E2E2E] dark:text-[#DBDBDB] dark:bg-[#242424]' href='mailto:vivektitan3@gmail.com'>Email me</a>
            </ul>
            
            </div>
            <div className='m-auto my-8 sm:mt-11 hidden sm:flex sm:my-16 tracking-[-4px] text-[24px] font-ibm text-gray-300'>∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿</div>
            <div className=' my-8 sm:mt-11 sm:flex sm:my-16 tracking-[-4px] sm:hidden text-[24px] font-ibm text-gray-300'>∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿</div>

            <div className='flex flex-col font-ibm'>
                <h2 className='sm:m-auto sm:ml-[20%] text-[1.25rem] sm:text-[2rem] text-semibold dark:text-[#EAEAEA]'>Featured projects</h2>
                <p className='text-[1rem] sm:text-0.5xl text-semibold sm:ml-[20%] mt-2 text-gray-600 dark:text-[#ABABAB]'>A collection of some recent projects.</p>
                <a className='flex flex-col sm:max-w-[60%] p-4 pt-0 sm:my-4 sm:mt-10 sm:m-auto my-7 border-2 border-gray-300 rounded-md sm:p-5 sm:pb-7 cursor-pointer hover:bg-gray-200 dark:border-[#242424] dark:bg-[#191919] dark:hover:bg-[#242424]' href='https://vivek-68.github.io/DO.IT./' target='_blank'>
                    <h2 className='text-bold my-3 dark:text-[#EAEAEA]'>Do.It.</h2>
                    <p className='text-bold text-gray-600 dark:text-[#ABABAB]'>A task management application that allows the user to create todos to keep track of daily tasks. Also allows the user to delete as well as mark todos as completed.</p>

                </a>
                <a className='flex flex-col sm:max-w-[60%] sm:m-auto p-4 pt-0 my-7 border-2 border-gray-300 rounded-md p-5 pb-7 cursor-pointer hover:bg-gray-200 dark:border-[#242424] dark:bg-[#191919] dark:hover:bg-[#242424]' href='https://vivek-68.github.io/weatherwatch/' target='_blank'>
                    <h2 className='text-bold my-3 dark:text-[#EAEAEA]'>WeatherWatch</h2>
                    <p className='text-bold text-gray-600 dark:text-[#ABABAB]'>A weather app that provides the user with on the spot weather condition of all major cities in the world. The app uses a free weather api to recieve the weather forecast.</p>

                </a>
            </div>


        </div>
    </div>
    </div>
  )
}

export default Home