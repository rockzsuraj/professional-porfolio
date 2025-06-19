import React from 'react'
import SectionHeading from '../heading/SectionHeading'
import AboutMeGraphics from '@/app/graphics/AboutMeGraphics'
import About from '../shared/About'

const AboutMe = () => {
  return (
    <div className='flex flex-col'>
      <div>
        <SectionHeading title='about-me' />
      </div>
      <div className='flex flex-col md:flex-row'>
        <About />
        <div className='md:transform md:-translate-y-20  max-w-70 md:max-w-full'>
          <AboutMeGraphics />
        </div>
      </div>

    </div>
  )
}

export default AboutMe
