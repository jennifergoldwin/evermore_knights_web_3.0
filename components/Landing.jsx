import React from 'react'
import { motion } from 'framer-motion';

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

export const Landing = () => {
    return (
        <div className="landing-wrapper">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 ">
                    <div className='overflow-hidden'>
                        <img src="/assets/images/CHARACTERS.png"/>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center p-8  w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 z-10">
                    <img src="/assets/images/logo-ek.png"/>
                    <div className="flex flex-row gap-4 justify-between z-10 mt-5">
                        <button title="Coming Soon" className="btn-store"><img src="/assets/images/appstore.png"/></button>
                        <button title="Coming Soon" className="btn-store"><img src="/assets/images/googlestore.png" /></button>
                    </div>
                    <a href="https://drive.google.com/drive/u/1/folders/1L83CuyIllGZ-vRq2SXKfCix7q5r6fPj_" target="_blank" rel="noreferrer" className='m-6'>
                        <motion.svg initial="rest" animate="rest" whileHover="play" whileTap="play"  xmlns="http://www.w3.org/2000/svg" width="100%" height="56.172" viewBox="0 0 508.124 66.172">
                        <g id="Component_11_3" data-name="Component 11 – 3" transform="translate(1.282 1)">
                            <g id="Group_1130" data-name="Group 1130">
                            <motion.path variants={hover_button_bg}  id="Path_2052" data-name="Path 2052" d="M246.292-120.2H698.083l20.511,32.086L698.083-56.026H246.292l-20.51-32.086Z" transform="translate(-219.216 120.198)" fillRule="evenodd"/>
                            <motion.path variants={hover_button_bg} fill="#fff" id="Path_2053" data-name="Path 2053" d="M252.12-117.4H697.769l23.09,35.171,7.13-8.625-7.13-9.14L698.3-64.189H252.12L229.559-99.995l-7.13,9.14,7.13,8.625Z" transform="translate(-222.43 122.881)" fillRule="evenodd"/>
                            </g>
                            <g id="Group_1129" data-name="Group 1129" transform="translate(751 -1827.449)">
                            <motion.text variants={hover_button_text} id="PLAY_DEMO" data-name="DOWNLOAD TESTNET APK" transform="translate(-498 1869)" fill="#fff" fontSize="23" ><tspan x="-165.189" y="0">DOWNLOAD TESTNET APK</tspan></motion.text>
                            <g id="Group_1128" data-name="Group 1128" transform="translate(-751 1827.449)" >
                                <motion.path variants={hover_button_border} id="Path_2052-2" data-name="Path 2052" d="M246.292-120.2H698.083l20.511,32.086L698.083-56.026H246.292l-20.51-32.086Z" transform="translate(-219.216 120.198)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" fillRule="evenodd"/>
                                <motion.path variants={hover_button_border} id="Path_2053-2" data-name="Path 2053" d="M252.12-117.4H697.769l23.09,35.171,7.13-8.625-7.13-9.14L698.3-64.189H252.12L229.559-99.995l-7.13,9.14,7.13,8.625Z" transform="translate(-222.43 122.881)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" fillRule="evenodd"/>
                            </g>
                            </g>
                        </g>
                        </motion.svg>
                    </a>
                </div>

                <div className="w-full absolute -bottom-1 blur-black">
                    {/* <img src="/assets/images/bg-blur-black.png"/> */}
                </div>
            </div>
        </div>
    );
}