import db, { ProjectCreateArgs } from "db"

type CreateProjectInput = {
  data: ProjectCreateArgs["data"]
}
export default async function createProject({ data }: CreateProjectInput) {
  const project = await db.project.create({ data })

  return project
}
