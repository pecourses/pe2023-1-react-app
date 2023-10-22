import { useEffect, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

function RandomUsers () {
  const [users, setUsers] = useState([]) // основні дані
  const [isFetching, setIsFetching] = useState(false) // чи іде завантаження
  const [error, setError] = useState(null) // помилка, якщо вона є

  const [results, setResults] = useState(10)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setIsFetching(true)
    setError(null)
    fetch(
      `https://randomuser.me/api/?results=${results}&page=${page}&seed=pe2023`
    )
      .then(response => response.json())
      .then(data => setUsers(data.results))
      .catch(err => setError(err))
      .finally(() => setIsFetching(false))
  }, [results, page])

  const handleResultsChange = ({ target: { value } }) => setResults(value)

  const prev = () => setPage(page === 1 ? 1 : page - 1)
  const next = () => setPage(page + 1)

  return (
    <>
      <section>
        <label>
          Results on page:{' '}
          <input
            type='number'
            value={results}
            onChange={handleResultsChange}
            min='1'
            max='20'
          />
        </label>
        <button onClick={prev}>{'<'}</button>
        <button onClick={next}>{'>'}</button>
      </section>

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
