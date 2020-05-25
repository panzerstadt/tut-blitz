import React from "react"

type ProjectFormProps = {
  initialValues: any
  onSubmit: () => any
}

const ProjectForm: React.FC<ProjectFormProps> = ({ initialValues, onSubmit }) => {
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

export default ProjectForm
