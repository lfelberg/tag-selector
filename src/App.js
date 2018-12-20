import React, { Component } from 'react';
import Tagged from './Tagged.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const { downloads } = props;
    const sessions = null;
    this.state = { downloads, sessions };
  }
  render() {
    const { downloads } = this.state;
    return (
      <div className="App">
        <Tagged downloads={downloads}/>
      </div>
    );
  }
}

export default App;
