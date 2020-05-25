import React, { Suspense } from "react"
import { Head, Link, useQuery } from "blitz"
import getQuestions from "app/questions/queries/getQuestions"

export const QuestionsList: React.FC = () => {
  const [questions] = useQuery(getQuestions, {})

  return (
    <ul>
      {questions.map((question) => (
        <li key={question.id}>
          <Link href="/questions/[questionId]" as={`/questions/${question.id}`}>
            <a>{question.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const QuestionsPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Questions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Questions</h1>

        <p>
          {
            <Link href="/questions/new">
              <a>Create Question</a>
            </Link>
          }
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <QuestionsList />
        </Suspense>
      </main>
    </div>
  )
}

export default QuestionsPage
