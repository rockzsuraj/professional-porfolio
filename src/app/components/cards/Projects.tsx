import React from 'react'
import SectionHeading from '../heading/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { ProjectData } from '@/lib/constants';
import axios from 'axios'

async function fetchProjects() {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/github-projects`, {
      method: 'GET',
      headers: { Accept: 'application/json' }
    });

    const data = await res.data;
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

const Projects = async () => {
  const projectsData: ProjectData[] = await fetchProjects();

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