import React from 'react';
import SelectionsListEntry from './SelectionsListEntry.jsx';

const Selections = ({ selections, removeTag }) => {
  const selectionDownloads = selections.map((selection, i) =>
    (<SelectionsListEntry selection={selection} key={i} id={i} removeTag={removeTag} />)
  );
  return (
    <div id="elections">
      <h1>Selections</h1>
      {selectionDownloads}
    </div>
  );
};

export default Selections;
