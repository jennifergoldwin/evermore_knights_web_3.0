import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Title } from './Title';


export const World = () => {
    const variants = {
        open: { display: 'block',},
        closed: { display: 'none' },
    };
    
    const [isOpen, setIsOpen] = useState([
        {
            id: "btn-yanshu", open: false,
        },
        {
            id: "btn-arriane", open: false,
        },
        {
            id: "btn-sanahara", open: false,
        },
        {
            id: "btn-valensia", open: false,
        },
        {
            id: "btn-zanto", open: false,
        },
        {
            id: "btn-faringrad", open: false,
        },
        {
            id: "btn-grandar", open: false,
        }
    ]);
    
    function updateStatusOpen (event) {
        console.log(event)
        setIsOpen(isOpen.map(status=>
            status.id===event && status.open === false
            ? {...status, open: true} : status.id===event && status.open === true ? {...status, open: false}
            : {...status, open: false}
        ))

    }


    return(  
        <div className="world-map-wrapper w-full">
            <div className="py-8">
                <Title title="WORLD MAP" desc="Explore the beautiful world of Temeris, where your adventure awaits!"/>
                {/* <div className="w-full mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 1857.875 1063.233">
                        <defs>
                            <pattern id="pattern-world" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 2672 1528">
                                <image width="2672" height="1528" xlinkHref="/assets/images/world/ek-world.png"/>
                            </pattern>
                            <filter id="Rectangle_134" x="615.5" y="724.698" width="64" height="64" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <filter id="Rectangle_134-2" x="981.5" y="338.698" width="64" height="64" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur-2"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur-2"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <filter id="Rectangle_134-3" x="1002.5" y="647.698" width="64" height="64" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur-3"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur-3"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <filter id="Rectangle_134-4" x="1433.5" y="561.698" width="64" height="64" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur-4"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur-4"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <filter id="Rectangle_134-5" x="1538.5" y="338.698" width="64" height="64" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur-5"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur-5"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <filter id="Rectangle_134-6" x="853.5" y="826.698" width="64" height="64" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur-6"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur-6"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <filter id="Rectangle_134-7" x="406.5" y="502.617" width="64" height="64" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur-7"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur-7"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <filter id="Rectangle_134-8" x="107.5" y="502.617" width="363" height="217" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur-8"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur-8"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <pattern id="pattern-world-2" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 800 450">
                                <image width="800" height="450"xlinkHref="/assets/images/world/yashu.jpg"/>
                            </pattern>
                            <filter id="Rectangle_134-9" x="316.5" y="724.698" width="363" height="217" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur-9"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur-9"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <pattern id="pattern-world-3" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 754 450">
                                <image width="754" height="450" xlinkHref="/assets/images/world/arriane.jpg"/>
                            </pattern>
                            <filter id="Rectangle_134-10" x="682.5" y="338.698" width="363" height="217" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur-10"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur-10"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <pattern id="pattern-world-4" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 800 450">
                                <image width="800" height="450" xlinkHref="/assets/images/world/sanahara.jpg"/>
                            </pattern>
                            <filter id="Rectangle_134-11" x="1134.5" y="561.698" width="363" height="217" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur-11"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur-11"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <pattern id="pattern-world-5" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 800 450">
                                <image width="800" height="450" xlinkHref="/assets/images/world/granoar.jpg"/>
                            </pattern>
                            <filter id="Rectangle_134-12" x="1239.5" y="338.698" width="363" height="217" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur-12"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur-12"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <pattern id="pattern-world-6" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 800 450">
                                <image width="800" height="450" xlinkHref="/assets/images/world/faringard.jpg"/>
                            </pattern>
                            <filter id="Rectangle_134-13" x="703.5" y="648.198" width="363" height="217" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur-13"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur-13"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <pattern id="pattern-world-7" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 800 450">
                                <image width="800" height="450" xlinkHref="/assets/images/world/valensia.jpg"/>
                            </pattern>
                            <filter id="Rectangle_134-14" x="554.5" y="826.698" width="363" height="217" filterUnits="userSpaceOnUse">
                                <feOffset dx="3" dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="1.5" result="blur-14"/>
                                <feFlood floodOpacity="0.161"/>
                                <feComposite operator="in" in2="blur-14"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                            <pattern id="pattern-world-8" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 800 450">
                                <image width="800" height="450" xlinkHref="/assets/images/world/zanto.jpg"/>
                            </pattern>
                        </defs>
                        <g id="Group_1745" data-name="Group 1745" transform="translate(1885.938 -7005.802)">
                            <g id="Group_1742" data-name="Group 1742" transform="translate(-1916.938 20)">
                                <rect id="world_map" data-name="world map" width="1857.875" height="1063.233" transform="translate(31 6985.802)" fill="url(#pattern-world)"/>
                                <g onClick={()=>updateStatusOpen('btn-arriane')} id="btn-arriane" data-name="btn-arriane" transform="translate(815.004 7849.004)">
                                    <g transform="matrix(1, 0, 0, 1, -784, -863.2)" filter="url(#Rectangle_134)">
                                    <rect id="Rectangle_134-15" data-name="Rectangle 134" width="55" height="55" rx="6" transform="translate(617 726.2)" fill="#fff"/>
                                    </g>
                                    <path id="Icon_awesome-search" data-name="Icon awesome-search" d="M23.639,20.723l-4.667-4.667a1.123,1.123,0,0,0-.8-.328h-.763a9.732,9.732,0,1,0-1.685,1.685v.763a1.123,1.123,0,0,0,.328.8l4.667,4.667a1.119,1.119,0,0,0,1.587,0l1.325-1.325a1.129,1.129,0,0,0,0-1.592Zm-13.9-4.995a5.992,5.992,0,1,1,5.992-5.992A5.988,5.988,0,0,1,9.736,15.728Z" transform="translate(-151.487 -121.489)" fill="#776a2b"/>
                                    <g id="Rectangle_135" data-name="Rectangle 135" transform="translate(-162.004 -132.004)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5">
                                    <rect width="45" height="45" stroke="none"/>
                                    <rect x="0.25" y="0.25" width="44.5" height="44.5" fill="none"/>
                                    </g>
                                    <path id="Path_2069" data-name="Path 2069" d="M-119.858-132.865v5.586h5.887V-90h-5.887v6.754h-37.492V-90h-6.6v-37.276h6.6v-5.586Z" transform="translate(-0.785 -1.025)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5"/>
                                </g>
                                <g onClick={()=>updateStatusOpen('btn-sanahara')}  id="btn-sanahara" data-name="btn-sanahara" transform="translate(1181.004 7463.004)">
                                    <g transform="matrix(1, 0, 0, 1, -1150, -477.2)" filter="url(#Rectangle_134-2)">
                                    <rect id="Rectangle_134-16" data-name="Rectangle 134" width="55" height="55" rx="6" transform="translate(983 340.2)" fill="#fff"/>
                                    </g>
                                    <path id="Icon_awesome-search-2" data-name="Icon awesome-search" d="M23.639,20.723l-4.667-4.667a1.123,1.123,0,0,0-.8-.328h-.763a9.732,9.732,0,1,0-1.685,1.685v.763a1.123,1.123,0,0,0,.328.8l4.667,4.667a1.119,1.119,0,0,0,1.587,0l1.325-1.325a1.129,1.129,0,0,0,0-1.592Zm-13.9-4.995a5.992,5.992,0,1,1,5.992-5.992A5.988,5.988,0,0,1,9.736,15.728Z" transform="translate(-151.487 -121.489)" fill="#776a2b"/>
                                    <g id="Rectangle_135-2" data-name="Rectangle 135" transform="translate(-162.004 -132.004)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5">
                                    <rect width="45" height="45" stroke="none"/>
                                    <rect x="0.25" y="0.25" width="44.5" height="44.5" fill="none"/>
                                    </g>
                                    <path id="Path_2069-2" data-name="Path 2069" d="M-119.858-132.865v5.586h5.887V-90h-5.887v6.754h-37.492V-90h-6.6v-37.276h6.6v-5.586Z" transform="translate(-0.785 -1.025)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5"/>
                                </g>
                                <g onClick={()=>updateStatusOpen('btn-valensia')}  id="btn-valensia" data-name="btn-valensia" transform="translate(1202.004 7772.004)">
                                    <g transform="matrix(1, 0, 0, 1, -1171, -786.2)" filter="url(#Rectangle_134-3)">
                                    <rect id="Rectangle_134-17" data-name="Rectangle 134" width="55" height="55" rx="6" transform="translate(1004 649.2)" fill="#fff"/>
                                    </g>
                                    <path id="Icon_awesome-search-3" data-name="Icon awesome-search" d="M23.639,20.723l-4.667-4.667a1.123,1.123,0,0,0-.8-.328h-.763a9.732,9.732,0,1,0-1.685,1.685v.763a1.123,1.123,0,0,0,.328.8l4.667,4.667a1.119,1.119,0,0,0,1.587,0l1.325-1.325a1.129,1.129,0,0,0,0-1.592Zm-13.9-4.995a5.992,5.992,0,1,1,5.992-5.992A5.988,5.988,0,0,1,9.736,15.728Z" transform="translate(-151.487 -121.489)" fill="#776a2b"/>
                                    <g id="Rectangle_135-3" data-name="Rectangle 135" transform="translate(-162.004 -132.004)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5">
                                    <rect width="45" height="45" stroke="none"/>
                                    <rect x="0.25" y="0.25" width="44.5" height="44.5" fill="none"/>
                                    </g>
                                    <path id="Path_2069-3" data-name="Path 2069" d="M-119.858-132.865v5.586h5.887V-90h-5.887v6.754h-37.492V-90h-6.6v-37.276h6.6v-5.586Z" transform="translate(-0.785 -1.025)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5"/>
                                </g>
                                <g onClick={()=>updateStatusOpen('btn-grandar')}  id="btn-grandar" data-name="btn-grandar" transform="translate(1633.004 7686.004)">
                                    <g transform="matrix(1, 0, 0, 1, -1602, -700.2)" filter="url(#Rectangle_134-4)">
                                    <rect id="Rectangle_134-18" data-name="Rectangle 134" width="55" height="55" rx="6" transform="translate(1435 563.2)" fill="#fff"/>
                                    </g>
                                    <path id="Icon_awesome-search-4" data-name="Icon awesome-search" d="M23.639,20.723l-4.667-4.667a1.123,1.123,0,0,0-.8-.328h-.763a9.732,9.732,0,1,0-1.685,1.685v.763a1.123,1.123,0,0,0,.328.8l4.667,4.667a1.119,1.119,0,0,0,1.587,0l1.325-1.325a1.129,1.129,0,0,0,0-1.592Zm-13.9-4.995a5.992,5.992,0,1,1,5.992-5.992A5.988,5.988,0,0,1,9.736,15.728Z" transform="translate(-151.487 -121.489)" fill="#776a2b"/>
                                    <g id="Rectangle_135-4" data-name="Rectangle 135" transform="translate(-162.004 -132.004)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5">
                                    <rect width="45" height="45" stroke="none"/>
                                    <rect x="0.25" y="0.25" width="44.5" height="44.5" fill="none"/>
                                    </g>
                                    <path id="Path_2069-4" data-name="Path 2069" d="M-119.858-132.865v5.586h5.887V-90h-5.887v6.754h-37.492V-90h-6.6v-37.276h6.6v-5.586Z" transform="translate(-0.785 -1.025)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5"/>
                                </g>
                                <g onClick={()=>updateStatusOpen('btn-faringrad')}  id="btn-faringrad" data-name="btn-faringrad" transform="translate(1738.004 7463.004)">
                                    <g transform="matrix(1, 0, 0, 1, -1707, -477.2)" filter="url(#Rectangle_134-5)">
                                    <rect id="Rectangle_134-19" data-name="Rectangle 134" width="55" height="55" rx="6" transform="translate(1540 340.2)" fill="#fff"/>
                                    </g>
                                    <path id="Icon_awesome-search-5" data-name="Icon awesome-search" d="M23.639,20.723l-4.667-4.667a1.123,1.123,0,0,0-.8-.328h-.763a9.732,9.732,0,1,0-1.685,1.685v.763a1.123,1.123,0,0,0,.328.8l4.667,4.667a1.119,1.119,0,0,0,1.587,0l1.325-1.325a1.129,1.129,0,0,0,0-1.592Zm-13.9-4.995a5.992,5.992,0,1,1,5.992-5.992A5.988,5.988,0,0,1,9.736,15.728Z" transform="translate(-151.487 -121.489)" fill="#776a2b"/>
                                    <g id="Rectangle_135-5" data-name="Rectangle 135" transform="translate(-162.004 -132.004)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5">
                                    <rect width="45" height="45" stroke="none"/>
                                    <rect x="0.25" y="0.25" width="44.5" height="44.5" fill="none"/>
                                    </g>
                                    <path id="Path_2069-5" data-name="Path 2069" d="M-119.858-132.865v5.586h5.887V-90h-5.887v6.754h-37.492V-90h-6.6v-37.276h6.6v-5.586Z" transform="translate(-0.785 -1.025)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5"/>
                                </g>
                                <g onClick={()=>updateStatusOpen('btn-zanto')} id="btn-zanto" data-name="btn-zanto" transform="translate(1053.004 7951.004)">
                                    <g transform="matrix(1, 0, 0, 1, -1022, -965.2)" filter="url(#Rectangle_134-6)">
                                    <rect id="Rectangle_134-20" data-name="Rectangle 134" width="55" height="55" rx="6" transform="translate(855 828.2)" fill="#fff"/>
                                    </g>
                                    <path id="Icon_awesome-search-6" data-name="Icon awesome-search" d="M23.639,20.723l-4.667-4.667a1.123,1.123,0,0,0-.8-.328h-.763a9.732,9.732,0,1,0-1.685,1.685v.763a1.123,1.123,0,0,0,.328.8l4.667,4.667a1.119,1.119,0,0,0,1.587,0l1.325-1.325a1.129,1.129,0,0,0,0-1.592Zm-13.9-4.995a5.992,5.992,0,1,1,5.992-5.992A5.988,5.988,0,0,1,9.736,15.728Z" transform="translate(-151.487 -121.489)" fill="#776a2b"/>
                                    <g id="Rectangle_135-6" data-name="Rectangle 135" transform="translate(-162.004 -132.004)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5">
                                    <rect width="45" height="45" stroke="none"/>
                                    <rect x="0.25" y="0.25" width="44.5" height="44.5" fill="none"/>
                                    </g>
                                    <path id="Path_2069-6" data-name="Path 2069" d="M-119.858-132.865v5.586h5.887V-90h-5.887v6.754h-37.492V-90h-6.6v-37.276h6.6v-5.586Z" transform="translate(-0.785 -1.025)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5"/>
                                </g>
                                <g onClick={()=>updateStatusOpen('btn-yanshu')}  id="btn-yanshu" data-name="btn-yanshu" transform="translate(606.004 7626.923)">
                                    <g transform="matrix(1, 0, 0, 1, -575, -641.12)" filter="url(#Rectangle_134-7)">
                                    <rect id="Rectangle_134-21" data-name="Rectangle 134" width="55" height="55" rx="6" transform="translate(408 504.12)" fill="#fff"/>
                                    </g>
                                    <path   id="Icon_awesome-search-7" data-name="Icon awesome-search" d="M23.639,20.723l-4.667-4.667a1.123,1.123,0,0,0-.8-.328h-.763a9.732,9.732,0,1,0-1.685,1.685v.763a1.123,1.123,0,0,0,.328.8l4.667,4.667a1.119,1.119,0,0,0,1.587,0l1.325-1.325a1.129,1.129,0,0,0,0-1.592Zm-13.9-4.995a5.992,5.992,0,1,1,5.992-5.992A5.988,5.988,0,0,1,9.736,15.728Z" transform="translate(-151.487 -121.489)" fill="#776a2b"/>
                                    <g id="Rectangle_135-7" data-name="Rectangle 135" transform="translate(-162.004 -132.004)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5">
                                    <rect width="45" height="45" stroke="none"/>
                                    <rect x="0.25" y="0.25" width="44.5" height="44.5" fill="none"/>
                                    </g>
                                    <path id="Path_2069-7" data-name="Path 2069" d="M-119.858-132.865v5.586h5.887V-90h-5.887v6.754h-37.492V-90h-6.6v-37.276h6.6v-5.586Z" transform="translate(-0.785 -1.025)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5"/>
                                </g>
                                <motion.g  animate={isOpen[0].open ? "open" : "closed"} variants={variants} id="yanshu" data-name="yanshu" transform="translate(140 7489.919)">
                                    <g transform="matrix(1, 0, 0, 1, -109, -504.12)" filter="url(#Rectangle_134-8)">
                                    <rect id="Rectangle_134-22" data-name="Rectangle 134" width="354" height="208" rx="6" transform="translate(109 504.12)" fill="#fff"/>
                                    </g>
                                    <rect id="_02-Yanshu" data-name="02-Yanshu" width="334" height="188" transform="translate(10 9)" fill="url(#pattern-world-2)"/>
                                    <g id="Rectangle_135-8" data-name="Rectangle 135" transform="translate(7 6)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5">
                                    <rect width="340" height="195" stroke="none"/>
                                    <rect x="0.25" y="0.25" width="339.5" height="194.5" fill="none"/>
                                    </g>
                                    <path id="Path_2069-8" data-name="Path 2069" d="M156.231-132.865v22.426h24.617V39.225H155.231V66.341H-137.442V39.225h-26.5V-110.439h23.5v-22.426Z" transform="translate(168.618 137.249)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5"/>
                                    <path onClick={()=>updateStatusOpen('btn-yanshu')} id="Icon_material-close" data-name="Icon material-close" d="M18.5,8.608,17.391,7.5,13,11.892,8.608,7.5,7.5,8.608,11.892,13,7.5,17.391,8.608,18.5,13,14.107,17.391,18.5,18.5,17.391,14.107,13Z" transform="translate(321.5 4.5)" fill="#fff"/>
                                </motion.g>
                                <motion.g animate={isOpen[1].open ? "open" : "closed"} variants={variants} id="arriane" data-name="arriane" transform="translate(349 7712)">
                                    <g transform="matrix(1, 0, 0, 1, -318, -726.2)" filter="url(#Rectangle_134-9)">
                                    <rect id="Rectangle_134-23" data-name="Rectangle 134" width="354" height="208" rx="6" transform="translate(318 726.2)" fill="#fff"/>
                                    </g>
                                    <rect id="_02-Yanshu-2" data-name="02-Yanshu" width="334" height="188" transform="translate(10 9)" fill="url(#pattern-world-3)"/>
                                    <g id="Rectangle_135-9" data-name="Rectangle 135" transform="translate(7 6)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5">
                                    <rect width="340" height="195" stroke="none"/>
                                    <rect x="0.25" y="0.25" width="339.5" height="194.5" fill="none"/>
                                    </g>
                                    <path id="Path_2069-9" data-name="Path 2069" d="M156.231-132.865v22.426h24.617V39.225H155.231V66.341H-137.442V39.225h-26.5V-110.439h23.5v-22.426Z" transform="translate(168.618 137.249)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5"/>
                                    <path onClick={()=>updateStatusOpen('btn-arriane')} id="Icon_material-close-2" data-name="Icon material-close" d="M18.5,8.608,17.391,7.5,13,11.892,8.608,7.5,7.5,8.608,11.892,13,7.5,17.391,8.608,18.5,13,14.107,17.391,18.5,18.5,17.391,14.107,13Z" transform="translate(321.5 4.5)" fill="#fff"/>
                                </motion.g>
                                <motion.g animate={isOpen[2].open ? "open" : "closed"} variants={variants} id="sanahara" data-name="sanahara" transform="translate(715 7326)">
                                    <g transform="matrix(1, 0, 0, 1, -684, -340.2)" filter="url(#Rectangle_134-10)">
                                    <rect id="Rectangle_134-24" data-name="Rectangle 134" width="354" height="208" rx="6" transform="translate(684 340.2)" fill="#fff"/>
                                    </g>
                                    <rect id="_02-Yanshu-3" data-name="02-Yanshu" width="334" height="188" transform="translate(10 9)" fill="url(#pattern-world-4)"/>
                                    <g id="Rectangle_135-10" data-name="Rectangle 135" transform="translate(7 6)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5">
                                    <rect width="340" height="195" stroke="none"/>
                                    <rect x="0.25" y="0.25" width="339.5" height="194.5" fill="none"/>
                                    </g>
                                    <path id="Path_2069-10" data-name="Path 2069" d="M156.231-132.865v22.426h24.617V39.225H155.231V66.341H-137.442V39.225h-26.5V-110.439h23.5v-22.426Z" transform="translate(168.618 137.249)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5"/>
                                    <path onClick={()=>updateStatusOpen('btn-sanahara')} id="Icon_material-close-3" data-name="Icon material-close" d="M18.5,8.608,17.391,7.5,13,11.892,8.608,7.5,7.5,8.608,11.892,13,7.5,17.391,8.608,18.5,13,14.107,17.391,18.5,18.5,17.391,14.107,13Z" transform="translate(321.5 4.5)" fill="#fff"/>
                                </motion.g>
                                <motion.g animate={isOpen[6].open ? "open" : "closed"} variants={variants} id="grandar" data-name="grandar" transform="translate(1167 7549)">
                                    <g transform="matrix(1, 0, 0, 1, -1136, -563.2)" filter="url(#Rectangle_134-11)">
                                    <rect id="Rectangle_134-25" data-name="Rectangle 134" width="354" height="208" rx="6" transform="translate(1136 563.2)" fill="#fff"/>
                                    </g>
                                    <rect id="_02-Yanshu-4" data-name="02-Yanshu" width="334" height="188" transform="translate(10 9)" fill="url(#pattern-world-5)"/>
                                    <g id="Rectangle_135-11" data-name="Rectangle 135" transform="translate(7 6)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5">
                                    <rect width="340" height="195" stroke="none"/>
                                    <rect x="0.25" y="0.25" width="339.5" height="194.5" fill="none"/>
                                    </g>
                                    <path id="Path_2069-11" data-name="Path 2069" d="M156.231-132.865v22.426h24.617V39.225H155.231V66.341H-137.442V39.225h-26.5V-110.439h23.5v-22.426Z" transform="translate(168.618 137.249)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5"/>
                                    <path onClick={()=>updateStatusOpen('btn-grandar')}  id="Icon_material-close-4" data-name="Icon material-close" d="M18.5,8.608,17.391,7.5,13,11.892,8.608,7.5,7.5,8.608,11.892,13,7.5,17.391,8.608,18.5,13,14.107,17.391,18.5,18.5,17.391,14.107,13Z" transform="translate(321.5 4.5)" fill="#fff"/>
                                </motion.g>
                                <motion.g animate={isOpen[5].open ? "open" : "closed"} variants={variants} id="faringrad" data-name="faringrad" transform="translate(1272 7326)">
                                    <g transform="matrix(1, 0, 0, 1, -1241, -340.2)" filter="url(#Rectangle_134-12)">
                                    <rect id="Rectangle_134-26" data-name="Rectangle 134" width="354" height="208" rx="6" transform="translate(1241 340.2)" fill="#fff"/>
                                    </g>
                                    <rect id="_02-Yanshu-5" data-name="02-Yanshu" width="334" height="188" transform="translate(10 9)" fill="url(#pattern-world-6)"/>
                                    <g id="Rectangle_135-12" data-name="Rectangle 135" transform="translate(7 6)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5">
                                    <rect width="340" height="195" stroke="none"/>
                                    <rect x="0.25" y="0.25" width="339.5" height="194.5" fill="none"/>
                                    </g>
                                    <path id="Path_2069-12" data-name="Path 2069" d="M156.231-132.865v22.426h24.617V39.225H155.231V66.341H-137.442V39.225h-26.5V-110.439h23.5v-22.426Z" transform="translate(168.618 137.249)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5"/>
                                    <path onClick={()=>updateStatusOpen('btn-faringrad')}  id="Icon_material-close-5" data-name="Icon material-close" d="M18.5,8.608,17.391,7.5,13,11.892,8.608,7.5,7.5,8.608,11.892,13,7.5,17.391,8.608,18.5,13,14.107,17.391,18.5,18.5,17.391,14.107,13Z" transform="translate(321.5 4.5)" fill="#fff"/>
                                </motion.g>
                                <motion.g animate={isOpen[3].open ? "open" : "closed"} variants={variants} id="valensia" data-name="valensia" transform="translate(736 7635.5)">
                                    <g transform="matrix(1, 0, 0, 1, -705, -649.7)" filter="url(#Rectangle_134-13)">
                                    <rect id="Rectangle_134-27" data-name="Rectangle 134" width="354" height="208" rx="6" transform="translate(705 649.7)" fill="#fff"/>
                                    </g>
                                    <rect id="_02-Yanshu-6" data-name="02-Yanshu" width="334" height="188" transform="translate(10 9)" fill="url(#pattern-world-7)"/>
                                    <g id="Rectangle_135-13" data-name="Rectangle 135" transform="translate(7 6)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5">
                                    <rect width="340" height="195" stroke="none"/>
                                    <rect x="0.25" y="0.25" width="339.5" height="194.5" fill="none"/>
                                    </g>
                                    <path id="Path_2069-13" data-name="Path 2069" d="M156.231-132.865v22.426h24.617V39.225H155.231V66.341H-137.442V39.225h-26.5V-110.439h23.5v-22.426Z" transform="translate(168.618 137.249)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5"/>
                                    <path onClick={()=>updateStatusOpen('btn-valensia')}  id="Icon_material-close-6" data-name="Icon material-close" d="M18.5,8.608,17.391,7.5,13,11.892,8.608,7.5,7.5,8.608,11.892,13,7.5,17.391,8.608,18.5,13,14.107,17.391,18.5,18.5,17.391,14.107,13Z" transform="translate(321.5 4.5)" fill="#fff"/>
                                </motion.g>
                                <motion.g animate={isOpen[4].open ? "open" : "closed"} variants={variants} id="zanto" data-name="zanto" transform="translate(587 7814)">
                                    <g transform="matrix(1, 0, 0, 1, -556, -828.2)" filter="url(#Rectangle_134-14)">
                                    <rect id="Rectangle_134-28" data-name="Rectangle 134" width="354" height="208" rx="6" transform="translate(556 828.2)" fill="#fff"/>
                                    </g>
                                    <rect id="_02-Yanshu-7" data-name="02-Yanshu" width="334" height="188" transform="translate(10 9)" fill="url(#pattern-world-8)"/>
                                    <g id="Rectangle_135-14" data-name="Rectangle 135" transform="translate(7 6)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5">
                                    <rect width="340" height="195" stroke="none"/>
                                    <rect x="0.25" y="0.25" width="339.5" height="194.5" fill="none"/>
                                    </g>
                                    <path id="Path_2069-14" data-name="Path 2069" d="M156.231-132.865v22.426h24.617V39.225H155.231V66.341H-137.442V39.225h-26.5V-110.439h23.5v-22.426Z" transform="translate(168.618 137.249)" fill="none" stroke="#776a2b" strokeLinejoin="round" strokeWidth="0.5"/>
                                    <path onClick={()=>updateStatusOpen('btn-zanto')}  id="Icon_material-close-7" data-name="Icon material-close" d="M18.5,8.608,17.391,7.5,13,11.892,8.608,7.5,7.5,8.608,11.892,13,7.5,17.391,8.608,18.5,13,14.107,17.391,18.5,18.5,17.391,14.107,13Z" transform="translate(321.5 4.5)" fill="#fff"/>
                                </motion.g>
                            </g>
                        </g>
                    </svg>

                </div> */}
                <div className="w-full pb-8">
                    <img src="/assets/images/world/ek-world.png"/>
                </div>
            </div>
        </div>
    );

}