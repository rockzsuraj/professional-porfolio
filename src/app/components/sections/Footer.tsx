import React from 'react'
import Icon from '../icons/icons'
import { icons } from '@/lib/constants'

const Footer = () => {
  return (
    <div className='flex flex-col pb-8'>
      <div className='flex flex-col md:flex-row border-t-1 mt-20 justify-between md:px-20'>
        <div className='flex flex-col p-10'>
          <div className='flex flex-row self-center'>
            <div className='w-7'>
              <Icon src='logo1.svg' alt='logo' />
            </div>
            <div>
              <p className='font-medium'>Suraj</p>
            </div>
            <div className='text-gray pl-2 font-light self-center'>
              <p>
                mail4suraj11@gmail.com
              </p>
            </div>
          </div>
          <div className='pt-5 self-center md:self-start'>
            <p>Full stack developer</p>
          </div>
        </div>
        <div className='self-center md:mt-10 p-2 flex flex-col items-center'>
          <h1 className='font-medium'>Media</h1>
          <div className='flex md:pt-5'>
            {
              icons.map(icon => (
                  <Icon key={icon.alt} url={icon.url} src={icon.src} alt={icon.alt} />
              ))
            }
          </div>
        </div>
      </div>
      <div className='self-center text-gray'>
        <p >© Copyright 2025. Made by Suraj</p>
      </div>
    </div>

  )
}

export default Footer