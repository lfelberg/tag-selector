import React from 'react';
import TagButton from './TagButton.jsx';
import TagForm from './TagForm.jsx';
import './styles/TaggedListEntry.css';

const TaggedListEntry = ({ download, id, editId, hoverId, removeTag, addTag, add }) => {
  const { size, time, tags, selections } = download;
  const speed = size / time;
  const stats = `${size} MB in ${time} seconds. (${speed.toFixed(2)} mb/s)`;
  const tagButtons = tags.map((tag, i) =>
    (<TagButton tag={tag} key={i} id={i} removeTag={removeTag} parentId={`dl.${id}`} />)
  );

  const editor = (id === editId) ? (<TagForm id={id} type="dl" addTag={addTag} />) : '';
  const color = (hoverId in selections) ? (<div className="selected" />) : '';

  return (
    <div className="tagged-entry">
      {color}
      <p>{stats}</p>
      <div className="tags">
        {tagButtons}
        <button className="add-tag" onClick={() => add('dl', id)}>+</button>
      </div>
      {editor}
    </div>
  );
}

export default TaggedListEntry;
