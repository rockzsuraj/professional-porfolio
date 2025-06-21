'use client'
import React, { useState } from 'react'
import { ProjectData } from '@/lib/constants';
import SectionHeading from '../components/heading/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';

interface ProjectsClientProps {
    initialProjects: ProjectData[];
}

const ProjectsClient = ({ initialProjects }: ProjectsClientProps) => {
    const [projectsData] = useState<ProjectData[]>(initialProjects);
    const [showAll, setShowAll] = useState(false);
    const displayProjects = showAll ? projectsData : projectsData.slice(0, 3);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    }


    return (
        <article className='flex flex-col mt-15'>
            <div className='flex items-center justify-between'>
                <SectionHeading title='projects' />
                <div>
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