import React from "react"
import { Head, Link, useRouter } from "blitz"
import createQuestion from "app/questions/mutations/createQuestion"
import QuestionForm from "app/questions/components/QuestionForm"

const NewQuestionPage: React.FC = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>New Question</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Create New Question </h1>

        <QuestionForm
          initialValues={{}}
          onSubmit={async () => {
            try {
              const question = await createQuestion({
                data: { text: "Do you live Blitz?", publishedAt: new Date() },
              })
              alert("Success!" + JSON.stringify(question))
              router.push("/questions/[questionId]", `/questions/${question.id}`)
            } catch (error) {
              alert("Error creating question " + JSON.stringify(error, null, 2))
            }
          }}
        />

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

export default NewQuestionPage
