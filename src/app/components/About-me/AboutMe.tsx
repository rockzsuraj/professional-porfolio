import React from 'react'
import SectionHeading from '../heading/SectionHeading'
import AboutMeGraphics from '@/app/graphics/AboutMeGraphics'

const AboutMe = () => {
  return (
    <div className='flex flex-col'>
      <div>
        <SectionHeading title='about-me' />
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='pt-10'>
          <div className='text-gray text-4 font-light'>
            <p>
              Hello, i’m Suraj!
            </p>

            <p className='pt-5'>
              I’m a self-taught front-end developer based in Bihar, India. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            </p>

            <p className='pt-5'>
              Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
            </p>
          </div>
        </div>
        <div className='md:transform md:-translate-y-20  max-w-70 md:max-w-full'>
          <AboutMeGraphics />
        </div>
      </div>

    </div>
  )
}

export default AboutMe
