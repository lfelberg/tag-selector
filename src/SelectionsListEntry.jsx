import React from 'react';
import SelectionsEntryStats from './SelectionsEntryStats.jsx';
import TagButton from './TagButton.jsx';

const SelectionsListEntry = ({ selection, id, removeTag }) => {
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
    <div className="selection-entry">
      {header}
      <SelectionsEntryStats selection={selection} />
    </div>
  );
};

export default SelectionsListEntry;
