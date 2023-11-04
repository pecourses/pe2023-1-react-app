import React, { Component } from 'react'

class PhonesProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      phones: [],
      isFetching: false,
      error: null
    }
  }

  componentDidMount () {
    this.setState({ isFetching: true })
    fetch('/data/phones.json')
      .then(res => res.json())
      .then(data => this.setState({ phones: data }))
      .catch(err => this.setState({ error: err }))
      .finally(() => {
        this.setState({ isFetching: false })
      })
  }

  render () {
    const { phones, isFetching, error } = this.state
    return (
      <>
        {isFetching && <div>Loading...</div>}
        {error && <div>ERROR</div>}
        <ol>
          {phones.map(p => (
            <li key={p.id}>
              {p.brand} {p.model}: {p.price}
            </li>
          ))}
        </ol>
      </>
    )
  }
}

export default PhonesProvider
