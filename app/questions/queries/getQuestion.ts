import db, { FindOneQuestionArgs } from "db"

type GetQuestionInput = {
  where: FindOneQuestionArgs["where"]
  include?: FindOneQuestionArgs["include"]
}

export default async function getQuestion({ where, include }: GetQuestionInput) {
  const question = await db.question.findOne({ where, include })

  return question
}
