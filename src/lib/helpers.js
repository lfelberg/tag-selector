const helpers = {};

helpers.generateSelectionsFromDownloads = (sessions, downloads) => {
  const sessionsNew = Object.assign({}, sessions);

  return sessionsNew;
};

helpers.generateDownloadIds = (downloads) => {
  const downloadsNew = downloads.concat();
  downloadsNew.map((dl, i) => dl.id = i );
  return downloadsNew;
};

export default helpers;