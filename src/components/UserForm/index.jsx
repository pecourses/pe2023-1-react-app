import { Formik, Form, Field, ErrorMessage } from 'formik'
import { USER_VALIDATION_SCHEMA } from '../../utils/validationSchemas'

function UserForm () {
  const initialValues = { userName: '' }

  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      <Form>
        <label>
          <span>Name:</span>
          <Field type='text' name='userName' />
        </label>
        <ErrorMessage name='userName' />
        <button type='submit'>Send</button>
        <button type='reset'>Reset</button>
      </Form>
    </Formik>
  )
}

export default UserForm
