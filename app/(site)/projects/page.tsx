import ProjectsCatalog from '../../../components/sections/ProjectsCatalog';

export default function ProjectsPage({
  searchParams
}: {
  searchParams: { category?: string };
}) {
  return <ProjectsCatalog initialCategory={searchParams.category} />;
}
