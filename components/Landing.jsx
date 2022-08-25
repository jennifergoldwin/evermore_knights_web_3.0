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
                    <h1 className='text-white text-2xl md:text-3xl'>JOIN NOW</h1>
                    <div className='m-4 w-2/5 sm:w-3/5 md:w-2/5 '>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"   viewBox="0 0 388.067 134.939">
                        <defs>
                          <linearGradient id="linear-gradient" x1="0.06" y1="1" x2="0.617" y2="1" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#687794"/>
                            <stop offset="1" stopColor="#525d74" stopOpacity="0"/>
                          </linearGradient>
                          <linearGradient id="linear-gradient-2" x1="0.495" x2="2.314" y2="1.021" gradientUnits="objectBoundingBox">
                            <stop offset="0" stopColor="#066585"/>
                            <stop offset="0.406" stopColor="#007ea6"/>
                            <stop offset="0.854" stopColor="#0091cf"/>
                            <stop offset="1" stopColor="#0091cf" stopOpacity="0"/>
                          </linearGradient>
                          <radialGradient id="radial-gradient" cx="0.493" cy="1" r="0.455" gradientTransform="matrix(0, -0.55, 1.1, 0, 1.05, -0.05)" gradientUnits="objectBoundingBox">
                            <stop offset="0.307" stopColor="#9eeeff"/>
                            <stop offset="1" stopColor="#57aeff" stopOpacity="0"/>
                            <stop offset="1" stopColor="#0085ff" stopOpacity="0"/>
                          </radialGradient>
                          <clipPath id="clip-path">
                            <path id="Vector" d="M353.249,0H30.963L0,65.535l30.963,65.55H353.249l30.964-65.55Z" transform="matrix(1, 0, 0, 1, 750.444, 809.837)" fill="url(#linear-gradient)"/>
                          </clipPath>
                          <filter id="Vector-2" x="0" y="0" width="388.067" height="134.939" filterUnits="userSpaceOnUse">
                            <feOffset dx="-0.321" dy="0.642" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="0.642" result="blur"/>
                            <feFlood floodOpacity="0.251"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                          </filter>
                        </defs>
                        <g id="Group_3069" data-name="Group 3069" transform="translate(-666.196 -904.552)">
                          <g id="Group_2166" data-name="Group 2166" transform="translate(-82 96)">
                            <g id="btn_blue">
                              <g id="Group_3068" data-name="Group 3068">
                                <path id="Vector-3" data-name="Vector" d="M384.213,65.535l-30.963,65.55H30.964L0,65.535,30.964,0H353.249Z" transform="matrix(1, 0, 0, 1, 750.444, 809.837)" fill="#a0edff"/>
                                <path id="Vector-4" data-name="Vector" d="M382.218,63.072l-30.275,65.6L30.275,127.406,0,63.072,28.381,0h321.67Z" transform="translate(751.706 812.359)" fill="url(#linear-gradient-2)"/>
                                <path id="Ellipse_599" data-name="Ellipse 599" d="M315.361,108.267H0S77.9,0,164.981,0,315.361,108.267,315.361,108.267Z" transform="translate(785.765 830.237)" fill="url(#radial-gradient)"/>
                                <g id="Mask_group" data-name="Mask group" opacity="0.4">
                                  <g id="Vector-5" data-name="Vector" clipPath="url(#clip-path)">
                                    <g id="Group_1537" data-name="Group 1537">
                                      <g id="Group">
                                        <path id="Vector-6" data-name="Vector" d="M126.675,62.968A63.338,63.338,0,1,1,63.337,0a63.154,63.154,0,0,1,63.337,62.968Z" transform="translate(682.165 844.504) rotate(-75)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-7" data-name="Vector" d="M716.777,753.071l24.049,41.514-41.374,23.806L675.4,776.877Z" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-8" data-name="Vector" d="M764.47,780.626l13.935,24.056-23.975,13.8L740.5,794.421Z" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-9" data-name="Vector" d="M782.017,715.148l24.049,41.514-41.374,23.806-24.049-41.514Z" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-10" data-name="Vector" d="M754.315,818.544l24.049,41.514L736.99,883.864,712.941,842.35Z" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-11" data-name="Vector" d="M819.574,780.613l24.049,41.514-41.374,23.806L778.2,804.419Z" fill="#fff" opacity="0.3"/>
                                      </g>
                                      <g id="Group-2" data-name="Group">
                                        <path id="Vector-12" data-name="Vector" d="M126.675,62.968A63.338,63.338,0,1,1,63.337,0a63.154,63.154,0,0,1,63.337,62.968Z" transform="translate(850.148 889.515) rotate(-75)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-13" data-name="Vector" d="M884.76,798.079l24.049,41.514L867.435,863.4l-24.049-41.514Z" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-14" data-name="Vector" d="M932.454,825.636l13.935,24.056-23.975,13.8-13.935-24.056Z" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-15" data-name="Vector" d="M950,760.159l24.049,41.514-41.374,23.806-24.049-41.514Z" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-16" data-name="Vector" d="M922.3,863.554l24.049,41.514-41.374,23.806-24.049-41.514Z" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-17" data-name="Vector" d="M987.558,825.624l24.049,41.514-41.374,23.806L946.184,849.43Z" fill="#fff" opacity="0.3"/>
                                      </g>
                                      <g id="Group-3" data-name="Group">
                                        <path id="Vector-18" data-name="Vector" d="M125.936,62.968A62.968,62.968,0,1,1,62.968,0a62.968,62.968,0,0,1,62.968,62.968Z" transform="translate(743.745 950.643) rotate(-75)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-19" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 778.217, 859.754)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-20" data-name="Vector" d="M0,0H27.65V27.65H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 825.931, 887.234)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-21" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 843.377, 822.137)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-22" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 815.835, 924.93)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-23" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 881.005, 887.298)" fill="#fff" opacity="0.3"/>
                                      </g>
                                      <g id="Group-4" data-name="Group">
                                        <path id="Vector-24" data-name="Vector" d="M125.936,62.968A62.968,62.968,0,1,1,62.968,0a62.968,62.968,0,0,1,62.968,62.968Z" transform="translate(788.749 782.667) rotate(-75)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-25" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 823.221, 691.784)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-26" data-name="Vector" d="M0,0H27.65V27.65H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 870.935, 719.257)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-27" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 888.37, 654.161)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-28" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 860.829, 756.954)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-29" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 926.008, 719.329)" fill="#fff" opacity="0.3"/>
                                      </g>
                                      <g id="Group-5" data-name="Group">
                                        <path id="Vector-30" data-name="Vector" d="M125.936,62.968A62.968,62.968,0,1,1,62.968,0a62.968,62.968,0,0,1,62.968,62.968Z" transform="translate(846.199 1033.907) rotate(-75)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-31" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 880.661, 943.015)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-32" data-name="Vector" d="M0,0H27.65V27.65H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 928.375, 970.495)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-33" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 945.821, 905.396)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-34" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 918.279, 1008.189)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-35" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 983.449, 970.558)" fill="#fff" opacity="0.3"/>
                                      </g>
                                      <g id="Group-6" data-name="Group">
                                        <path id="Vector-36" data-name="Vector" d="M125.936,62.968A62.968,62.968,0,1,1,62.968,0a62.968,62.968,0,0,1,62.968,62.968Z" transform="translate(637.131 1012.618) rotate(-75)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-37" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 671.593, 921.731)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-38" data-name="Vector" d="M0,0H27.65V27.65H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 719.307, 949.209)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-39" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 736.753, 884.112)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-40" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 709.211, 986.905)" fill="#fff" opacity="0.3"/>
                                        <path id="Vector-41" data-name="Vector" d="M0,0H47.716V47.716H0Z" transform="matrix(0.5, 0.866, -0.866, 0.5, 774.381, 949.273)" fill="#fff" opacity="0.3"/>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g  transform="matrix(1, 0, 0, 1, 748.2, 808.55)" filter="url(#Vector-2)">
                                  <path id="Vector-42" data-name="Vector" d="M10.342,72.963,5.373,65.542l4.969-7.407,4.969,7.407ZM372.869,58.136l4.969,7.407-4.969,7.407L367.9,65.542Zm11.344,7.407L352.8,131.084H31.414L0,65.542,31.414,0h321.4ZM373.8,50.714l-9.773,14.828L373.8,80.37l7.109-14.828ZM3.308,65.542,10,79.5l9.2-13.961L10,51.581Zm369.92,16-10.551-16,10.551-16L350.9,2.939H33.3L10.566,50.406l9.968,15.136L10.566,80.679l22.749,47.467h317.6Z" transform="matrix(1, 0, 0, 1, 2.25, 1.28)" fill="#c3a76d"/>
                                </g>
                              </g>
                            </g>
                            <text id="PRE-REGISTER" transform="translate(753.444 850.432)" fill="#fff" fontSize="35" fontWeight="700"><tspan x="57.146" y="43" xmlSpace="preserve">PRE-REGISTER</tspan></text>
                          </g>
                        </g>
                      </svg>
                    </div>

                    
                </div>

                <div className="w-full absolute -bottom-1 blur-black">
                    {/* <img src="/assets/images/bg-blur-black.png"/> */}
                </div>
            </div>
        </div>
    );
}
