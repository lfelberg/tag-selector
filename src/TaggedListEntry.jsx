import React from 'react';
import TagButton from './TagButton.jsx';
import './TaggedListEntry.css';

const TaggedListEntry = ({ download, id, removeTag, addTag }) => {
  const { size, time, tags } = download;
  const speed = size / time;
  const stats = `${size} MB in ${time} seconds. (${speed.toFixed(2)} mb/s)`;
  const tagButtons = tags.map((tag, i) =>
    (<TagButton tag={tag} key={i} id={i} removeTag={removeTag} parentId={`dl.${id}`} />)
  );

  return (
    <div className="tagged-entry">
      <p>{stats}</p>
      <div className="tags">
        {tagButtons}
        <button className="add-tag" onClick={() => addTag(id)}>+</button>
      </div>
    </div>
  );
}

export default TaggedListEntry;
