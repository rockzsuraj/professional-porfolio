import Image from 'next/image';
import React, { FC } from 'react'
import Button from './button';

interface ProjectProps {
    id: number;
    title: string;
    description: string;
    image: string;
    techStacks: string[];
    status: string[];
}

interface Props {
    project: ProjectProps
}

const ProjectCard: FC<Props> = ({ project }) => {
    const { description, image, techStacks, status, title } = project;
    return (
        <div className='w-70 lg:w-90 mr-5 mb-5 border-1'>
            <div className='relative h-50'>
                <Image fill alt={title} src={image} className='object-cover'/>
            </div>
            <div className='text-gray flex flex-wrap border-t-1 border-b-1 pt-2 pb-2'>
                {
                    techStacks.map(tech => (
                        <div key={tech} className='pr-2 pl-2'>
                            <p>{tech}</p>
                        </div>
                    ))
                }
            </div>
            <div className='pt-4 pl-4 pb-4'>
                <h1 className='text-xl'>{title}</h1>
            </div>
            <div className='pl-4 pb-5'>
                <p className='text-gray text-sm'>{description}</p>
            </div>
            <div className='flex flex-col md:flex-row flex-wrap'>
                {
                    status.map(s => (
                        <div key={s} className='pl-4'>
                            <Button icon>
                                {s}
                            </Button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectCard
