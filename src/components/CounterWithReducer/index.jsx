import { useReducer } from 'react'

const initialState = { count: 0 }

// action = {type: '', payload: {}}
// reducer: (state, action) => state
const reducer = (state, action) => {
  switch (action.type) {
    case 'dec':
      return { count: state.count - 1 }
    case 'inc':
      return { count: state.count + 1 }
    case 'reset':
      return { count: action.payload }
    default:
      return state
  }
}

function CounterWithReducer () {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: 'dec' })}>-</button>
      <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>
        Reset
      </button>
    </>
  )
}

// dispatch({ type: 'dec' }) = reducer(state, { type: 'dec' })
export default CounterWithReducer
