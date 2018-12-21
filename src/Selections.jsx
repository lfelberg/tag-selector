import React from 'react';
import SelectionsListEntry from './SelectionsListEntry.jsx';

const Selections = ({ selections, addTag, removeTag, add, editId, changeHoverId }) => {
  const selectionDownloads = selections.map((selection, i) =>
    (
      <SelectionsListEntry
        selection={selection}
        key={i}
        id={i}
        editId={editId}
        removeTag={removeTag}
        changeHoverId={changeHoverId}
        addTag={addTag}
        add={add}
      />
    )
  );
  return (
    <div id="elections">
      <h1>Selections</h1>
      {selectionDownloads}
    </div>
  );
};

export default Selections;
