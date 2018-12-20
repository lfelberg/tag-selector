import React from 'react';
import TaggedListEntry from './TaggedListEntry.jsx';

const Tagged = ({ downloads, removeTag, addTag }) => {
  const taggedDownloads = downloads.map((dl, i) =>
    (<TaggedListEntry
      download={dl}
      removeTag={removeTag}
      addTag={addTag}
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
