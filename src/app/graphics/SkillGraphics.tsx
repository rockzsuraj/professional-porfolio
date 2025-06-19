import React from 'react'
import Icon from '../components/icons/icons'

const SkillGraphics = () => {
    return (
        <div className='flex flex-col w-80 h-80 pt-10 md:mr-10'>
            <div className='flex pt-10'>
                <div>
                    <Icon alt='dots' src='dots.svg' width={70}/>
                </div>
                <div className='h-20 w-20 border-1 border-gray ml-50 transform -translate-y-10' />
            </div>
            <div className='flex pt-10 justify-between'>
                <div>
                    <div className='ml-0 lg:ml-5'>
                        <div className="flex flex-row pb-0 mb-0">
                            <div className="w-15 h-25 border border-primary translate-y-1/3 flex items-center justify-end">
                                <div className="w-10 h-10 border border-primary border-r-0" />
                            </div>
                            <div className="w-15 h-25 border border-primary flex items-center justify-start">
                                <div className="w-10 h-10 border border-primary border-l-0" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='transform -translate-y-10'>
                    <Icon alt='dots' src='dots.svg' width={70} />
                </div>
                <div className='h-12 w-12 border-1 border-gray' />
            </div>
        </div>
    )
}

export default SkillGraphics