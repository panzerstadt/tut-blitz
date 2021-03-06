import React, { Suspense } from "react"
import { Head, Link, useQuery } from "blitz"
import getProjects from "app/projects/queries/getProjects"

export const ProjectsList: React.FC = () => {
  const [projects] = useQuery(getProjects, {})

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <Link href="/projects/[projectId]" as={`/projects/${project.id}`}>
            <a>{project.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Projects</h1>

        <p>
          {
            <Link href="/projects/new">
              <a>Create Project</a>
            </Link>
          }
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <ProjectsList />
        </Suspense>
      </main>
    </div>
  )
}

export default ProjectsPage
