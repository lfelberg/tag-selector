import React from 'react';
import TaggedListEntry from './TaggedListEntry.jsx';

const Tagged = ({ downloads }) => {
  const taggedDownloads = downloads.map(dl => (<TaggedListEntry download={dl} />));
  return (
    <div id="tagged">
      <h1>Tagged Download Sessions</h1>
      {taggedDownloads}
    </div>
  );
};

export default Tagged;
