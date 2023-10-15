import { useState } from 'react'

// rfce
function Counter () {
  // let count = 0
  const [count, setCount] = useState(0)

  function decrement (e) {
    // count = count - 1
    // перемалюй сторінку
    setCount(count - 1)
  }

  function increment (e) {
    setCount(count + 1)
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  )
}

export default Counter
