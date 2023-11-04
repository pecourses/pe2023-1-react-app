import { useState } from 'react';

// HOC - компонент вищого порядку (функція, яка приймає і повертає компонент)

function App() {
  const InnerComponentWithNewProp = withNewProp(InnerComponent);

  return <InnerComponentWithNewProp ownProp="ownProp" />;
}

export default App;

function withNewProp(WrappedComponent) {
  function WrappedComponentWithNewProp(props) {
    const [someState, setSomeState] = useState('some value');
    return <WrappedComponent newProp={someState} {...props} />;
  }

  return WrappedComponentWithNewProp;
}

function InnerComponent(props) {
  return (
    <div>
      Props:
      {props.ownProp ?? 'ownProp is missing'}
      {props.newProp ?? 'newProp is missing'}
    </div>
  );
}
