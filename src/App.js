import PhonesLoadedListWithLoadingData from './components/PhonesLoadedList';

// HOC - компонент вищого порядку (функція, яка приймає і повертає компонент)
function App() {
  return <PhonesLoadedListWithLoadingData url="/data/phones.json" />;
}

export default App;
