import db, { FindManyProjectArgs } from "db"

type GetProjectsInput = {
  where: FindManyProjectArgs["where"]
  include?: FindManyProjectArgs["include"]
  orderBy?: FindManyProjectArgs["orderBy"]
  skip?: FindManyProjectArgs["skip"]
  after?: FindManyProjectArgs["after"]
  before?: FindManyProjectArgs["before"]
  first?: FindManyProjectArgs["first"]
  last?: FindManyProjectArgs["last"]
}

export default async function getProjects({
  where,
  include,
  orderBy,
  skip,
  after,
  before,
  first,
  last,
}: GetProjectsInput) {
  const projects = await db.project.findMany({
    where,
    include,
    orderBy,
    skip,
    after,
    before,
    first,
    last,
  })

  return projects
}
