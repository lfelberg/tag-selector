import React from 'react';
import SelectionsListEntry from './SelectionsListEntry.jsx';

const Selections = ({ selections }) => {
  const selectionDownloads = selections.map((selection, i) =>
    (<SelectionsListEntry selection={selection} key={i} />)
  );
  return (
    <div id="elections">
      <h1>Selections</h1>
      {selectionDownloads}
    </div>
  );
};

export default Selections;
