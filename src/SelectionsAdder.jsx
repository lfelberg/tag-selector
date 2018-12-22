import React from 'react';
import TagForm from './TagForm.jsx';

class SelectionAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tags: [] };

    this.add = this.add.bind(this);
  }

  add(type, id, keyValue) {
    const { tags } = this.state;
    tags.push(keyValue);
    this.setState({ tags });
  }

  render() {
    const { id, addTag, hideAdd } = this.props;
    const { tags } = this.state;
    const tagged = tags.map((tag, i) => (<p key={i}>{`${tag.name} : ${tag.value}`}</p>))
    return (
      <div id="selections-adder">
        <TagForm id={id} type="sel" addTag={this.add} hideAdd={hideAdd} />
        {tagged}
        <button className="create-selection" onClick={() => addTag('sel', id, tags)}>Add Selection</button>
      </div>
    );
  }
}

export default SelectionAdder;
