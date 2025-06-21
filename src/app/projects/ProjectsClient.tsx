'use client'
import React, { useState } from 'react'
import SectionHeading from '../components/heading/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import { Project } from '@/types/project';

interface ProjectsClientProps {
    initialProjects: Project[];
}

const ProjectsClient = ({ initialProjects }: ProjectsClientProps) => {
    const [projectsData] = useState<Project[]>(initialProjects);
    const [showAll, setShowAll] = useState(false);
    const displayProjects = showAll ? projectsData : projectsData.slice(0, 3);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    }


    return (
        <article className='flex flex-col mt-15'>
            <div className='flex flex-row items-center'>
                <div className='flex-1'>
                    <SectionHeading title='projects' />
                </div>
                <div className=''>
                    <button className='hover:animate-pulse' onClick={toggleShowAll}>
                        {!showAll ? 'Show all' : 'Show less'}
                        <span> ~~&gt;</span>
                    </button>
                </div>
            </div>
            <div className='mt-15 flex flex-wrap'>
                {
                    displayProjects?.map((project) => (
                        <div key={project.id} >
                            <ProjectCard project={project} />
                        </div>
                    ))
                }
            </div>
        </article>
    )
}

export default ProjectsClient