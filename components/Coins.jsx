import React from 'react'
import { Title } from './Title';

export const Coins = () => {
    return(
        <div className='coins-wrapper'>
            <div className='py-8'>
                <Title title="CURRENCIES" desc="Play daily to earn solid weekly rewards. 
                Invest in your party well and they will take good care of you." />
                

                <div className='coin-grid mx-auto grid gap-8 play-to-earn p-8  '>
                    <div className='flex flex-col items-center'>
                        <img width="300" src="/assets/images/zenny.png" alt='zenny'/>
                        <div className='color-nine px-4 flex flex-col items-center justify-center text-center '>
                            <h2 className='font-bold text-xl lg:text-3xl md:text-2xl sm:text-xl'>Zenny</h2>
                            <span className='text-sm sm:text-base lg:text-base md:text-base'>A currency to deal with day-to-day activities. It is widely accepted by all merchants and characters within Evermore Knights.</span>
                        </div>
                    </div>

                    <div className='flex flex-col  items-center'>
                        <img width="300" src="/assets/images/evergem.png" alt='evergem'/>
                        <div className='color-nine px-4 flex flex-col items-center justify-center  text-center'>
                            <h2 className='font-bold text-xl lg:text-3xl md:text-2xl sm:text-xl'>Evergem</h2>
                            <span className='text-sm sm:text-base lg:text-base md:text-base' >A highly sought-after premium currency. Used for all premium and high-end transactions both on the marketplace as well as in-game.</span>
                        </div>
                    </div>

                    <div className='flex flex-col  items-center'>
                        <img width="300" src="/assets/images/creo-engine.png" alt='creo'/>
                        <div className='color-nine px-4 flex flex-col items-center justify-center text-center '>
                            <h2 className='font-bold text-xl lg:text-3xl md:text-2xl sm:text-xl'>Creo Engine</h2>
                            <span className=' text-sm sm:text-base lg:text-base md:text-base'>A governance token that is widely used all across different games below the Creo Engine Ecosystem. Not more than a billion tokens minted and circulated</span>
                        </div>
                    </div>
                
                </div>
            </div>

        </div>
    );
}