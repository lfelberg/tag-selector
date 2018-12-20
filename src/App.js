import React, { Component } from 'react';
import Selections from './Selections.jsx';
import Tagged from './Tagged.jsx';
import helpers from './lib/helpers.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let { downloads, selections } = props;
    downloads = helpers.generateDownloadIds(downloads);
    selections = helpers.generateSelectionsFromDownloads(selections, downloads);
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

  removeTag(parent, tagId) {
    const id = parent.split('.')[1];
    let { downloads, selections } = this.state;
    const { tags } = (parent.includes('dl')) ? downloads[id] : selections[id];
    tags.splice(tagId, 1);
    if (parent.includes('dl')) {
      downloads[id].tags = tags.concat();
    } else {
      selections[id].tags = tags.concat();
    }

    const selectionNew = helpers.updateSelections(selections, downloads);
    this.setState({ downloads, selections: selectionNew });
  }

  render() {
    const { downloads, selections } = this.state;
    let selection = '';
    if (selections !== null) {
      selection = (<Selections removeTag={this.removeTag} selections={selections} />);
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
