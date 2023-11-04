import { Formik } from 'formik'
import * as yup from 'yup'

const USER_VALIDATION_SCHEMA = yup.object({
  userName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z][a-z]*$/)
    .required()
})

// Formik взяв на себе керуванням станом керованого компонента
// + містить шаблонний код його обробників
function UserForm () {
  const initialValues = { userName: '' }
  // const [name, setName] = useState('')

  const handleSubmit = (values, formikBag) => {
    console.log('values :>> ', values)
    formikBag.resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {formikProps => {
        console.log(formikProps)
        return (
          <form
            onSubmit={formikProps.handleSubmit}
            onReset={formikProps.handleReset}
          >
            <input
              type='text'
              name='userName'
              value={formikProps.values.userName}
              onChange={formikProps.handleChange}
            />
            {formikProps.errors.userName && (
              <span>{formikProps.errors.userName}</span>
            )}
            <button type='submit'>Send</button>
            <button type='reset' disabled={!formikProps.dirty}>
              Reset
            </button>
          </form>
        )
      }}
    </Formik>
  )
}

export default UserForm
