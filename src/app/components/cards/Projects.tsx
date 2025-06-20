import React from 'react'
import SectionHeading from '../heading/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { ProjectData } from '@/lib/constants';
import { fetchGitHubProjects } from '@/lib/fetchGithubProjects';

const Projects = async () => {
  const projectsData: ProjectData[] = await fetchGitHubProjects();

  return (
    <div className='pl-5 pr-5'>
      <SectionHeading title='projects' />
      <div className='pt-15 flex flex-wrap'>
        {
          projectsData?.map((project) => (
            <div key={project.id} >
              <ProjectCard project={project} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects