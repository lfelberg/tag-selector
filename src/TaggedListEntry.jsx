import React from 'react';

const TaggedListEntry = ({ download }) => {
  const { size, time } = download;
  const speed = size / time;
  const stats = `${size} MB in ${time} seconds. (${speed.toFixed(1)} mb/s)`;
  return (
    <div className="tagged-entry">
      {stats}
    </div>
  );
}

export default TaggedListEntry;
