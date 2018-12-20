import React from 'react';
import TaggedListEntry from './TaggedListEntry.jsx';

const Tagged = ({ downloads, editId, removeTag, addTag, add }) => {
  const taggedDownloads = downloads.map((dl, i) =>
    (<TaggedListEntry
      download={dl}
      removeTag={removeTag}
      addTag={addTag}
      add={add}
      editId={editId}
      id={i}
      key={i}
    />)
  );

  return (
    <div id="tagged">
      <h1>Tagged Download Sessions</h1>
      {taggedDownloads}
    </div>
  );
};

export default Tagged;
