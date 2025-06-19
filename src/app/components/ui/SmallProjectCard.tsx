import React, { FC } from 'react'
import Button from './button';

interface SmProjectProps {
    name: string;
    tech: string[];
    description: string;
    link: string;
}

const SmallProjectCard: FC<{ project: SmProjectProps }> = (props) => {
    const { description, link, name, tech } = props.project
    return (
        <div className='border-1 border-gray w-60'>
            <div className='py-2 px-3'>
                <p className='text-sm text-gray font-extralight'>
                    {tech}
                </p>

            </div>
            <div className='border-t-1'>
                <h3 className='text-light py-2 px-3'>{name}</h3>
                <p className='font-extralight text-sm py-2 px-3 text-gray'>
                    {description}
                </p>
            </div>
            <div className='pl-3'>
                <Button icon>
                    {link}
                </Button>
            </div>
        </div>
    )
}

export default SmallProjectCard
