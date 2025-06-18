import { notFound } from 'next/navigation';
import { projects } from '@/config/projects';

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) return notFound();

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <div className="mt-8">
        <p>{project.description}</p>
        {/* Add more project details */}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}