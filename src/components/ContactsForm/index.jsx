import { ErrorMessage, Field, Form, Formik } from 'formik'
import { USER_CONTACTS_VALIDATION_SCHEMA } from './../../utils/validationSchemas'
import styles from './ContactsForm.module.scss'
import classNames from 'classnames'

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
      {formikProps => {
        const userNameClassNames = classNames(styles.input, {
          [styles.valid]:
            formikProps.touched.userName && !formikProps.errors.userName,
          [styles.invalid]:
            formikProps.touched.userName && formikProps.errors.userName
        })
        const phoneNumberClassNames = classNames(styles.input, {
          [styles.valid]:
            formikProps.touched.phoneNumber && !formikProps.errors.phoneNumber,
          [styles.invalid]:
            formikProps.touched.phoneNumber && formikProps.errors.phoneNumber
        })
        // аналогічно для інших полів

        return (
          <Form className={styles.form}>
            <label>
              <span>Name:</span>
              <Field
                className={userNameClassNames}
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
                className={phoneNumberClassNames}
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
        )
      }}
    </Formik>
  )
}

export default ContactsForm
