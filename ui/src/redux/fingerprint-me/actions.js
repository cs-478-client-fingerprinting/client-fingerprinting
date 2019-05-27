import { request, sleep } from "../../utils";
import { getFingerprint, getName } from "./selectors";
import Fingerprint2 from "fingerprintjs2";

export const FINGERPRINT_CREATE = "FINGERPRINT_CREATE";
export const FINGERPRINT_SET = "FINGERPRINT_SET";
export const WARNING_CLOSE = "WARNING_CLOSE";
export const ENTER_NAME_OPEN = "ENTER_NAME_OPEN";
export const ENTER_NAME_CLOSE = "ENTER_NAME_CLOSE";
export const SHOW_NAME_OPEN = "SHOW_NAME_OPEN";
export const PROGRESS_SET = "PROGRESS_SET";
export const FINGERPRINTING_OPEN = "FINGERPRINTING_OPEN";
export const NAME_SET = "NAME_SET";
export const FINGERPRINTING_CLOSE = "FINGERPRINTING_CLOSE";
export const MATCH_FOUND_OPEN = "MATCH_FOUND_OPEN";
export const DELETE_PROGRESS_SET = "DELETE_PROGRESS_SET";
export const DELETE_OPEN = "DELETE_OPEN";
export const WARNING_OPEN = "WARNING_OPEN";
export const UNIQUENESS_SET = "UNIQUENESS_SET";

const createFingerprint = async () => {
  const results = await Fingerprint2.getPromise({
    fonts: { extendedJsFonts: true },
    excludes: { webgl: true }
  });
  const fingerprint = results.reduce((acc, cur) => {
    acc[cur.key] = cur.value;
    return acc;
  }, {});
  return fingerprint;
};

/* Actions */
export const startFingerprinting = close => async dispatch => {
  const fingerprint = await createFingerprint();
  console.log(window, fingerprint);

  await sleep(200);
  dispatch(setProgress(20));

  const res = await request("/fingerprint/check", {
    body: JSON.stringify(fingerprint),
    method: "POST"
  });

  dispatch(setFingerprint(fingerprint));
  res.name && dispatch(setName(res.name));
  res.uniqueness && dispatch(setUniqueness(res.uniqueness));
  dispatch(setProgress(100));

  await sleep(800);
  close(() => dispatch(res.exists ? openMatchFound() : openEnterName()))();
  dispatch(setProgress(0));
};

export const handleNameFormSubmit = name => (dispatch, getStore) => async e => {
  e && e.preventDefault();
  e && e.stopPropagation();
  const res = await request("/fingerprint", {
    body: { fingerprint: getFingerprint(getStore()), name },
    method: "POST"
  });
  res.uniqueness && dispatch(setUniqueness(res.uniqueness));
  dispatch(openShowName(name));
};

export const deleteFingerprint = close => async (dispatch, getStore) => {
  await sleep(200);
  dispatch(setDeleteProgress(80));
  await request("/fingerprint", {
    body: getName(getStore()),
    method: "DELETE"
  });
  dispatch(setDeleteProgress(0));
  await sleep(200);
  close(() => dispatch(openWarning()))();
  dispatch(setDeleteProgress(100));
};

/* Action Creators */
export const closeWarning = payload => ({
  type: WARNING_CLOSE,
  payload
});

export const openWarning = payload => ({
  type: WARNING_OPEN,
  payload
});

export const openEnterName = payload => ({
  type: ENTER_NAME_OPEN,
  payload
});

export const setFingerprint = payload => ({
  type: FINGERPRINT_SET,
  payload
});

export const closeEnterName = payload => ({
  type: ENTER_NAME_CLOSE,
  payload
});

export const openShowName = payload => ({
  type: SHOW_NAME_OPEN,
  payload
});

export const setProgress = payload => ({
  type: PROGRESS_SET,
  payload
});

export const openFingerprinting = payload => ({
  type: FINGERPRINTING_OPEN,
  payload
});

export const setName = payload => ({
  type: NAME_SET,
  payload
});

export const closeFingerprinting = payload => ({
  type: FINGERPRINTING_CLOSE,
  payload
});

export const openMatchFound = payload => ({
  type: MATCH_FOUND_OPEN,
  payload
});

export const openDeleting = payload => ({
  type: DELETE_OPEN,
  payload
});

export const setDeleteProgress = payload => ({
  type: DELETE_PROGRESS_SET,
  payload
});

export const setUniqueness = payload => ({
  type: UNIQUENESS_SET,
  payload
});
