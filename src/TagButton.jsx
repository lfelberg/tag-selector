import React from 'react';
import './TagButton.css';

const TagButton = ({ tag, parentId, id, removeTag }) => {
  const { name, value } = tag;
  const tagLine = `${name} : ${value}`;
  return (
    <div className="tag-button">
      {tagLine}
      <button onClick={() => removeTag(parentId, id)}>X</button>
    </div>
  );
}

export default TagButton;
