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

helpers.updateSelections = (selections, dls) => {
  const selectionsNew = selections.map(sel => sel.tags);
  return helpers.generateSelectionsFromDownloads(selectionsNew, dls);
}

helpers.generateSelectionsFromDownloads = (selectionsOld, dls) => {
  const selections = [];
  dls.forEach(dl => { dl.selections = {}; });

  selectionsOld.forEach((selection, i) => {
    const tags = [];
    const downloads = [];
    selection.forEach(kVPair => tags.push(Object.assign({}, kVPair)));
    dls.forEach(dl => {
      if (helpers.isDownLoadInSelection(dl, tags)) {
        downloads.push(dl);
        dl.selections[`s${i}`] = i;
      }
    });
    selections.push({ tags, downloads })
  });
  return ({ selections, downloads: dls });
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