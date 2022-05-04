import React from 'react'
import { motion } from 'framer-motion';
import { Title } from './Title';

export const Pvp = () => {
    const pvp_1 = {
        rest: {
            transform: 'translate(390.314px , 259.5px)',
        },
        play: {
            transform: 'translate(370.314px ,259.5px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };
    const pvp_1_mob = {
        rest: {
            transform: 'translate(-15.045px, 5102.698px)',
        },
        play: {
            transform: 'translate(-25.045px, 5102.698px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };
    const pvp_2 = {
        rest: {
            transform: 'translate(1377.314px, 243.5px)',
        },
        play: {
            transform: 'translate(1397.314px, 243.5px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };
    const pvp_2_mob = {
        rest: {
            transform: 'translate(-7.071px, 5281.383px)',
        },
        play: {
            transform: 'translate(3.071px, 5281.383px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };
    const pvp_3 = {
        rest: {
            transform: 'translate(396.314px, 593.5px)',
        },
        play: {
            transform: 'translate(416.314px, 593.5px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };
    const pvp_3_mob = {
        rest: {
            transform: 'translate(232.663px, 5102.698px)',
        },
        play: {
            transform: 'translate(242.663px, 5102.698px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };
    const pvp_4 = {
        rest: {
            transform: 'translate(1216.314px, 574.5px)',
        },
        play: {
            transform: 'translate(1196.314px, 574.5px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };
    const pvp_4_mob = {
        rest: {
            transform: 'translate(212.245px ,5280.179px)',
        },
        play: {
            transform: 'translate(202.245px, 5280.179px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };

    const v = {
        rest: {
            transform: 'translate(-0.142px ,128.85px)',
        },
        play: {
            transform: 'translate(6.142px ,108.85px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };

    const v_mob = {
        rest: {
            transform: 'translate(0px ,43.186px)',
        },
        play: {
            transform: 'translate(3.142px ,33.85px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };

    const s = {
        rest: {
            transform: 'translate(83.858px, 196.849px)',
        },
        play: {
            transform: 'translate(83.858px, 216.849px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };

    const s_mob = {
        rest: {
            transform: 'translate(28.121px, 65.951px)',
        },
        play: {
            transform: 'translate(25.121px, 75.951px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };

    const vs_1 = {
        rest: {
            transform: 'translate(48.858px, -0.15px)',
        },
        play: {
            transform: 'translate(48.858px, 5.15px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };
    const vs_1_mob = {
        rest: {
            transform: 'translate(16.404px, 0px)',
        },
        play: {
            transform: 'translate(16.404px, 5px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    }
   
    const vs_2 = {
        rest: {
            transform: 'translate(26.858px, 5.85px)',
        },
        play: {
            transform: 'translate(26.858px, 0.85px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    };
    const vs_2_mob = {
        rest: {
            transform: 'translate(9.039px, 2.009px)',
        },
        play: {
            transform: 'translate(9.039px, -3.009px)',
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "easeIn",
            }
        }
    }
    
    return (
        <div className='pvp-wrapper'>
            <div className='py-8'>
                <Title title="PVP ARENA" desc="Build your party and challenge players to earn more rewards daily. 
                    Intense battles lead to glorious victory. 
                    Rise up above the ranks and show everyone your prowess in battle."/>
                <div className='mx-auto flex justify-center w-full lg:w-10/12 md:w-full sm:w-full pb-8'>
                    <motion.svg className="enemies-desktop" initial="rest" animate="rest" whileHover="play" whileTap="play" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 1376 766">
                        <defs>
                            <pattern id="pattern-pvp" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 219 606">
                                <image width="219" height="606" xlinkHref="/assets/images/Group%201745-image2.png"/>
                            </pattern>
                            <pattern id="pattern-pvp-2" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 597 809">
                                <image width="597" height="809" xlinkHref="/assets/images/Group%201745-image5.png"/>
                            </pattern>
                            <pattern id="pattern-pvp-3" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 690 748">
                                <image width="690" height="748" xlinkHref="/assets/images/Group%201745-image7.png"/>
                            </pattern>
                        </defs>
                        <g id="Group_1745" data-name="Group 1745" transform="translate(-370.314 -243.5)">
                            <g id="PvP" transform="translate(913.457 332.65)">
                            <g id="VS" transform="translate(0 0)">
                                <motion.image variants={vs_1} id="Layer_995_copy_2" data-name="Layer 995 copy 2" width="119" height="498" transform="translate(48.858 -0.15)" xlinkHref="/assets/images/Group%201745-image.png"/>
                                <motion.rect variants={vs_2} id="Layer_995" data-name="Layer 995" width="171" height="471" transform="translate(26.858 5.85)" fill="url(#pattern-pvp)"/>
                                <motion.image variants={s} id="Layer_997" data-name="Layer 997" width="141" height="179" transform="translate(83.858 196.849)" xlinkHref="/assets/images/Group%201745-image3.png"/>
                                <motion.image variants={v} id="Layer_996" data-name="Layer 996" width="145" height="176" transform="translate(-0.142 128.85)" xlinkHref="/assets/images/Group%201745-image4.png"/>
                            </g>
                            </g>
                            <motion.rect  variants={pvp_1} id="Image_15" transform="translate(370.314 259.5)" data-name="Image 15" width="361" height="488"  fill="url(#pattern-pvp-2)"/>
                            <motion.image variants={pvp_2} id="Image_16" data-name="Image 16" width="349" height="478" transform="translate(1397.314 243.5)" xlinkHref="/assets/images/Group%201745-image6.png"/>
                            <motion.rect  variants={pvp_4} id="Image_17" data-name="Image 17" width="402" height="435" transform="translate(1196.314 574.5)" fill="url(#pattern-pvp-3)"/>
                            <motion.image variants={pvp_3} id="Image_18" data-name="Image 18" width="478" height="397" transform="translate(416.314 593.5)" xlinkHref="/assets/images/Group%201745-image8.png"/>
                        </g>
                    </motion.svg>
                    {/* <img className='enemies-mob' src='/assets/images/pvp-mob.png'/> */}
                    <motion.svg initial="rest" animate="rest" whileHover="play" whileTap="play" className='enemies-mob' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="401.216" height="366.178" viewBox="0 0 401.216 366.178">
                        <g id="Group_2174" data-name="Group 2174" transform="translate(15.045 -5102.698)">
                            <motion.image variants={pvp_1_mob} id="Image_15" data-name="Image 15" width="167.839" height="227.44" transform="translate(-15.045 5102.698)" xlinkHref="/assets/images/Group%202174-image.png"/>
                            <motion.image variants={pvp_2_mob} id="Image_18" data-name="Image 18" width="225.877" height="187.493" transform="translate(-7.071 5281.383)" xlinkHref="/assets/images/Group%202174-image2.png"/>
                            <motion.image variants={pvp_3_mob} id="Image_16" data-name="Image 16" width="153.509" height="210.173" transform="translate(232.663 5102.698)" xlinkHref="/assets/images/Group%202174-image3.png"/>
                            <motion.image variants={pvp_4_mob} id="Image_17" data-name="Image 17" width="173.926" height="188.697" transform="translate(212.245 5280.179)" xlinkHref="/assets/images/Group%202174-image4.png"/>
                            <g id="PvP" transform="translate(157.479 5148.06)">
                            <g id="VS" transform="translate(-0.142 -0.15)">
                                <motion.image variants={vs_1_mob} id="Layer_995_copy_2" data-name="Layer 995 copy 2" width="39.839" height="166.906" transform="translate(16.404 0)" xlinkHref="/assets/images/Group%202174-image5.png"/>
                                <motion.image variants={vs_2_mob} id="Layer_995" data-name="Layer 995" width="56.984" height="157.681" transform="translate(9.039 2.009)" xlinkHref="/assets/images/Group%202174-image6.png"/>
                                <motion.image variants={s_mob} id="Layer_997" data-name="Layer 997" width="47.204" height="59.983" transform="translate(28.121 65.951)" xlinkHref="/assets/images/Group%202174-image7.png"/>
                                <motion.image variants={v_mob} id="Layer_996" data-name="Layer 996" width="48.543" height="58.982" transform="translate(0 43.186)" xlinkHref="/assets/images/Group%202174-image8.png"/>
                            </g>
                            </g>
                        </g>
                    </motion.svg>
                </div>
            </div>
        </div>
    );
}