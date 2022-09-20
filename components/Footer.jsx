import React from 'react'
import Link from "next/link"

import {FaFacebookF,FaTelegramPlane,FaDiscord} from "react-icons/fa"
import {BsMedium,BsInstagram,BsTwitter} from "react-icons/bs"

export const Footer=()=>{
    return (
        <footer>
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
                  <a href="https://creoengine.com/ekpre-registration" target="_blank" rel="noreferrer" className='nav-link'>
                  PRE-REGISTER
                </a>
                    {/* <Link href="/play">
                      <a className="nav-link">PLAY DEMO</a>
                    </Link> */}
                    
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
                    <FaFacebookF/></a>

                  <a href="https://twitter.com/creo_engine" target="_blank" rel="noreferrer" className="btn-footer">
                    <BsTwitter/></a>

                  <a href="https://t.me/CreoEngineChannel" target="_blank" rel="noreferrer" className="btn-footer">
                    <FaTelegramPlane/></a>

                  <a href="https://discord.gg/creoengine" target="_blank" rel="noreferrer" className="btn-footer">
                    <FaDiscord/></a>

                  <a href="https://creoengineofficial.medium.com/" target="_blank" rel="noreferrer" className="btn-footer">
                    <BsMedium/></a>

                  <a href="https://www.instagram.com/creoengine.official/" rel="noreferrer" target="_blank" className="btn-footer">
                  <BsInstagram/>
                    </a>
                </div>

              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mb-7 mt-7 mx-3">
            <img alt="" src="/assets/images/Arrow.png"/>
            <p className="text-sm text-center text-white mt-7">© 2021 Evermore Knights. All Rights Reserved</p>
          </div>
        </footer>
    )
}