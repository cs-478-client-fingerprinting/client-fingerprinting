export const getLoading = state => state.fingerprintMe.loading;

export const getWarningOpen = state => state.fingerprintMe.warningOpen;

export const getEnterNameOpen = state => state.fingerprintMe.enterNameOpen;

export const getFingerprintingOpen = state =>
  state.fingerprintMe.fingerprintingOpen;

export const getFingerprint = state => state.fingerprintMe.fingerprint;

const displayFingerprintValue = val => {
  switch (typeof val) {
    case "boolean":
      return val ? "true" : "false";
    case "object":
      return val.length !== undefined
        ? val.join(",\n")
        : Object.keys(val)
            .map(key => `${key}: ${val[key]}`)
            .join(",\n");
    case "number":
    case "string":
      return val;
    default:
      return "";
  }
};

export const getFingerprintArray = state =>
  Object.keys(state.fingerprintMe.fingerprint).map((key, idx) => ({
    name: key.replace(/([A-Z])/g, " $1").trim(),
    value: displayFingerprintValue(state.fingerprintMe.fingerprint[key]),
    uniqueness: state.fingerprintMe.uniqueness[key],
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

export const getUniqueness = state => state.fingerprintMe.uniqueness;
