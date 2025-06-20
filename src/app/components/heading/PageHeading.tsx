
import React from 'react'

const PageHeading = ({ title }: { title: string }) => {
    return (
        <div className='flex flex-row pt-5 items-center'>
            <span className='text-primary text-2xl font-light'>/</span>
            <h1 className='text-2xl pl-1 pr-5 font-light'>{title}</h1>
        </div>

    )
}

export default PageHeading;