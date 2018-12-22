import React from 'react';
import TagForm from './TagForm.jsx';

const SelectionAdder = ({ id, addTag, hideAdd }) => {
  const tags = [];
  const add = (type, id, keyValue) => {
    tags.push(keyValue);
  };

  return (
    <div id="selections-adder">
      <TagForm id={id} type="sel" addTag={add} hideAdd={hideAdd} />
      <button className="create-selection" onClick={() => addTag('sel', id, tags)}>Add Selection</button>
    </div>
  );
};

export default SelectionAdder;
