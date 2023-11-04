import { withDataLoading } from '../HOCs'

const PhonesLoadedList = props => {
  const { data: phones, isFetching, error } = props

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

const PhonesLoadedListWithLoadingData = withDataLoading(PhonesLoadedList)

export default PhonesLoadedListWithLoadingData
