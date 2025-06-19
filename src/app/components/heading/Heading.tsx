'use client'
import React from 'react'

const Heading = ({ title }: { title: string }) => {
    return (
        <div className='flex flex-row pt-5 items-center'>
            <span className='text-primary text-2xl font-light'>#</span>
            <h1 className='text-2xl pl-1 font-light pr-5'>{title}</h1>
        </div>

    )
}

export default Heading;