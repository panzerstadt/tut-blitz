import React from "react"

type QuestionFormProps = {
  initialValues: any
  onSubmit: () => any
}

const QuestionForm: React.FC<QuestionFormProps> = ({ initialValues, onSubmit }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit()
      }}
    >
      <div>Put your form fields here. But for now, just click submit</div>
      <div>{JSON.stringify(initialValues)}</div>
      <button>Submit</button>
    </form>
  )
}

export default QuestionForm
