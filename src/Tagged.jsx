import React from 'react';
import TaggedListEntry from './TaggedListEntry.jsx';

const Tagged = ({ downloads, hoverId, editId, removeTag, addTag, hideAdd, add }) => {
  const taggedDownloads = downloads.map((dl, i) =>
    (<TaggedListEntry
      download={dl}
      removeTag={removeTag}
      addTag={addTag}
      hideAdd={hideAdd}
      add={add}
      editId={editId}
      hoverId={hoverId}
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
