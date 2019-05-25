export const getLoading = state => state.fingerprintMe.loading;

export const getWarningOpen = state => state.fingerprintMe.warningOpen;

export const getEnterNameOpen = state => state.fingerprintMe.enterNameOpen;

export const getFingerprintingOpen = state =>
  state.fingerprintMe.fingerprintingOpen;

export const getFingerprint = state => state.fingerprintMe.fingerprint;

export const getFingerprintArray = state =>
  Object.keys(state.fingerprintMe.fingerprint).map((key, idx) => ({
    name: key.replace(/([A-Z])/g, " $1").trim(),
    value: state.fingerprintMe.fingerprint[key],
    stat: (idx + 1) * 50,
    key: idx
  }));

export const getFingerprintingShow = state =>
  state.fingerprintMe.fingerprintingShow;

export const getProgress = state => state.fingerprintMe.progress;

export const getName = state => state.fingerprintMe.name;

export const getShowNameShow = state => state.fingerprintMe.showNameShow;

export const getShowNameOpen = state => state.fingerprintMe.showNameOpen;

export const getMatchFoundOpen = state => state.fingerprintMe.matchFoundOpen;

export const getDeleteProgress = state => state.fingerprintMe.deleteProgress;

export const getDeleteOpen = state => state.fingerprintMe.deleteOpen;
