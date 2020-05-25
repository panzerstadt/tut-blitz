import db, { FindManyQuestionArgs } from "db"

type GetQuestionsInput = {
  where?: FindManyQuestionArgs["where"]
  include?: FindManyQuestionArgs["include"]
  orderBy?: FindManyQuestionArgs["orderBy"]
  skip?: FindManyQuestionArgs["skip"]
  after?: FindManyQuestionArgs["after"]
  before?: FindManyQuestionArgs["before"]
  first?: FindManyQuestionArgs["first"]
  last?: FindManyQuestionArgs["last"]
}

export default async function getQuestions({
  where,
  include,
  orderBy,
  skip,
  after,
  before,
  first,
  last,
}: GetQuestionsInput) {
  const questions = await db.question.findMany({
    where,
    include,
    orderBy,
    skip,
    after,
    before,
    first,
    last,
  })

  return questions
}
