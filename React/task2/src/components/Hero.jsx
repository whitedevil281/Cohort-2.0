import React from 'react'
import heroBg from '../assets/download.jpg'

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${heroBg})` }} className=' bg-cover w-full h-[70%] grid grid-rows-[1fr_3fr_1fr] px-5 py-6'>
            <div></div>
            <div>dvd</div>
            <div>dvdf</div>
        </div>
    )
}

export default Hero
