import React from 'react';
import './TagButton.css';

const TagButton = ({ tag, dlId, id, removeTag }) => {
  const { name, value } = tag;
  const tagLine = `${name} : ${value}`;
  return (
    <div className="tag-button">
      {tagLine}
      <button onClick={() => removeTag(dlId, id)}>X</button>
    </div>
  );
}

export default TagButton;
