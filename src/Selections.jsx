import React from 'react';
import SelectionsAdder from './SelectionsAdder.jsx';
import SelectionsListEntry from './SelectionsListEntry.jsx';

const Selections = ({
  selections,
  hideAdd,
  addTag,
  removeTag,
  add,
  editId,
  changeHoverId,
  addSelection,
}) => {
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
  const adder = (addSelection) ?
    (<SelectionsAdder id={selections.length} addTag={addTag} hideAdd={hideAdd} />)
    : '';

  return (
    <div id="selections">
      <h1>Selections</h1>
      <button className="add-selection" onClick={() => add('sel')}>+</button>
      {adder}
      {selectionDownloads}
    </div>
  );
};

export default Selections;
