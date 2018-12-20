import React, { Component } from 'react';
import Selections from './Selections.jsx';
import Tagged from './Tagged.jsx';
import helpers from './lib/helpers.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const { downloads, selections } = props;
    this.state = { downloads, selections };

    this.removeTag = this.removeTag.bind(this);
    this.addTag = this.addTag.bind(this);
  }

  addTag(id, keyValuePair) {
    const { downloads } = this.state;
    const { tags } = downloads[id];
    tags.push(keyValuePair);
    downloads[id].tags = tags.concat();
    this.setState({ downloads });
  }

  removeTag(dlId, tagId) {
    const { downloads } = this.state;
    const { tags } = downloads[dlId];
    downloads[dlId].tags = tags.splice(tagId, 1).concat();
    this.setState({ downloads });
  }

  render() {
    const { downloads, selections } = this.state;
    let selection = '';
    if (selections !== null) {
      selection = (<Selections downloads={downloads} selections={selections} />);
    }
    return (
      <div className="App">
        <Tagged
          downloads={downloads}
          removeTag={this.removeTag}
          addTag={this.addTag}
        />
        {selection}
      </div>
    );
  }
}

export default App;
