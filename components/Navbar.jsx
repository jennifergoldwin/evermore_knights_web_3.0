import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react";

export const Navbar = () => {

  const router = useRouter()
  const [active, setActive] = useState(false)
  const [activeLink, setActiveLink] = useState([
    {idx: 0, status: false},
    {idx: 1, status: false},
    {idx: 2, status: false},
    {idx: 3, status: false},
  ])
  const handleClick = () => {
    setActive(!active);
  };

  useEffect(()=>{
    if (router.pathname==='/pre-register'){
      handleActiveLink(0)
    }
  })

  const handleActiveLink = (e) =>{
    setActiveLink(activeLink.map(link=>
      link.idx === parseInt(e) 
      ? {...link, status: true} : {...link, status: false}
    ))
  }

  const hover_button_border = {
    rest: {
      stroke: '#fff',
      fill: 'none',
    },
    play: {
      stroke: '#776A2B',
      fill: '#BFBDA8',
      transition:{
        type: "spring",
        duration: 0.8,
        ease: "circIn",
      }

    }
  }

  const hover_button_text = {
    rest:{
      fill: "#fff",
    },
    play:{
      fill: '#776A2B',
      transition:{
        type: "spring",
        duration: 0.8,
        ease: "circIn",
      }
    }
  }

  return (
    <div className="bg-black">
      <nav className='flex items-center flex-wrap p-2 mx-3 '>
        
          <Link href='/'>
            <a className='inline-flex items-center p-2 mr-4 '>
              <Image src="/assets/images/logo.png" width="136" height="48" alt="Evermore Knights"/>
            </a>
          </Link>
          <button onClick={handleClick} className=' inline-flex p-3  lg:hidden text-white ml-auto  outline-none'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          <div className={`${
              active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>

              <a onClick={()=>handleActiveLink(2)} href="https://evermoreknights.gitbook.io/lores/" target="_blank" rel="noreferrer" className={`${activeLink[2].status ? 'text-active-link' : 'text-white'} nav-link lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center`}>
                <span>BLOG</span>
              </a>
              
              <a onClick={()=>handleActiveLink(3)} href="https://tny.sh/EvermoreKnightsWhitepaper" target="_blank" rel="noreferrer" className={`${activeLink[3].status ? 'text-active-link' : 'text-white'} nav-link lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center`}>
                <span>WHITEPAPER</span>
              </a>
            </div>
          </div>
      </nav>
    </div>
      
  );

}