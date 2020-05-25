import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery } from "blitz"
import getQuestion from "app/questions/queries/getQuestion"
import deleteQuestion from "app/questions/mutations/deleteQuestion"

export const Question: React.FC = () => {
  const router = useRouter()
  const questionId = parseInt(router?.query.questionId as string)
  const [question] = useQuery(getQuestion, { where: { id: questionId } })

  return (
    <div>
      <h1>Question {question.id}</h1>
      <pre>{JSON.stringify(question)}</pre>

      {
        <Link href="/questions/[questionId]/edit" as={`/questions/${question.id}/edit`}>
          <a>Edit</a>
        </Link>
      }

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteQuestion({ where: { id: question.id } })
            router.push("/questions")
          }
        }}
      >
        Delete
      </button>
    </div>
  )
}

const ShowQuestionPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Question</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>
          {
            <Link href="/questions">
              <a>Questions</a>
            </Link>
          }
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <Question />
        </Suspense>
      </main>
    </div>
  )
}

export default ShowQuestionPage
