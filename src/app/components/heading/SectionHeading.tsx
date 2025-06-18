import React from 'react'

const SectionHeading = ({ title }: { title: string }) => {
    return (
        <div className='flex flex-row pt-20 items-center'>
            <span className='text-primary text-4xl'>#</span>
            <h1 className='text-4xl pl-1 font-medium pr-5'>{title}</h1>
            <div className='w-1/4 h-0.5 bg-primary' />
        </div>

    )
}

export default SectionHeading