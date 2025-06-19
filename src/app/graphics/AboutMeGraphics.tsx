import Image from 'next/image'
import React from 'react'
import Icon from '../components/icons/icons'


const AboutMeGraphics = () => {
    return (
        <div className='relative'>
            <div className='absolute top-10 md:top-20 md:left-10'>
                <Icon alt='dots' src='dots.svg' width={70} height={70} />
            </div>
            <div className='h-80 w-50 md:h-80 md:w-80'>
                <Image alt='hoodie' width={500} height={500} src='/image/hoodie.svg' />
                <div className='absolute w-full h-0.5 bg-primary' />
            </div>
            <div className='absolute right-0 top-40 md:top-60 '>
                <Icon alt='dots' src='dots.svg' width={70} height={70} />
            </div>
        </div>
    )
}

export default AboutMeGraphics

