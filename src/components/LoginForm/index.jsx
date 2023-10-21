import { useState } from 'react'
import classNames from 'classnames'
import styles from './LoginForm.module.css'

const LOGIN_FORM_REG_EXP = {
  login: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!#%._].*).{8,16}$/
}

function LoginForm () {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  function handleLoginChange ({ target: { value } }) {
    setLogin(value)
  }

  function handlePasswordChange ({ target: { value } }) {
    setPassword(value)
  }

  function handleSubmit (e) {
    e.preventDefault() // відміна дефолтної поведінки
    // send request
    setLogin('')
    setPassword('')
  }

  const loginClassName = classNames(styles.formInput, {
    [styles.valid]: LOGIN_FORM_REG_EXP.login.test(login),
    [styles.invalid]: !LOGIN_FORM_REG_EXP.login.test(login)
  })

  const passwordClassName = classNames(styles.formInput, {
    [styles.valid]: LOGIN_FORM_REG_EXP.password.test(password),
    [styles.invalid]: !LOGIN_FORM_REG_EXP.password.test(password)
  })
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Login Form</h2>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          <span className={styles.labelCaption}>Login:</span>
          <input
            className={loginClassName}
            type='email'
            name='login'
            value={login}
            onChange={handleLoginChange}
            placeholder='your@mail'
            autoFocus
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.labelCaption}>Password:</span>
          <input
            className={passwordClassName}
            type='password'
            placeholder='your password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button className={styles.loginBtn} type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
