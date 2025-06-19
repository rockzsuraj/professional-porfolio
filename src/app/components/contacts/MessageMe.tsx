import React from 'react'
import Icon from '../icons/icons'

const MessageMe = () => {
    return (
        <div className='flex flex-col border-1 p-3 flex-wrap max-w-full '>
            <div className='pb-5'>
                <p>Message me here</p>
            </div>
            <div className='flex flex-row items-center flex-wrap'>
                <div className='w-10 mr-2'>
                    <Icon alt='linkedin' src='linkedin.svg' />
                </div>
                <div className='text-gray text-sm font-light break-all'>
                    <p>https://www.linkedin.com/in/suraj-kumar01/</p>
                </div>
            </div>
            <div className='flex flex-row pt-5 items-center text-wrap'>
                <div className='shrink-0'>
                    <Icon alt='email' src='email.svg' />
                </div>
                <div className='text-gray text-sm font-light text-wrap break-all'>
                    <p>mail4suraj11@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default MessageMe