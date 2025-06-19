import React from 'react'
import Icon from '../icons/icons'

const SidebarRight = () => {
    return (
        <aside className='h-full w-20'>
            <div className='h-full flex flex-col items-end'>
                <div className='h-1/2' />
                <div className="w-20 h-30 border-1 border-r-0 border-gray" />
                <div className='h-1/2' />
                <div className="w-15 h-40 border-1 border-r-0 border-gray" />
                <div className='h-1/6' />
                <div className="transform translate-x-1/2">
                    <Icon src="dots.svg" alt="dots" width={70}/>
                </div>
                <div className='h-1/4' />
            </div>
        </aside>
    )
}

export default SidebarRight