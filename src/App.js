import { Component } from 'react';
import CounterWithClasses from './components/CounterWithClasses';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 2,
    };
  }

  handleStepChange = ({ target: { value } }) => {
    this.setState({ step: Number(value) });
  };

  render() {
    return (
      <>
        <input
          type="number"
          value={this.state.step}
          onChange={this.handleStepChange}
        />
        <CounterWithClasses step={this.state.step} />
      </>
    );
  }
}

// Counter({step: 1})
// new Counter({step: 1}).render()

export default App;
