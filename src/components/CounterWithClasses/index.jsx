import { Component } from 'react'

class CounterWithClasses extends Component {
  constructor (props) {
    super(props)
    console.log('constructor')

    this.state = {
      count: 0
    }
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log('componentDidUpdate')
    }
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  dec = () => {
    const {
      state: { count },
      props: { step }
    } = this
    console.log('setState')
    this.setState({ count: count - step })
  }

  inc = () => {
    const {
      state: { count },
      props: { step }
    } = this
    this.setState({ count: count + step })
  }

  render () {
    console.log('render')
    const { count } = this.state
    return (
      <div>
        Count: {count}
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
      </div>
    )
  }
}

export default CounterWithClasses
