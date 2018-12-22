import React from 'react';
import helpers from './lib/helpers.js';

const SelectionsEntryStats = ({ selection }) => {
  const size = selection.downloads.length;
  const averageSize = helpers.computeAverage(selection.downloads, 'size');
  const averageTime = helpers.computeAverage(selection.downloads, 'time');
  const averageRate = averageSize / averageTime;
  let averages = (<p>Empty selection</p>);

  if (size > 0) {
    averages = (
      <div className="selections-entry">
        <p className="selection-count">{`${size} sessions in this selection`}</p>
        <p className="selection-average-size">{`Average size: ${averageSize.toFixed(2)} MB`}</p>
        <p className="selection-average-time">{`Average time: ${averageTime.toFixed(2)} sec`}</p>
        <p className="selection-average-rate">{`Average size: ${averageRate.toFixed(2)} (mb/s)`}</p>
      </div>
    );
  }

  return (averages);
};

export default SelectionsEntryStats;
