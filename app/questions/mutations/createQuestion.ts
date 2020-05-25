import db, { QuestionCreateArgs } from "db"

type CreateQuestionInput = {
  data: QuestionCreateArgs["data"]
}
export default async function createQuestion({ data }: CreateQuestionInput) {
  const question = await db.question.create({ data })

  return question
}
