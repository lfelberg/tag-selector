import React from 'react';

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        value: '',
      },
    }
  }

  update(e) {
    const { name, value } = e.target;
    console.log(name, value)
    const { form } = this.state;
    form[name] = value;
    this.setState({ form });
  }

  render() {
    const { form } = this.state;
    const { name, value } = form;
    const { addTag, id, type } = this.props;
    return (
      <form id="editing-tag">
        <input type="text" name="name" value={name} onChange={e => this.update(e)} />
        <input type="text" name="value" value={value} onChange={e => this.update(e)} />
        <button type="button" onClick={() => addTag(type, id, { name, value })}>Add</button>
      </form>
    );
  }
}

export default TagForm;
