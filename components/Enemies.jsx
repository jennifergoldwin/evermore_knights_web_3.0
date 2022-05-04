import React from 'react'
import { motion } from 'framer-motion';
import { Title } from './Title';

export const Enemies = () =>{

    const mons_left_1 = {
        rest: {
            transform: 'translate(214px, 351px)',
        },
        play: {
            transform: 'translate(234px, 351px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };
    const mons_left_1_mob = {
        rest: {
            transform: 'translate(-2.45px, 2348.47px)',
        },
        play: {
            transform: 'translate(-12.45px, 2348.47px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };
    
    const mons_left_2 = {
        rest: {
            transform: 'translate(528px, 344px)',
        },
        play: {
            transform: 'translate(568px, 344px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };
    const mons_left_2_mob = {
        rest: {
            transform: 'translate(56.7px, 2301.402px)',
        },
        play: {
            transform: 'translate(66.7px, 2301.402px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };
    
    const mons_right_1 = {
        rest: {
            transform: 'translate(1401px, 334px)',
        },
        play: {
            transform: 'translate(1381px, 334px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
                
            }
        }
    };

    const mons_right_1_mob = {
        rest: {
            transform: 'translate(261px, 2351.972px)',
        },
        play: {
            transform: 'translate(271px, 2351.972px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
                
            }
        }
    };

    const mons_right_2 = {
        rest: {
            transform: 'translate(1114px, 333px)',
        },
        play: {
            transform: 'translate(1074px, 333px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };

    const mons_right_2_mob = {
        rest: {
            transform: 'translate(192px ,2297.759px)',
        },
        play: {
            transform: 'translate(182px ,2297.759px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };
    return(
        <div className='enemies-wrapper w-full'>
            <div className="py-8">
                <Title title="CHALLENGING ENEMIES AND TOUGH ENCOUNTERS" desc="Difficult encounters yield higher rewards. 
                Outfitting your party with skills, and well built heroes is the key to success! Monsters and enemies alike won't go easy on you." />
            
                <div className='flex justify-center items-center w-full pb-8'>
                    {/* <div className='enemies-desktop'> */}
                    <motion.svg className="enemies-desktop" initial="rest" animate="rest" whileHover="play" whileTap="play" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 1958 772">
                        <defs>
                            <clipPath id="clip-path-enemies">
                            <rect id="Rectangle_143" data-name="Rectangle 143" width="1958" height="772" transform="translate(-2219 4599)" fill="rgba(255,255,255,0)" stroke="#707070" strokeWidth="1"/>
                            </clipPath>
                            <pattern id="pattern" width="1" height="1" viewBox="-10.423 0 296 711">
                            <image preserveAspectRatio="none" width="296" height="711" xlinkHref="/assets/images/Mask%20Group%2056-image5.png"/>
                            </pattern>
                        </defs>
                        <g id="Mask_Group_56" data-name="Mask Group 56" transform="translate(2219 -4599)" clipPath="url(#clip-path-enemies)">
                            <g id="Group_enemies" data-name="Group enemies" transform="translate(-2280 4265.601)">
                            <motion.image variants={mons_left_2} id="Layer_5_copy_2" data-name="Layer 5 copy 2" width="392" height="574" transform="translate(528 344)" xlinkHref="/assets/images/Mask%20Group%2056-image.png"/>
                            <motion.image variants={mons_left_1} id="Layer_5_copy_3" data-name="Layer 5 copy 3" width="484" height="648" transform="translate(214 351)" xlinkHref="/assets/images/Mask%20Group%2056-image2.png"/>
                            <motion.image variants={mons_right_2} id="Layer_5_copy" data-name="Layer 5 copy" width="457" height="585" transform="translate(1114 333)" xlinkHref="/assets/images/Mask%20Group%2056-image3.png"/>
                            <motion.image variants={mons_right_1} id="Layer_5" data-name="Layer 5" width="464" height="642" transform="translate(1401 334)" xlinkHref="/assets/images/Mask%20Group%2056-image4.png"/>
                            <rect id="Layer_5_copy_5" data-name="Layer 5 copy 5" width="296" height="711" transform="translate(1732 394)" fill="url(#pattern)"/>
                            <image id="Layer_5_copy_4" data-name="Layer 5 copy 4" width="439" height="606" transform="translate(-6 432)" xlinkHref="/assets/images/Mask%20Group%2056-image6.png"/>
                            </g>
                        </g>
                    </motion.svg>
                    {/* </div> */}

                    {/* <img className='enemies-mob' src='/assets/images/enemies-mob.png'/> */}
                    <motion.svg className='enemies-mob' initial="rest" animate="rest" whileHover="play" whileTap="play" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="445" height="301" viewBox="0 0 445 301">
                        <defs>
                            <clipPath id="clip-path-enemies-mob">
                            <rect id="Rectangle_1166" data-name="Rectangle 1166" width="445" height="301" transform="translate(2452 2275)" fill="#fff" stroke="#707070" strokeWidth="1"/>
                            </clipPath>
                            <pattern id="pattern-enemies-mob" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 484 648">
                            <image width="484" height="648" xlinkHref="/assets/images/Mask%20Group%2068-image2.png"/>
                            </pattern>
                            <pattern id="pattern-2-enemies-mob" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 439 606">
                            <image width="439" height="606" xlinkHref="/assets/images/Mask%20Group%2068-image5.png"/>
                            </pattern>
                            <pattern id="pattern-3-enemies-mob" width="1" height="1" viewBox="-3.404 0 96.68 232.228">
                            <image preserveAspectRatio="none" width="96.68" height="232.228" xlinkHref="/assets/images/Mask%20Group%2068-image6.png"/>
                            </pattern>
                        </defs>
                        <g id="Mask_Group_68" data-name="Mask Group 68" transform="translate(-2452 -2275)" clipPath="url(#clip-path-enemies-mob)">
                            <g id="Group_2175" data-name="Group 2175" transform="translate(2478 -23)">
                            <motion.image variants={mons_left_2_mob} id="Layer_5_copy_2" data-name="Layer 5 copy 2" width="129.83" height="190.108" transform="translate(56.7 2301.402)" xlinkHref="/assets/images/Mask%20Group%2068-image.png"/>
                            <motion.rect variants={mons_left_1_mob} id="Layer_5_copy_3" data-name="Layer 5 copy 3" width="152.3" height="203.616" transform="translate(-2.45 2348.47)" fill="url(#pattern-enemies-mob)"/>
                            <motion.image variants={mons_right_2_mob} id="Layer_5_copy" data-name="Layer 5 copy" width="151.358" height="193.751" transform="translate(192 2297.759)" xlinkHref="/assets/images/Mask%20Group%2068-image3.png"/>
                            <motion.image variants={mons_right_1_mob} id="Layer_5" data-name="Layer 5" width="130.176" height="180.114" transform="translate(261 2351.972)" xlinkHref="/assets/images/Mask%20Group%2068-image4.png"/>
                            <rect id="Layer_5_copy_4" data-name="Layer 5 copy 4" width="127.396" height="174.706" transform="translate(-45.16 2384.548)" fill="url(#pattern-2-enemies-mob)"/>
                            <rect id="Layer_5_copy_5" data-name="Layer 5 copy 5" width="96.68" height="232.228" transform="translate(336.088 2362.589)" fill="url(#pattern-3-enemies-mob)"/>
                            </g>
                        </g>
                    </motion.svg>

                </div>
            </div>
        </div>
    );
}