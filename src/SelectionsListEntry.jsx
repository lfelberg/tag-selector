import React from 'react';
import SelectionsEntryStats from './SelectionsEntryStats.jsx';
import TagButton from './TagButton.jsx';
import TagForm from './TagForm.jsx';

const SelectionsListEntry = ({
  selection,
  id,
  editId,
  removeTag,
  addTag,
  add,
  changeHoverId,
}) => {
  if (selection.tags.length === 0) {
    return ('');
  }

  const editor = (id === editId) ? (<TagForm id={id} type="sel" />) : '';
  const header = (
    <div className="selection-header">
      {selection.tags.map((tag, i) =>
        (<TagButton
          tag={tag}
          key={i}
          id={i}
          parentId={`sel.${id}`}
          removeTag={removeTag}
        />)
      )}
    </div>
  );

  return (
    <div
      className="selection-entry"
      onMouseEnter={() => changeHoverId(id)}
      onMouseLeave={() => changeHoverId(-1)}
    >
      {header}
      {editor}
      <SelectionsEntryStats selection={selection} />
    </div>
  );
};

export default SelectionsListEntry;
