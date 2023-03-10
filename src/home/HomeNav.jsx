import React from 'react'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'
import { headerNavLinks } from '../constant'
import './homepage.css'

const HomeNav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='sticky w-full flex justify-between items-center navbar z-10'>
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {headerNavLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[1.25vw] font-bold navText
          ${index === headerNavLinks.length -1 ? 'mr-0' : 'mr-10'}`}
          >
            <a className='py-6' href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex w-full flex-wrap justify-center items-center">
        <div 
          className='text-[30px] sm:mt-0 mt-5 text-white object-contain'
          onClick={() => setToggle((prev) => !prev)}>
          {toggle ? <AiOutlineCloseCircle/> : <AiOutlineMenu/>}
        </div>
        <div className={`${toggle ? 'flex' : 'hidden'} 
         bg-black-gradient relative  right-0 w-full sidebar`}>
          {/*Homepage Nav for Tablet and Mobile */}
          <ul className="list-none flex flex-col center w-full justify-center items-center">
            {headerNavLinks.map((nav, index) => (
              <li
              key={nav.id}
              className={`font-poppins font-normal text-white cursor-pointer text-[16px] font-semibold navText
              ${index === headerNavLinks.length -1 ? 'pt-2 pb-2' : 'pt-2'}`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HomeNav