import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery } from "blitz"
import getQuestion from "app/questions/queries/getQuestion"
import updateQuestion from "app/questions/mutations/updateQuestion"
import QuestionForm from "app/questions/components/QuestionForm"

export const EditQuestion: React.FC = () => {
  const router = useRouter()
  const questionId = parseInt(router?.query.questionId as string)
  const [question] = useQuery(getQuestion, { where: { id: questionId } })

  return (
    <div>
      <h1>Edit Question {question.id}</h1>
      <pre>{JSON.stringify(question)}</pre>

      <QuestionForm
        initialValues={question}
        onSubmit={async () => {
          try {
            const updated = await updateQuestion({
              where: { id: question.id },
              data: { text: "Do you really love Blitz?" },
            })
            alert("Success!" + JSON.stringify(updated))
            router.push("/questions/[questionId]", `/questions/${updated.id}`)
          } catch (error) {
            console.log(error)
            alert("Error creating question " + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

const EditQuestionPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Edit Question</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <EditQuestion />
        </Suspense>

        <p>
          {
            <Link href="/questions">
              <a>Questions</a>
            </Link>
          }
        </p>
      </main>
    </div>
  )
}

export default EditQuestionPage
