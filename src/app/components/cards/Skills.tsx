import React from 'react'
import SectionHeading from '../heading/SectionHeading'
import { skills } from '@/lib/constants'
import SkillGraphics from '@/app/graphics/SkillGraphics'
import SkillCard from '../ui/SkillCard'

const Skills = () => {
    return (
        <div className='flex flex-col'>
            <div>
                <SectionHeading title='skills' />
            </div>
            <div className='flex flex-col lg:flex-row mt-10'>
                <div className=''>
                    <SkillGraphics />
                </div>
                <div className='pt-20'>
                    <SkillCard />
                </div>
            </div>
        </div>
    )
}

export default Skills
