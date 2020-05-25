import db, { QuestionDeleteArgs } from "db"

type DeleteQuestionInput = {
  where: QuestionDeleteArgs["where"]
}

export default async function deleteQuestion({ where }: DeleteQuestionInput) {
  const question = await db.question.delete({ where })

  return question
}
