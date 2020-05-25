import db, { FindOneProjectArgs } from "db"

type GetProjectInput = {
  where: FindOneProjectArgs["where"]
  include?: FindOneProjectArgs["include"]
}

export default async function getProject({ where, include }: GetProjectInput) {
  const project = await db.project.findOne({ where, include })

  return project
}
