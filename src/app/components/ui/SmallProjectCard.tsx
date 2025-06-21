import React, { FC } from 'react'
import { Project } from '@/types/project';
import CustomLink from './Link';

const SmallProjectCard: FC<{ project: Project }> = (props) => {
    const { description, status, techStacks, title, url } = props.project
    return (
        <div className='border-1 border-gray w-60'>
            <div className='py-2 px-3'>
                <p className='text-sm text-gray font-extralight'>
                    {techStacks.join(' ')}
                </p>

            </div>
            <div className='border-t-1'>
                <h3 className='text-light py-2 px-3'>{title}</h3>
                <p className='font-extralight text-sm py-2 px-3 text-gray'>
                    {description}
                </p>
            </div>
            <div className='pl-3 pb-5'>
                {
                    status?.map(s => <CustomLink key={s} url={url} >
                        {status}
                    </CustomLink>)
                }
            </div>
        </div>
    )
}

export default SmallProjectCard
