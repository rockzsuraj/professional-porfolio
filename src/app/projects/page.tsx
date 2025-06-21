import Heading from "../components/heading/Heading";
import PageHeading from "../components/heading/PageHeading";
import ProjectCard from "../components/ui/ProjectCard";
import SmallProjectCard from "../components/ui/SmallProjectCard";
import { fetchGitHubProjects } from "@/lib/fetchGithubProjects";

const projects = async () => {
    const github = await fetchGitHubProjects();
    return (
        <div className="pl-5">
            <PageHeading title="projects" />
            <div>
                <p className="pt-2 font-extralight text-sm">
                    List of my projects
                </p>
            </div>
            <div className="pt-5">
                <Heading title="complete-apps" />
            </div>
            <div className="flex flex-row flex-wrap pt-5">
                {github?.majorProject?.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <div>
                <Heading title="small-projects" />
            </div>
            <div className="flex flex-row flex-wrap gap-6 pt-5">
                {
                    github?.minorProjects?.map(project => (
                        <SmallProjectCard key={project.id} project={project} />
                    ))
                }
            </div>
        </div>
    )
}

export default projects;