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
              <Link href="/pre-register">
                <a onClick={()=>handleActiveLink(0)} className={`${activeLink[0].status ? 'text-active-link' : 'text-white'} nav-link lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center`}>
                  <span>PRE-REGISTER</span>
                </a>
              </Link>

              <Link href="/play">
                <a onClick={()=>handleActiveLink(1)} className={`${activeLink[1].status ? 'text-active-link' : 'text-white'} nav-link lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center`}>
                  <span>PLAY DEMO</span>
                </a>
              </Link>
              
              <a onClick={()=>handleActiveLink(2)} href="https://evermoreknights.gitbook.io/lores/" target="_blank" rel="noreferrer" className={`${activeLink[2].status ? 'text-active-link' : 'text-white'} nav-link lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center`}>
                <span>BLOG</span>
              </a>
              
              <a onClick={()=>handleActiveLink(3)} href="https://tny.sh/EvermoreKnightsWhitepaper" target="_blank" rel="noreferrer" className={`${activeLink[3].status ? 'text-active-link' : 'text-white'} nav-link lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center`}>
                <span>WHITEPAPER</span>
              </a>

              {/* <a title="Coming soon" className=' lg:inline-flex lg:w-auto w-full py-2 rounded  items-center justify-center cursor-pointer'>
                <motion.svg initial="rest" animate="rest" whileHover="play" whileTap="play" xmlns="http://www.w3.org/2000/svg" width="211.282"  viewBox="0 0 281.282 50.102">
                  <g id="Component_17_2" data-name="Component 17 – 2" transform="translate(0.641 0.5)">
                    <g id="Group_1707" data-name="Group 1707" transform="translate(-222.43 120.198)">
                      <motion.path variants={hover_button_border} id="Path_2052" data-name="Path 2052" d="M241.475-120.2H480.04l15.694,24.551L480.04-71.1H241.475L225.781-95.647Z" transform="translate(1.672)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" fillRule="evenodd"/>
                      <motion.path variants={hover_button_border} id="Path_2053" data-name="Path 2053" d="M245.148-117.4H479.306l17.668,26.912,5.455-6.6-5.455-6.994-17.263,27.4H245.148l-17.263-27.4-5.455,6.994,5.455,6.6Z" transform="translate(0 1.396)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="1" fillRule="evenodd"/>
                    </g>
                    <motion.text variants={hover_button_text} id="CONNECT_WALLET" data-name="CONNECT WALLET" transform="translate(137 31.551)" fill="#fff" fontSize="20"><tspan x="-96.764" y="0">CONNECT WALLET</tspan></motion.text>
                  </g>
                </motion.svg>
              </a> */}
              
            </div>
          </div>
       
        
      </nav>
    </div>
      
  );

}