import { useState } from 'react'

function LoginForm () {
  const [test, setTest] = useState('sdsdasd')

  console.log('test :>> ', test)

  return (
    <div>
      <input
        name='test'
        value={test}
        onChange={e => {
          setTest(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setTest('')
        }}
      >
        Reset
      </button>
    </div>
  )
}

export default LoginForm
