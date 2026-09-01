import type { Metadata } from 'next';
import ProjectDetail from '../../../../components/ProjectDetail';
import { PROJECTS } from '../../../content';
import { buildProjectMetadata } from '../../../project-metadata';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return buildProjectMetadata(params.slug, 'en');
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  return <ProjectDetail slug={params.slug} />;
}
