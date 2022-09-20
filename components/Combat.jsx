import React from 'react'
import { motion } from 'framer-motion';
import { Title } from './Title';

export const Combat = () => {
    const anim_top = {
        rest: {
            transform: 'translate(-4685.313px, 14404.104px)',
            opacity: 0
        },
        play: {
            transform: 'translate(-4685.313px, 14504.104px)',
            opacity: 1,
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "circIn",
            }
        }
    };

    const anim_bottom = {
        rest: {
            transform: 'translateY(20%)',
            opacity: 0
        },
        play: {
            transform: 'translateY(0%)',
            opacity: 1,
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "circIn",
            }
        }

    }

    const anim_left_1 = {
        rest: {
            transform: 'translate(-5138.313px ,14544.104px)',
            opacity: 0
        },
        play: {
            transform: 'translate(-5038.313px ,14544.104px)',
            opacity: 1,
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "circIn",
            }
        }
    }

    const anim_left_2 = {
        rest: {
            transform: 'translateX(-30%)',
            opacity: 0
        },
        play: {
            transform: 'translateX(0%)',
            opacity: 1,
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "circIn",
            }
        }
    }

    const anim_right_1 = {
        rest: {
            transform: 'translateX(50%)',
            opacity: 0
        },
        play: {
            transform: 'translateX(0%)',
            opacity: 1,
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "circIn",
            }
        }
    }
    const anim_right_2 = {
        rest: {
            transform: 'translate(-3529.313px, 14612.104px)',
            opacity: 0
        },
        play: {
            transform: 'translate(-3929.313px, 14612.104px)',
            opacity: 1,
            transition:{
                type: "spring",
                duration: 0.8,
                ease: "circIn",
            }
        }
    }
    return(
        <div className='combat-wrapper'>
            <div className="py-8">
                <Title title="TURN BASED RPG COMBAT" desc="Anime - inspired RPG combat! Strategy and planning can easily 
                turn the tide of battle. Witness awesome abilities and pristine gameplay."/>
                
                <div className="mx-auto flex justify-center w-full lg:w-10/12 md:w-10/12 sm:w-full pb-8">
                    <motion.svg initial="rest" animate="rest" whileHover="play" whileTap="play" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 1508 928">
                        <defs>
                            <clipPath id="clip-path-combat">
                            <rect id="Rectangle_136" data-name="Rectangle 136" width="1323" height="746" transform="translate(-5023.313 14487.104)" fill="#fff"/>
                            </clipPath>
                            <pattern id="pattern-combat" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1882 61">
                            <image width="1882" height="61" xlinkHref="/assets/images/Component%2026%20-%202-image2.png"/>
                            </pattern>
                            <pattern id="pattern-combat-2" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1882 114">
                            <image width="1882" height="114" xlinkHref="/assets/images/Component%2026%20-%202-image3.png"/>
                            </pattern>
                            <pattern id="pattern-combat-3" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 660 114">
                            <image width="660" height="114" xlinkHref="/assets/images/Component%2026%20-%202-image4.png"/>
                            </pattern>
                            <pattern id="pattern-combat-4" width="1" height="1" viewBox="50 0 164 574">
                            <image preserveAspectRatio="none" width="164" height="574" xlinkHref="/assets/images/Component%2026%20-%202-image5.png"/>
                            </pattern>
                            <pattern id="pattern-combat-5" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 272 46">
                            <image width="272" height="46" xlinkHref="/assets/images/Component%2026%20-%202-image6.png"/>
                            </pattern>
                            <pattern id="pattern-combat-6" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 623 180">
                            <image width="623" height="180" xlinkHref="/assets/images/Component%2026%20-%202-image7.png"/>
                            </pattern>
                            <pattern id="pattern-combat-7" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 51 23">
                            <image width="51" height="23" xlinkHref="/assets/images/Component%2026%20-%202-image8.png"/>
                            </pattern>
                            <pattern id="pattern-combat-8" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 933 176">
                            <image width="933" height="176" xlinkHref="/assets/images/Component%2026%20-%202-image9.png"/>
                            </pattern>
                            <pattern id="pattern-combat-9" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 296 238">
                            <image width="296" height="238" xlinkHref="/assets/images/Component%2026%20-%202-image15.png"/>
                            </pattern>
                            <pattern id="pattern-combat-10" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 674 486">
                            <image width="674" height="486" xlinkHref="/assets/images/Component%2026%20-%202-image16.png"/>
                            </pattern>
                            <pattern id="pattern-combat-11" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 218 147">
                            <image width="218" height="147" xlinkHref="/assets/images/Component%2026%20-%202-image17.png"/>
                            </pattern>
                            <pattern id="pattern-combat-12" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 351 334">
                            <image width="351" height="334" xlinkHref="/assets/images/Component%2026%20-%202-image18.png"/>
                            </pattern>
                            <pattern id="pattern-combat-13" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 20 24">
                            <image width="20" height="24" xlinkHref="/assets/images/Component%2026%20-%202-image20.png"/>
                            </pattern>
                            <pattern id="pattern-combat-14" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 77 22">
                            <image width="77" height="22" xlinkHref="/assets/images/Component%2026%20-%202-image21.png"/>
                            </pattern>
                            <pattern id="pattern-combat-15" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 20 25">
                            <image width="20" height="25" xlinkHref="/assets/images/Component%2026%20-%202-image22.png"/>
                            </pattern>
                            <pattern id="pattern-combat-16" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 59 18">
                            <image width="59" height="18" xlinkHref="/assets/images/Component%2026%20-%202-image23.png"/>
                            </pattern>
                            <pattern id="pattern-combat-17" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 279 21">
                            <image width="279" height="21" xlinkHref="/assets/images/Component%2026%20-%202-image24.png"/>
                            </pattern>
                            <pattern id="pattern-combat-18" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 62 63">
                            <image width="62" height="63" xlinkHref="/assets/images/Component%2026%20-%202-image25.png"/>
                            </pattern>
                            <pattern id="pattern-combat-19" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 334 174">
                            <image width="334" height="174" xlinkHref="/assets/images/Component%2026%20-%202-image27.png"/>
                            </pattern>
                            <linearGradient id="linear-gradient-combat" x1="1.038" y1="-0.039" x2="0.455" y2="0.5" gradientUnits="objectBoundingBox">
                                <stop offset="0" stopColor="#fff"/>
                                <stop offset="1" stopColor="#434343"/>
                            </linearGradient>
                            <linearGradient id="linear-gradient-combat-2" x1="1" y1="0" x2="0.281" y2="0.734" xlinkHref="#linear-gradient-combat"/>
                            <linearGradient id="linear-gradient-combat-3" x1="-0.115" y1="1" x2="1" y2="0" xlinkHref="#linear-gradient-combat"/>
                            <linearGradient id="linear-gradient-combat-4" x1="1" y1="0" x2="-0.259" y2="1.276" xlinkHref="#linear-gradient-combat"/>
                            <linearGradient id="linear-gradient-combat-9" x1="1.038" y1="1.039" x2="0.455" y2="0.5" xlinkHref="#linear-gradient-combat"/>
                            <linearGradient id="linear-gradient-combat-10" x1="1" y1="1" x2="0.281" y2="0.266" xlinkHref="#linear-gradient-combat"/>
                            <linearGradient id="linear-gradient-combat-11" x1="-0.115" y1="0" x2="1" y2="1" xlinkHref="#linear-gradient-combat"/>
                            <linearGradient id="linear-gradient-combat-12" x1="1" y1="1" x2="-0.259" y2="-0.276" xlinkHref="#linear-gradient-combat"/>
                        </defs>
                        <g id="Component_26_2" data-name="Component 26 – 2" transform="translate(13 33)">
                            <g id="Group_1717" data-name="Group 1717" transform="translate(41.385 32.137)">
                            <rect id="Rectangle_137" data-name="Rectangle 137" width="1422.295" height="821.786" transform="translate(-13.885 -12.637)" fill="#c1bfad"/>
                            <path id="Path_2071" data-name="Path 2071" d="M1408.278,811.649H-13.753a2.647,2.647,0,0,1-2.632-2.663V-12.474a2.647,2.647,0,0,1,2.632-2.663H1408.278a2.647,2.647,0,0,1,2.632,2.663V808.986A2.647,2.647,0,0,1,1408.278,811.649Zm-1419.4-5.325H1405.646V-9.812H-11.121Z" transform="translate(0 0)" fill="#231f20"/>
                            </g>
                            <g id="Group_1739" data-name="Group 1739" transform="translate(-222 -2522)">
                            <rect id="Rectangle_142" data-name="Rectangle 142" width="1328" height="748" transform="translate(299 2579)" fill="#070707"/>
                            <g id="Mask_Group_55" data-name="Mask Group 55" transform="translate(5322.313 -11910.104)" clipPath="url(#clip-path-combat)">
                                <rect id="Rectangle_141" data-name="Rectangle 141" width="1328" height="748" transform="translate(-5023.313 14492.104)" fill="#070707"/>
                                <image id="BG" width="2455" height="945" transform="translate(-6138.313 14436.104)" xlinkHref="/assets/images/Component%2026%20-%202-image.png"/>
                                <rect id="Layer_14" data-name="Layer 14" width="1280" height="41" transform="translate(-4232.313 15192.104)" fill="url(#pattern-combat)"/>
                                <rect id="Layer_14_copy" data-name="Layer 14 copy" width="1296" height="79" transform="translate(-5868.313 15154.104)" fill="url(#pattern-combat-2)"/>
                                <rect id="Layer_46" data-name="Layer 46" width="454" height="79" transform="translate(-5025.313 15154.104)" fill="url(#pattern-combat-3)"/>
                                <motion.rect variants={anim_left_1} id="tba" width="164" height="574" transform="translate(-5038.313 14544.104)" fill="url(#pattern-combat-4)"/>
                                <motion.g variants={anim_bottom} id="Group_1747" data-name="Group 1747">
                                    <rect id="crystal" width="182" height="31" transform="translate(-4485.313 15196.104)" fill="url(#pattern-combat-5)"/>
                                    <rect id="_0_10" data-name="  0/10" width="33" height="14" transform="translate(-4527.313 15207.104)" fill="url(#pattern-combat-7)"/>
                                </motion.g>
                                {/* <motion.rect variants={anim_bottom_3} id="crystal" width="182" height="31" transform="translate(-4485.313 15196.104)" fill="url(#pattern-combat-5)"/> */}
                                <motion.g variants={anim_bottom} id="Group_1745" data-name="Group 1745">
                                    <g id="skill_icon" data-name="skill icon" transform="translate(-4153.685 15029.749)">
                                        <rect id="Layer_6_copy_4" data-name="Layer 6 copy 4" width="430" height="124" transform="translate(0.372 91.356)" fill="url(#pattern-combat-6)"/>
                                    </g>
                                    <image id="cooldpwm" width="153" height="18" transform="translate(-4131.313 15195.104)" xlinkHref="/assets/images/Component%2026%20-%202-image28.png"/>
                                </motion.g>
                                {/* <motion.rect variants={anim_bottom_4} id="_0_10" data-name="  0/10" width="33" height="14" transform="translate(-4527.313 15207.104)" fill="url(#pattern-combat-7)"/> */}
                                {/* <motion.rect variants={anim_top} id="HP_BOSS" data-name="HP BOSS" width="644" height="121" transform="translate(-4685.313 14504.104)" fill="url(#pattern-combat-8)"/> */}
                                <motion.g variants={anim_left_2} id="Group_1744" data-name="Group 1744">
                                    <image id="Layer_23" data-name="Layer 23" width="150" height="230" transform="translate(-4809.313 14737.104)" xlinkHref="/assets/images/Component%2026%20-%202-image10.png"/>
                                    <image id="Layer_23_copy" data-name="Layer 23 copy" width="127" height="230" transform="translate(-4920.313 14788.104)" xlinkHref="/assets/images/Component%2026%20-%202-image11.png"/>
                                    <image id="Layer_24" data-name="Layer 24" width="138" height="232" transform="translate(-4817.313 14881.104)" xlinkHref="/assets/images/Component%2026%20-%202-image12.png"/>
                                    <image id="Layer_29" data-name="Layer 29" width="130" height="211" transform="translate(-4664.313 14809.104)" xlinkHref="/assets/images/Component%2026%20-%202-image13.png"/>
                                    <image id="Layer_6_copy_2" data-name="Layer 6 copy 2" width="404" height="211" transform="translate(-4927.313 14671.104)" xlinkHref="/assets/images/Component%2026%20-%202-image14.png"/>
                                </motion.g>
                                <motion.g variants={anim_right_1} id="Group_1743" data-name="Group 1743">
                                    <g id="monster" transform="translate(-4880.575 14728.66)">
                                        <rect id="Layer_28" data-name="Layer 28" width="204" height="165" transform="translate(458.263 97.445)" fill="url(#pattern-combat-9)"/>
                                        <rect id="Layer_30" data-name="Layer 30" width="464" height="334" transform="translate(676.263 0.445)" fill="url(#pattern-combat-10)"/>
                                        <rect id="Layer_26_copy" data-name="Layer 26 copy" width="150" height="101" transform="translate(560.263 258.445)" fill="url(#pattern-combat-11)"/>
                                    </g>
                                    <rect id="health_bar_copy_10" data-name="health bar copy 10" width="242" height="230" transform="translate(-4415.313 14746.104)" fill="url(#pattern-combat-12)"/>
                                </motion.g>
                                <motion.g variants={anim_bottom} id="Group_1742" data-name="Group 1742">
                                    <image id="avatar" width="208" height="621" transform="translate(-4993.313 15058.104)" xlinkHref="/assets/images/Component%2026%20-%202-image19.png"/>
                                    <rect id="element" width="13" height="16" transform="translate(-4761.313 15196.104)" fill="url(#pattern-combat-13)"/>
                                    {/* <rect id="Name_" data-name="Name  " width="53" height="15" transform="translate(-4813.313 15148.104)" fill="url(#pattern-combat-14)"/> */}
                                    <rect id="dagger" width="13" height="16" transform="translate(-4738.313 15196.104)" fill="url(#pattern-combat-15)"/>
                                    <rect id="Lv._99" data-name="Lv. 99" width="39" height="12" transform="translate(-4813.313 15199.104)" fill="url(#pattern-combat-16)"/>
                                    <rect id="health_bar" data-name="health bar" width="193" height="15" transform="translate(-4815.313 15169.104)" fill="url(#pattern-combat-17)"/>
                                </motion.g>
                                <rect id="auto_copy" data-name="auto copy" width="42" height="43" transform="translate(-3832.313 14504.104)" fill="url(#pattern-combat-18)"/>
                                <image id="pause" width="32" height="32" transform="translate(-3756.313 14509.104)" xlinkHref="/assets/images/Component%2026%20-%202-image26.png"/>
                                <motion.rect variants={anim_right_2} id="hit" width="229" height="120" transform="translate(-3929.313 14612.104)" fill="url(#pattern-combat-19)"/>
                            </g>
                            <g id="Group_1738" data-name="Group 1738" transform="translate(0 0.213)">
                                <g id="Group_1733" data-name="Group 1733" transform="translate(1661.837 2071.484) rotate(90)">
                                <g id="Group_1728" data-name="Group 1728" transform="translate(1163.303 -37.902)" style={{isolation: "isolate"}}>
                                    <path id="Path_2086" data-name="Path 2086" d="M1260.906,14.457l.04,49.859,49.824,45.249V-35.4H1165.8l45.239,50.009Z" transform="translate(-1163.918 37.287)" fill="url(#linear-gradient-combat)"/>
                                    <path id="Path_2087" data-name="Path 2087" d="M1310.156,110.837a1.88,1.88,0,0,1-1.268-.49L1259.064,65.1a1.886,1.886,0,0,1-.618-1.394l-.039-47.97-47.974.145h-.006a1.883,1.883,0,0,1-1.4-.621l-45.24-50.01a1.885,1.885,0,0,1-.325-2.029,1.886,1.886,0,0,1,1.723-1.121h144.967a1.885,1.885,0,0,1,1.885,1.885V108.951a1.885,1.885,0,0,1-1.885,1.885Zm-47.94-47.971,46.053,41.826V-34.131H1169.437L1211.262,12.1l49.023-.148h.006a1.885,1.885,0,0,1,1.885,1.884Z" transform="translate(-1163.303 37.902)" fill="#231f20"/>
                                </g>
                                <g id="Group_1729" data-name="Group 1729" transform="translate(1199.598 -12.135)" style={{isolation: "isolate"}}>
                                    <path id="Path_2088" data-name="Path 2088" d="M1264.217,30.2l.025,31.438,31.416,18.1V-1.236h-81.729L1232.776,30.3Z" transform="translate(-1212.043 3.121)" fill="url(#linear-gradient-combat-2)"/>
                                    <path id="Path_2089" data-name="Path 2089" d="M1295.043,81.011a1.88,1.88,0,0,1-.941-.252l-31.415-18.1a1.884,1.884,0,0,1-.944-1.632l-.024-29.548-29.551.089h-.006a1.885,1.885,0,0,1-1.618-.919L1211.7-.883a1.887,1.887,0,0,1-.022-1.9,1.886,1.886,0,0,1,1.64-.955h81.729a1.885,1.885,0,0,1,1.885,1.885V79.125a1.885,1.885,0,0,1-1.885,1.885Zm-29.531-21.075,27.645,15.928V.036h-76.52l16.592,27.758L1263.6,27.7a2.02,2.02,0,0,1,1.336.55,1.887,1.887,0,0,1,.554,1.334Z" transform="translate(-1211.429 3.735)" fill="#231f20"/>
                                </g>
                                <g id="Group_1730" data-name="Group 1730" transform="translate(1220.983 24.666)" style={{isolation: "isolate"}}>
                                    <rect id="Rectangle_140" data-name="Rectangle 140" width="25.126" height="25.126" transform="translate(26.258 26.257) rotate(-180)" fill="url(#linear-gradient-combat-3)"/>
                                    <path id="Path_2090" data-name="Path 2090" d="M1266.044,72.451h-25.127a1.131,1.131,0,0,1-1.131-1.131V46.193a1.131,1.131,0,0,1,1.131-1.131h25.127a1.131,1.131,0,0,1,1.131,1.131V71.32A1.131,1.131,0,0,1,1266.044,72.451Zm-24-2.262h22.865V47.324h-22.865Z" transform="translate(-1239.786 -45.062)" fill="#231f20"/>
                                </g>
                                <g id="Group_1731" data-name="Group 1731" transform="translate(1251.79 -11.451)" style={{isolation: "isolate"}}>
                                    <path id="Path_2091" data-name="Path 2091" d="M1282.135,28.7l30.128-4.9V-1.329h-25.126Z" transform="translate(-1281.004 2.46)" fill="url(#linear-gradient-combat-4)"/>
                                    <path id="Path_2092" data-name="Path 2092" d="M1281.766,29.462a1.132,1.132,0,0,1-1.116-1.318l5-30.028a1.131,1.131,0,0,1,1.116-.945h25.125a1.131,1.131,0,0,1,1.131,1.131V23.429a1.131,1.131,0,0,1-.949,1.117l-30.129,4.9A1.144,1.144,0,0,1,1281.766,29.462Zm5.961-30.028-4.586,27.527,27.622-4.494V-.567Z" transform="translate(-1280.635 2.829)" fill="#231f20"/>
                                </g>
                                </g>
                                <g id="Group_1737" data-name="Group 1737" transform="translate(387.697 2559.689)">
                                <g id="Group_1728-2" data-name="Group 1728" transform="translate(1163.303 -37.902)" style={{isolation: "isolate"}}>
                                    <path id="Path_2086-2" data-name="Path 2086" d="M1260.906,14.457l.04,49.859,49.824,45.249V-35.4H1165.8l45.239,50.009Z" transform="translate(-1163.918 37.287)" fill="url(#linear-gradient-combat)"/>
                                    <path id="Path_2087-2" data-name="Path 2087" d="M1310.156,110.837a1.88,1.88,0,0,1-1.268-.49L1259.064,65.1a1.886,1.886,0,0,1-.618-1.394l-.039-47.97-47.974.145h-.006a1.883,1.883,0,0,1-1.4-.621l-45.24-50.01a1.885,1.885,0,0,1-.325-2.029,1.886,1.886,0,0,1,1.723-1.121h144.967a1.885,1.885,0,0,1,1.885,1.885V108.951a1.885,1.885,0,0,1-1.885,1.885Zm-47.94-47.971,46.053,41.826V-34.131H1169.437L1211.262,12.1l49.023-.148h.006a1.885,1.885,0,0,1,1.885,1.884Z" transform="translate(-1163.303 37.902)" fill="#231f20"/>
                                </g>
                                <g id="Group_1729-2" data-name="Group 1729" transform="translate(1199.598 -12.135)" style={{isolation: "isolate"}}>
                                    <path id="Path_2088-2" data-name="Path 2088" d="M1264.217,30.2l.025,31.438,31.416,18.1V-1.236h-81.729L1232.776,30.3Z" transform="translate(-1212.043 3.121)" fill="url(#linear-gradient-combat-2)"/>
                                    <path id="Path_2089-2" data-name="Path 2089" d="M1295.043,81.011a1.88,1.88,0,0,1-.941-.252l-31.415-18.1a1.884,1.884,0,0,1-.944-1.632l-.024-29.548-29.551.089h-.006a1.885,1.885,0,0,1-1.618-.919L1211.7-.883a1.887,1.887,0,0,1-.022-1.9,1.886,1.886,0,0,1,1.64-.955h81.729a1.885,1.885,0,0,1,1.885,1.885V79.125a1.885,1.885,0,0,1-1.885,1.885Zm-29.531-21.075,27.645,15.928V.036h-76.52l16.592,27.758L1263.6,27.7a2.02,2.02,0,0,1,1.336.55,1.887,1.887,0,0,1,.554,1.334Z" transform="translate(-1211.429 3.735)" fill="#231f20"/>
                                </g>
                                <g id="Group_1730-2" data-name="Group 1730" transform="translate(1220.983 24.666)" style={{isolation: "isolate"}}>
                                    <rect id="Rectangle_140-2" data-name="Rectangle 140" width="25.126" height="25.126" transform="translate(26.258 26.257) rotate(-180)" fill="url(#linear-gradient-combat-3)"/>
                                    <path id="Path_2090-2" data-name="Path 2090" d="M1266.044,72.451h-25.127a1.131,1.131,0,0,1-1.131-1.131V46.193a1.131,1.131,0,0,1,1.131-1.131h25.127a1.131,1.131,0,0,1,1.131,1.131V71.32A1.131,1.131,0,0,1,1266.044,72.451Zm-24-2.262h22.865V47.324h-22.865Z" transform="translate(-1239.786 -45.062)" fill="#231f20"/>
                                </g>
                                <g id="Group_1731-2" data-name="Group 1731" transform="translate(1251.79 -11.451)" style={{isolation: "isolate"}}>
                                    <path id="Path_2091-2" data-name="Path 2091" d="M1282.135,28.7l30.128-4.9V-1.329h-25.126Z" transform="translate(-1281.004 2.46)" fill="url(#linear-gradient-combat-4)"/>
                                    <path id="Path_2092-2" data-name="Path 2092" d="M1281.766,29.462a1.132,1.132,0,0,1-1.116-1.318l5-30.028a1.131,1.131,0,0,1,1.116-.945h25.125a1.131,1.131,0,0,1,1.131,1.131V23.429a1.131,1.131,0,0,1-.949,1.117l-30.129,4.9A1.144,1.144,0,0,1,1281.766,29.462Zm5.961-30.028-4.586,27.527,27.622-4.494V-.567Z" transform="translate(-1280.635 2.829)" fill="#231f20"/>
                                </g>
                                </g>
                                <g id="Group_1733-2" data-name="Group 1733" transform="translate(370.739 3234.787) rotate(90)">
                                <g id="Group_1728-3" data-name="Group 1728" style={{isolation: "isolate"}}>
                                    <path id="Path_2086-3" data-name="Path 2086" d="M95.1,95.109l.04-49.859L144.968,0V144.968H0L45.239,94.958Z" transform="translate(1.885 1.886)" fill="url(#linear-gradient-combat-9)"/>
                                    <path id="Path_2087-3" data-name="Path 2087" d="M146.854,0a1.88,1.88,0,0,0-1.268.49L95.762,45.74a1.886,1.886,0,0,0-.618,1.394L95.1,95.1,47.13,94.958h-.006a1.883,1.883,0,0,0-1.4.621L.487,145.589a1.885,1.885,0,0,0,1.4,3.15H146.853a1.885,1.885,0,0,0,1.885-1.885V1.885A1.885,1.885,0,0,0,146.854,0ZM98.914,47.97,144.967,6.145V144.968H6.134L47.959,98.732l49.023.148h.006A1.885,1.885,0,0,0,98.874,97Z" fill="#231f20"/>
                                </g>
                                <g id="Group_1729-3" data-name="Group 1729" transform="translate(36.295 38.226)" style={{isolation: "isolate"}}>
                                    <path id="Path_2088-3" data-name="Path 2088" d="M50.288,49.538,50.314,18.1,81.729,0V80.975H0L18.847,49.443Z" transform="translate(1.885 1.885)" fill="url(#linear-gradient-combat-10)"/>
                                    <path id="Path_2089-3" data-name="Path 2089" d="M83.614,0a1.88,1.88,0,0,0-.941.252l-31.415,18.1a1.884,1.884,0,0,0-.944,1.632L50.29,49.532l-29.551-.089h-.006a1.885,1.885,0,0,0-1.618.919L.267,81.893a1.885,1.885,0,0,0,1.618,2.852H83.614A1.885,1.885,0,0,0,85.5,82.86V1.885A1.885,1.885,0,0,0,83.614,0ZM54.084,21.075,81.729,5.147V80.975H5.209L21.8,53.217l30.368.091a2.02,2.02,0,0,0,1.336-.55,1.887,1.887,0,0,0,.554-1.334Z" fill="#231f20"/>
                                </g>
                                <g id="Group_1730-3" data-name="Group 1730" transform="translate(57.68 58.782)" style={{isolation: "isolate"}}>
                                    <rect id="Rectangle_140-3" data-name="Rectangle 140" width="25.126" height="25.126" transform="translate(26.258 26.258) rotate(180)" fill="url(#linear-gradient-combat-11)"/>
                                    <path id="Path_2090-3" data-name="Path 2090" d="M26.258,0H1.131A1.131,1.131,0,0,0,0,1.131V26.258a1.131,1.131,0,0,0,1.131,1.131H26.258a1.131,1.131,0,0,0,1.131-1.131V1.131A1.131,1.131,0,0,0,26.258,0Zm-24,2.262H25.127V25.126H2.262Z" fill="#231f20"/>
                                </g>
                                <g id="Group_1731-3" data-name="Group 1731" transform="translate(88.487 89.997)" style={{isolation: "isolate"}}>
                                    <path id="Path_2091-3" data-name="Path 2091" d="M0,0,30.128,4.9V30.028H5Z" transform="translate(1.132 1.131)" fill="url(#linear-gradient-combat-12)"/>
                                    <path id="Path_2092-3" data-name="Path 2092" d="M1.131,0A1.132,1.132,0,0,0,.015,1.318l5,30.028a1.131,1.131,0,0,0,1.116.945H31.26a1.131,1.131,0,0,0,1.131-1.131V6.033a1.131,1.131,0,0,0-.949-1.117L1.313.015A1.144,1.144,0,0,0,1.131,0ZM7.092,30.028,2.506,2.5,30.129,7V30.028Z" transform="translate(0 0)" fill="#231f20"/>
                                </g>
                                </g>
                                <g id="Group_1737-2" data-name="Group 1737" transform="translate(370.739 2670.526) rotate(180)">
                                <g id="Group_1728-4" data-name="Group 1728" style={{isolation: "isolate"}}>
                                    <path id="Path_2086-4" data-name="Path 2086" d="M95.1,95.109l.04-49.859L144.968,0V144.968H0L45.239,94.958Z" transform="translate(1.885 1.886)" fill="url(#linear-gradient-combat-9)"/>
                                    <path id="Path_2087-4" data-name="Path 2087" d="M146.854,0a1.88,1.88,0,0,0-1.268.49L95.762,45.74a1.886,1.886,0,0,0-.618,1.394L95.1,95.1,47.13,94.958h-.006a1.883,1.883,0,0,0-1.4.621L.487,145.589a1.885,1.885,0,0,0,1.4,3.15H146.853a1.885,1.885,0,0,0,1.885-1.885V1.885A1.885,1.885,0,0,0,146.854,0ZM98.914,47.97,144.967,6.145V144.968H6.134L47.959,98.732l49.023.148h.006A1.885,1.885,0,0,0,98.874,97Z" fill="#231f20"/>
                                </g>
                                <g id="Group_1729-4" data-name="Group 1729" transform="translate(36.295 38.226)" style={{isolation: "isolate"}}>
                                    <path id="Path_2088-4" data-name="Path 2088" d="M50.288,49.538,50.314,18.1,81.729,0V80.975H0L18.847,49.443Z" transform="translate(1.885 1.885)" fill="url(#linear-gradient-combat-10)"/>
                                    <path id="Path_2089-4" data-name="Path 2089" d="M83.614,0a1.88,1.88,0,0,0-.941.252l-31.415,18.1a1.884,1.884,0,0,0-.944,1.632L50.29,49.532l-29.551-.089h-.006a1.885,1.885,0,0,0-1.618.919L.267,81.893a1.885,1.885,0,0,0,1.618,2.852H83.614A1.885,1.885,0,0,0,85.5,82.86V1.885A1.885,1.885,0,0,0,83.614,0ZM54.084,21.075,81.729,5.147V80.975H5.209L21.8,53.217l30.368.091a2.02,2.02,0,0,0,1.336-.55,1.887,1.887,0,0,0,.554-1.334Z" fill="#231f20"/>
                                </g>
                                <g id="Group_1730-4" data-name="Group 1730" transform="translate(57.68 58.782)" style={{isolation: "isolate"}}>
                                    <rect id="Rectangle_140-4" data-name="Rectangle 140" width="25.126" height="25.126" transform="translate(26.258 26.258) rotate(180)" fill="url(#linear-gradient-combat-11)"/>
                                    <path id="Path_2090-4" data-name="Path 2090" d="M26.258,0H1.131A1.131,1.131,0,0,0,0,1.131V26.258a1.131,1.131,0,0,0,1.131,1.131H26.258a1.131,1.131,0,0,0,1.131-1.131V1.131A1.131,1.131,0,0,0,26.258,0Zm-24,2.262H25.127V25.126H2.262Z" transform="translate(0 0)" fill="#231f20"/>
                                </g>
                                <g id="Group_1731-4" data-name="Group 1731" transform="translate(88.487 89.997)" style={{isolation: "isolate"}}>
                                    <path id="Path_2091-4" data-name="Path 2091" d="M0,0,30.128,4.9V30.028H5Z" transform="translate(1.132 1.131)" fill="url(#linear-gradient-combat-12)"/>
                                    <path id="Path_2092-4" data-name="Path 2092" d="M1.131,0A1.132,1.132,0,0,0,.015,1.318l5,30.028a1.131,1.131,0,0,0,1.116.945H31.26a1.131,1.131,0,0,0,1.131-1.131V6.033a1.131,1.131,0,0,0-.949-1.117L1.313.015A1.144,1.144,0,0,0,1.131,0ZM7.092,30.028,2.506,2.5,30.129,7V30.028Z" fill="#231f20"/>
                                </g>
                                </g>
                            </g>
                            </g>
                        </g>
                    </motion.svg>

                </div>
            </div>
        </div>
    );
}