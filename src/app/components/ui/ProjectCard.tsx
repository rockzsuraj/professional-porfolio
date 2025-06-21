'use client'
import Image from 'next/image';
import React, { FC, useState } from 'react'
import CustomLink from './Link';
import { Project } from '@/types/project';
import { formatDate } from '@/app/utils/dateFormatter';
interface Props {
    project: Project
}

const ProjectCard: FC<Props> = ({ project }) => {
    const [isPortrait, setIsPortrait] = useState(false);
    const { description, image, techStacks, status, title, url, createdAt, lastUpdated } = project;

    return (
        <div className='w-70 lg:w-90 mr-5 mb-5 border-1'>
            <div className={`relative ${isPortrait ? 'aspect-[3/4]' : 'aspect-video'}`}>
                <Image
                    alt={title}
                    src={image}
                    fill
                    className="object-contain" // Key difference from object-cover
                    onLoadingComplete={({ naturalWidth, naturalHeight }) => {
                        setIsPortrait(naturalHeight > naturalWidth);
                    }}
                />
            </div>
            <div className='text-gray flex flex-wrap border-t-1 border-b-1 pt-2 pb-2 pl-4 pr-4'>
                {
                    techStacks.filter(tech => tech !== 'major-project').map(tech => (
                        <div key={tech} className='pr-2 pl-2'>
                            <p>{tech}</p>
                        </div>
                    ))
                }
            </div>
            <div className='pt-4 pl-4 pr-4 pb-4'>
                <h1 className='text-xl'>{title}</h1>
            </div>
            <div className='pl-4 pr-4 pb-5'>
                <p className='text-gray text-sm'>{description}</p>
            </div>
            <div className='flex flex-col md:flex-row flex-wrap pb-5 '>
                {
                    status.map(s => (
                        <div key={s} className='pl-4'>
                            <CustomLink url={url}>
                                {s}
                            </CustomLink>
                        </div>
                    ))
                }
            </div>
            <div className="text-sm text-gray-500 space-y-1 pb-5 pl-4 pr-4">
                <p>Created: {formatDate(createdAt)}</p>
                <p>Last updated: {formatDate(lastUpdated)}</p>
            </div>
        </div>
    )
}

export default ProjectCard
