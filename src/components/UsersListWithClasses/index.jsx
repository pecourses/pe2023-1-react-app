import React, { Component } from 'react'

class UsersListWithClasses extends Component {
  constructor (props) {
    super(props)

    this.state = {
      users: [],
      isFetching: false,
      error: null,
      currentPage: 1
    }
  }

  loadUsers = currentPage => {
    this.setState({ isFetching: true })
    fetch(`https://randomuser.me/api/?page=${currentPage}&results=5&seed=abc`)
      .then(response => response.json())
      .then(({ results }) => this.setState({ users: results }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isFetching: false }))
  }

  componentDidMount () {
    const { currentPage } = this.state
    this.loadUsers(currentPage)
  }

  componentDidUpdate (prevProps, prevState) {
    const { currentPage: prevPage } = prevState
    const { currentPage } = this.state
    if (prevPage !== currentPage) {
      this.loadUsers(currentPage)
    }
  }

  nextPage = () => {
    const { currentPage } = this.state
    this.setState({ currentPage: currentPage + 1 })
  }

  render () {
    const { users, isFetching, error, currentPage } = this.state

    return (
      <>
        <button>{'<'}</button>
        {currentPage}
        <button onClick={this.nextPage}>{'>'}</button>
        {isFetching && <div>LOADING...</div>}
        {error && <div>!!!ERROR!!!</div>}
        {!isFetching && !error && (
          <ul>
            {users.map(u => (
              <li key={u.login.uuid}>{JSON.stringify(u)}</li>
            ))}
          </ul>
        )}
      </>
    )
  }
}
export default UsersListWithClasses
