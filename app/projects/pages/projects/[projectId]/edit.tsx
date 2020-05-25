import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery } from "blitz"
import getProject from "app/projects/queries/getProject"
import updateProject from "app/projects/mutations/updateProject"
import ProjectForm from "app/projects/components/ProjectForm"

export const EditProject: React.FC = () => {
  const router = useRouter()
  const projectId = parseInt(router?.query.projectId as string)
  const [project] = useQuery(getProject, { where: { id: projectId } })

  return (
    <div>
      <h1>Edit Project {project.id}</h1>
      <pre>{JSON.stringify(project)}</pre>

      <ProjectForm
        initialValues={project}
        onSubmit={async () => {
          try {
            const updated = await updateProject({
              where: { id: project.id },
              data: { name: "MyNewName" },
            })
            alert("Success!" + JSON.stringify(updated))
            router.push("/projects/[projectId]", `/projects/${updated.id}`)
          } catch (error) {
            console.log(error)
            alert("Error creating project " + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

const EditProjectPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Edit Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <EditProject />
        </Suspense>

        <p>
          {
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          }
        </p>
      </main>
    </div>
  )
}

export default EditProjectPage
