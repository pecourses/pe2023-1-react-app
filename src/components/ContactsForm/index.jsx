import { ErrorMessage, Field, Form, Formik } from 'formik'
import { USER_CONTACTS_VALIDATION_SCHEMA } from './../../utils/validationSchemas'

// Name, Tel, Email, Birthday
function ContactsForm () {
  const initialValues = {
    userName: '',
    phoneNumber: '',
    email: '',
    birthday: ''
  }

  const handleSubmit = (values, formikBag) => {
    console.log('values :>> ', values)
    formikBag.resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_CONTACTS_VALIDATION_SCHEMA}
    >
      <Form>
        <label>
          <span>Name:</span>
          <Field type='text' name='userName' placeholder='Name' autoFocus />
        </label>
        <ErrorMessage name='userName' />
        <label>
          <span>Phone number:</span>
          <Field type='text' name='phoneNumber' placeholder='+380123456789' />
        </label>
        <ErrorMessage name='phoneNumber' />
        <label>
          <span>Email:</span>
          <Field type='email' name='email' placeholder='your@mail' />
        </label>
        <ErrorMessage name='email' />

        <label>
          <span>Birthday:</span>
          <Field type='date' name='birthday' />
        </label>
        <ErrorMessage name='birthday' />

        <button type='submit'>Add</button>
      </Form>
    </Formik>
  )
}

export default ContactsForm
