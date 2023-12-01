import React, { useState } from 'react'
import getUsers from '../../api'
import { useData } from '../../hooks'

function UsersLoaderCustomH () {
  const [currentPage, setCurrentPage] = useState(1)
  const { data: users, isFetching, error } = useData(getUsers, currentPage)

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage => currentPage - 1)
    }
  }

  const nextPage = () => setCurrentPage(currentPage => currentPage + 1)

  return (
    <>
      {error && <div>!!!ERROR!!! {JSON.stringify(error)}</div>}
      {isFetching && <div>Loading. Please waite...</div>}
      {!error && !isFetching && (
        <>
          <button onClick={prevPage}>{'<'}</button>
          <button onClick={nextPage}>{'>'}</button>
          <ul>
            {users.map(u => (
              <li key={u.login.uuid}>{JSON.stringify(u)}</li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default UsersLoaderCustomH
