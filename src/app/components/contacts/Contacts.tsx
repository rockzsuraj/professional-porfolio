import React from 'react'
import SectionHeading from '../heading/SectionHeading'
import MessageMe from './MessageMe'

const Contacts = () => {
    return (
        <div className='flex flex-col md:mt-20'>
            <div>
                <SectionHeading title='contacts' />
            </div>
            <div className='flex flex-col md:flex-row justify-between items-baseline'>
                <div>
                    <p className='text-gray pt-10 font-light'>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                </div>
                <div className='mt-10 md:mt-0'>
                    <MessageMe />
                </div>
            </div>

        </div>
    )
}

export default Contacts
