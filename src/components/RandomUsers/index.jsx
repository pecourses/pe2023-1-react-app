import { useEffect, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

function RandomUsers () {
  const [users, setUsers] = useState([]) // основні дані
  const [isFetching, setIsFetching] = useState(false) // чи іде завантаження
  const [error, setError] = useState(null) // помилка, якщо вона є

  useEffect(() => {
    setIsFetching(true)
    setError(null)
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => setUsers(data.results))
      .catch(err => setError(err))
      .finally(() => setIsFetching(false))
  }, [])

  return (
    <>
      {isFetching && <BeatLoader />}
      {error && <div style={{ color: 'red' }}>!!!ERROR!!!</div>}
      <ul>
        {!isFetching &&
          !error &&
          users.map(u => <li key={u.login.uuid}>{JSON.stringify(u)}</li>)}
      </ul>
    </>
  )
}

export default RandomUsers
