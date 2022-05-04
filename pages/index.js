{/* eslint-disable-next-line @next/next/no-img-element */}

import React from "react";
import Script from 'next/script'
import Head from "next/head";
import Link from 'next/link';
import { Landing } from "../components/Landing";
import { Navbar } from "../components/Navbar";
import { Coins } from "../components/Coins";
import { Slider } from "../components/Slider";
import { Title } from "../components/Title";
import { motion } from "framer-motion";
import { Pvp } from "../components/Pvp";
import { Enemies } from "../components/Enemies";
import { Combat } from "../components/Combat";
import { World } from "../components/World";



export default function Home() {
  const listNFT = [
    "/assets/images/1.png",
    "/assets/images/2.png",
    "/assets/images/3.png",
    "/assets/images/4.png",
    "/assets/images/5.png",
    // "/assets/images/6.png"
  ];

  const listWeapon = [
    {
      url: "/assets/images/weapon-1.png",
      title: "Shield"
    },
    {
      url: "/assets/images/weapon-2.png",
      title: "Staff"
    },
    {
      url: "/assets/images/weapon-3.png",
      title: "Sword"
    },
    {
      url: "/assets/images/weapon-4.png",
      title: "Shield"
    },
    {
      url: "/assets/images/weapon-5.png",
      title: "Staff"
    },
    {
      url: "/assets/images/weapon-6.png",
      title: "Dagger"
    },
    {
      url: "/assets/images/weapon-7.png",
      title: "Bow"
    },
    {
      url: "/assets/images/weapon-8.png",
      title: "Dagger"
    },
    {
      url: "/assets/images/weapon-9.png",
      title: "Bow"
    },
    {
      url: "/assets/images/weapon-10.png",
      title: "Sword"
    }
  ];

  const listSkillCard = [
    "/assets/images/skill-card-1.png",
    "/assets/images/skill-card-2.png",
    "/assets/images/skill-card-3.png",
    "/assets/images/skill-card-4.png",
    "/assets/images/skill-card-5.png",
    "/assets/images/skill-card-6.png",
  ];

  const listCharacters= [
    "/assets/images/characters/laslow.png",
    "/assets/images/characters/curtis.png",
    "/assets/images/characters/quinn.png",
    "/assets/images/characters/astra.png",
    "/assets/images/characters/grana.png",
    "/assets/images/characters/tyria.png",
   

  ];

  const tyria = {
    rest: {
      transform: 'translateX(18%)'
    },
    play: {
      transform: 'translateX(0%)',
      transition:{
        type: "spring",
        duration: 0.8,
        ease: "easeIn",
      }
    }
  }

  const hover_button_border = {
    rest: {
      stroke: '#fff',
      fill: 'none',
    },
    play: {
      stroke: '#776A2B',
      // fill: '#BFBDA8',
      transition:{
        type: "spring",
        duration: 0.8,
        ease: "circIn",
      }

    }
  }

  const hover_button_bg={
    rest: {
      // stroke: '#fff',
      fill: '#000000',
    },
    play: {
      // stroke: '#776A2B',
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
    <div >
        <Script src="https://kit.fontawesome.com/242f1006be.js" crossorigin="anonymous"></Script>

        <Head>
          <title>Evermore Knights</title>
          <link rel="icon" href="/logo.ico"></link>
        </Head>

        <Navbar/>

     
        <Landing/>
      
        <div className="bg-black flex flex-wrap flex-col justify-center">
          <div className="grid justify-center items-center m-auto grid-cols-2 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 ">
            <img src="/assets/images/nomina.png"/>
            <img src="/assets/images/muse.png"/>
            <img src="/assets/images/creo.png"/>
            <img src="/assets/images/binance.png"/>
          </div>
          <img className="-mt-4 pb-8" src="/assets/images/Arrow.png"/>
        </div> 
      

        <div className="play-to-earn-wrapper overflow-hidden ">
          <div className="py-8">
            <Title title="FREE TO PLAY & PLAY TO EARN" desc="NFT Assets. Turn-Based. Anime-Inspired"/>
            <div className=" mx-auto flex flex-wrap w-full play-to-earn pb-8">
              
              <div className="inline-flex flex-col justify-center items-center  w-full sm:w-2/5 md:w-2/5 lg:w-2/5 xl:w-2/5 cursor-pointer">
                <div className="iframe-wrapper">
                  <iframe className='p-3 responsive-iframe' loading="lazy"  src="https://www.youtube.com/embed/GBZBlU7Bsyc?autoplay=1"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <Link href="/play">
                  {/* <a> */}
                    <motion.svg initial="rest" animate="rest" whileHover="play" whileTap="play"  xmlns="http://www.w3.org/2000/svg" width="100%" height="56.172" viewBox="0 0 508.124 66.172">
                      <g id="Component_11_3" data-name="Component 11 – 3" transform="translate(1.282 1)">
                        <g id="Group_1130" data-name="Group 1130">
                          <motion.path variants={hover_button_bg}  id="Path_2052" data-name="Path 2052" d="M246.292-120.2H698.083l20.511,32.086L698.083-56.026H246.292l-20.51-32.086Z" transform="translate(-219.216 120.198)" fillRule="evenodd"/>
                          <motion.path variants={hover_button_bg} fill="#fff" id="Path_2053" data-name="Path 2053" d="M252.12-117.4H697.769l23.09,35.171,7.13-8.625-7.13-9.14L698.3-64.189H252.12L229.559-99.995l-7.13,9.14,7.13,8.625Z" transform="translate(-222.43 122.881)" fillRule="evenodd"/>
                        </g>
                        <g id="Group_1129" data-name="Group 1129" transform="translate(751 -1827.449)">
                          <motion.text variants={hover_button_text} id="PLAY_DEMO" data-name="PLAY DEMO" transform="translate(-498 1869)" fill="#fff" fontSize="23" ><tspan x="-69.189" y="0">PLAY DEMO</tspan></motion.text>
                          <g id="Group_1128" data-name="Group 1128" transform="translate(-751 1827.449)" >
                            <motion.path variants={hover_button_border} id="Path_2052-2" data-name="Path 2052" d="M246.292-120.2H698.083l20.511,32.086L698.083-56.026H246.292l-20.51-32.086Z" transform="translate(-219.216 120.198)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" fillRule="evenodd"/>
                            <motion.path variants={hover_button_border} id="Path_2053-2" data-name="Path 2053" d="M252.12-117.4H697.769l23.09,35.171,7.13-8.625-7.13-9.14L698.3-64.189H252.12L229.559-99.995l-7.13,9.14,7.13,8.625Z" transform="translate(-222.43 122.881)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" fillRule="evenodd"/>
                          </g>
                        </g>
                      </g>
                    </motion.svg>
                  {/* </a> */}
                </Link>
              </div>

              <div className="inline-flex flex-col justify-center items-center w-full sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-3/5 ">
                  <motion.img loading="lazy" initial="rest" animate="rest" whileHover="play" whileTap="play" variants={tyria}  src="/assets/images/tyria-aura.png"/>
              </div>
            </div>
          </div>
        </div>

        <Combat/>
      
        <div className="nft-list-wrapper coins-wrapper ">
          <div className="py-8">
            <Title title="NFT CHARACTERS" desc="Every character will be unique in both appearance 
              and attributes. Build them as you wish to better assist you in your adventure!"/>

            <Slider key="nft" list={listNFT} id="model_2"/>
          </div>
        </div>


        <Enemies/>

        <div className="characters-list-wrapper coins-wrapper">
          <div className="py-8">
            <Title title="EXCLUSIVE CHARACTERS" desc="Meet valiant heroes that roam the world 
            each with their own unique traits. There are exclusive characters you can get in game 
            that can vastly help your party in battle. They are also valuable and limited time NFT’s."/>
            
            <Slider key="characters" list={listCharacters} id="model_1"/>
          </div>
          
        </div>

        <World/>

        <div className="weapon-list-wrapper slider-wrapper">
          <div className="py-8">
            <Title title="WEAPON NFT" desc="Some are common, some are legendary, however, every weapon is truly unique in 
              it’s own way. They are also valuable assets in our marketplace."/>
            <Slider key="weapon" list={listWeapon} id="model_3"/>
          </div>
        </div>

        <Coins/>

        <div className="skill-card-list-wrapper slider-wrapper">
          <div className="py-8">
            <Title title="SKILL CARDS" desc="Collect rare skill cards and use them to your advantage in battle. 
            They offer a wide array of skills, passives, and more!"/>
            <Slider key="card" list={listSkillCard} id="model_2"/>
          </div>
        </div>
        
        <Pvp/>

        <footer >
          <div className="container text-white flex flex-col flex-wrap px-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
            <div className="container mx-auto flex flex-wrap w-full">

              <div className="inline-flex justify-center items-center w-full px-4  mt-7  lg:w-1/3 md:w-1/3">
                <div className="footer-left">
                  <img src="/assets/images/logo-footer.png"/>
                  <p className="mt-4 text-sm">
                    Any question / feedback? Please contact us:contact@creoengine.com
                  </p>
                </div>
              </div>

              <div className="w-full px-4 mt-7 lg:w-1/3 md:w-1/3 flex justify-center items-center text-center">
                <ul className=" space-y-2 text-sm list-none">
                  <li>
                    <Link href="/play">
                      <a className="nav-link">PLAY DEMO</a>
                    </Link>
                    
                  </li>
                  <li>
                    <a href="https://evermoreknights.gitbook.io/lores/" className="nav-link" target="_blank" rel="noreferrer">BLOG</a>
                  </li>
                  <li>
                    <a href="https://tny.sh/EvermoreKnightsWhitepaper" className="nav-link" target="_blank" rel="noreferrer" >WHITEPAPER</a>
                  </li>
                </ul>
              </div>
            
              <div className="w-full px-4 mt-7 lg:w-1/3 md:w-1/3 text-center">
                <span className="text-sm">SOCIAL</span>
                <div className="grid grid-cols-3">
                  <a href="https://www.facebook.com/CreoEngineGlobal/" rel="noreferrer" target="_blank"  className="btn-footer">
                    <i className="fa-brands fa-facebook-f"></i></a>

                  <a href="https://twitter.com/creo_engine" target="_blank" rel="noreferrer" className="btn-footer">
                    <i className="fa-brands fa-twitter fa-lg"></i></a>

                  <a href="https://t.me/CreoEngineChannel" target="_blank" rel="noreferrer" className="btn-footer">
                    <i className="fa-solid fa-paper-plane"></i></a>

                  <a href="https://discord.gg/evermoreknights" target="_blank" rel="noreferrer" className="btn-footer">
                    <i className="fa-brands fa-discord"></i></a>

                  <a href="https://creoengineofficial.medium.com/" target="_blank" rel="noreferrer" className="btn-footer">
                    <i className="fa-brands fa-medium"></i></a>

                  <a href="https://www.instagram.com/evermoreknights.official/" rel="noreferrer" target="_blank" className="btn-footer">
                    <i className="fa-brands fa-instagram fa-lg"></i></a>
                </div>

              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mb-7 mt-7 mx-3">
            <img alt="" src="/assets/images/Arrow.png"/>
            <p className="text-sm text-center text-white mt-7">© 2021 Evermore Knights. All Rights Reserved</p>
          </div>
        </footer>
      </div>
   
 
  )
}
