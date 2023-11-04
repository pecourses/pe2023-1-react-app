import DataProvider from './components/DataProvider/index';

const PhonesLoadedList = props => {
  const { data: phones, isFetching, error } = props.phonesData;
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
  );
};

// Рендер-проп - функція, яка повідомляє компоненту що необхідно відрендерити
// Цей патерн дозволяє ділитися логікою

function App() {
  return (
    <>
      {/* <DataProvider
        fileName="/data/phones.json"
        render={data => <PhonesLoadedList phonesData={data} />}
      /> */}
      <DataProvider fileName="/data/phones.json">
        {data => <PhonesLoadedList phonesData={data} />}
      </DataProvider>
    </>
  );
}

export default App;
