import { ErrorMessage, Field, Form, Formik } from 'formik'
import { USER_CONTACTS_VALIDATION_SCHEMA } from '../../../utils/validationSchemas'
import styles from './ContactsForm.module.scss'
import Input from '../Input'

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

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_CONTACTS_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          name='userName'
          label='Name:'
          type='text'
          placeholder='Name'
          classes={classes}
          autoFocus
        />

        <Input
          name='phoneNumber'
          label='Phone number:'
          type='text'
          placeholder='+380123456789'
          classes={classes}
        />

        <Input
          name='email'
          label='Email:'
          type='email'
          placeholder='your@mail'
          classes={classes}
        />

        <Input
          name='birthday'
          label='Birthday:'
          type='date'
          classes={classes}
        />

        <button type='submit'>Add</button>
      </Form>
    </Formik>
  )
}

export default ContactsForm
