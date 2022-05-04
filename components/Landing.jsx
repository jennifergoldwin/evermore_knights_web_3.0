import React from 'react'

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
                    <div className="flex flex-row gap-5 justify-between z-10 mt-5">
                        <button title="Coming Soon" className="btn-store"><img src="/assets/images/appstore.png"/></button>
                        <button title="Coming Soon" className="btn-store"><img src="/assets/images/googlestore.png" /></button>
                    </div>
                </div>

                <div className="w-full absolute -bottom-1 blur-black">
                    {/* <img src="/assets/images/bg-blur-black.png"/> */}
                </div>
            </div>
        </div>
    );
}