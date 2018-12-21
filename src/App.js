import React, { Component } from 'react';
import Selections from './Selections.jsx';
import Tagged from './Tagged.jsx';
import helpers from './lib/helpers.js';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let { downloads, selections } = props;
    downloads = helpers.generateDownloadIds(downloads);
    const selsDls = helpers.generateSelectionsFromDownloads(selections, downloads);
    this.state = {
      ...selsDls,
      editType: '',
      editId: -1,
      hoverId: -1,
    };

    this.removeTag = this.removeTag.bind(this);
    this.addTag = this.addTag.bind(this);
    this.add = this.add.bind(this);
    this.changeHoverId = this.changeHoverId.bind(this);
  }

  add(editType, editId) {
    this.setState({ editType, editId });
  }

  addTag(type, id, keyValuePair) {
    console.log(keyValuePair);
    const { downloads, selections } = this.state;
    const { tags } = (type === 'dl') ? downloads[id] : selections[id];
    tags.push(keyValuePair);
    this.updateAndSetState(type, id, tags);
  }

  removeTag(parent, tagId) {
    const id = parent.split('.')[1];
    let { downloads, selections } = this.state;
    const { tags } = (parent.includes('dl')) ? downloads[id] : selections[id];
    tags.splice(tagId, 1);
    this.updateAndSetState(parent, id, tags);
  }

  changeHoverId(hoverId) {
    this.setState({ hoverId: `s${hoverId}` });
  }

  updateAndSetState(parent, id, tags) {
    let { downloads, selections } = this.state;

    if (parent.includes('dl')) {
      downloads[id].tags = tags.concat();
    } else {
      selections[id].tags = tags.concat();
    }

    const selsDls = helpers.updateSelections(selections, downloads);
    this.setState({
      ...selsDls,
      editType: '',
      editId: -1,
    });
  }

  render() {
    const { downloads, selections, editType, editId, hoverId } = this.state;
    let selection = '';
    if (selections !== null) {
      selection = (
        <Selections
          selections={selections}
          add={this.add}
          addTag={this.addTag}
          removeTag={this.removeTag}
          changeHoverId={this.changeHoverId}
          editId={(editType === 'sess') ? editId : -1}
        />
      );
    }
    return (
      <div className="App">
        <Tagged
          downloads={downloads}
          removeTag={this.removeTag}
          addTag={this.addTag}
          add={this.add}
          hoverId={hoverId}
          editId={(editType === 'dl') ? editId : -1}
        />
        {selection}
      </div>
    );
  }
}

export default App;
