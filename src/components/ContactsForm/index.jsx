import { ErrorMessage, Field, Form, Formik } from 'formik'
import { USER_CONTACTS_VALIDATION_SCHEMA } from './../../utils/validationSchemas'
import styles from './ContactsForm.module.scss'

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
      <Form className={styles.form}>
        <label>
          <span>Name:</span>
          <Field
            className={styles.input}
            type='text'
            name='userName'
            placeholder='Name'
            autoFocus
          />
          <ErrorMessage
            name='userName'
            className={styles.error}
            component='span'
          />
        </label>

        <label>
          <span>Phone number:</span>
          <Field
            className={styles.input}
            type='text'
            name='phoneNumber'
            placeholder='+380123456789'
          />
          <ErrorMessage
            name='phoneNumber'
            className={styles.error}
            component='span'
          />
        </label>

        <label>
          <span>Email:</span>
          <Field
            className={styles.input}
            type='email'
            name='email'
            placeholder='your@mail'
          />
          <ErrorMessage
            name='email'
            className={styles.error}
            component='span'
          />
        </label>

        <label>
          <span>Birthday:</span>
          <Field className={styles.input} type='date' name='birthday' />
          <ErrorMessage
            name='birthday'
            className={styles.error}
            component='span'
          />
        </label>

        <button type='submit'>Add</button>
      </Form>
    </Formik>
  )
}

export default ContactsForm
