import React from 'react'
import SectionHeading from '../heading/SectionHeading'
import MessageMe from './MessageMe'

const Contacts = () => {
    return (
        <div className='pt-50'>
            <div>
                <SectionHeading title='contacts' />
            </div>
            <div className='flex flex-row'>
                <div>
                    <p className='text-gray pt-10 font-light'>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                </div>
                <div className=''>
                    <MessageMe />
                </div>
            </div>

        </div>
    )
}

export default Contacts
