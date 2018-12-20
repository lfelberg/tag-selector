const helpers = {};

helpers.isDownLoadInSelection = (download, tags) => {
  let isIn = false;

  download.tags.forEach(dlTag => {
    tags.forEach(selectionTag => {
      if (dlTag.name.toLowerCase() === selectionTag.name.toLowerCase()) {
        if (dlTag.value.toLowerCase() === selectionTag.value.toLowerCase()) {
          isIn = true;
        }
      }
    });
  });
  return isIn;
};

helpers.generateSelectionsFromDownloads = (selections, dls) => {
  const selectionsNew = [];
  selections.forEach((selection, i) => {
    const tags = [];
    const downloads = [];
    selection.forEach(kVPair => tags.push(Object.assign({}, kVPair)));
    dls.forEach(dl => {
      if (helpers.isDownLoadInSelection(dl, tags)) {
        downloads.push(dl);
      }
    });
    selectionsNew.push({ tags, downloads })
  });
  return selectionsNew;
};

helpers.generateDownloadIds = (downloads) => {
  const downloadsNew = downloads.concat();
  downloadsNew.map((dl, i) => dl.id = i );
  return downloadsNew;
};

helpers.computeAverage = (collection, property) => {
  const average = collection.reduce((avg, coll) => avg + coll[property], 0);
  return average / collection.length;
};

export default helpers;