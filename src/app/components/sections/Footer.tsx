import React from 'react'
import Icon from '../icons/icons'
import { icons } from '@/lib/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-col pb-8'>
      <div className='flex flex-row border-t-1 mt-20  justify-between'>
        <div className='flex flex-col p-10'>
          <div className='flex flex-row items-center'>
            <div className='w-7'>
              <Icon src='logo1.svg' alt='logo' />
            </div>
            <div>
              <p className='font-medium'>Suraj</p>
            </div>
            <div className='text-gray pl-10 font-light'>
              <p>
                mail4suraj11@gmail.com
              </p>
            </div>
          </div>
          <div className='pt-5'>
            <p>Full stack developer</p>
          </div>
        </div>
        <div className='mt-10 p-2'>
          <h1 className='font-medium'>Media</h1>
          <div className='flex pt-5'>
            {
              icons.map(icon => (
                <Link key={icon.alt} href={`/${icon.alt}`} className='w-10'>
                  <Icon src={icon.src} alt={icon.alt} />
                </Link>
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