import { request } from "../../../utils";
import { getFingerprint, getName } from "./selectors";
import sleep from "../../../utils/sleep";

export const FINGERPRINT_CHECK_FETCH = "FINGERPRINT_CHECK_FETCH";
export const FINGERPRINT_CHECK_START = "FINGERPRINT_CHECK_START";
export const FINGERPRINT_CHECK_COMPLETE = "FINGERPRINT_CHECK_COMPLETE";
export const FINGERPRINT_CREATE = "FINGERPRINT_CREATE";
export const FINGERPRINT_SET = "FINGERPRINT_SET";
export const WARNING_CLOSE = "WARNING_CLOSE";
export const ENTER_NAME_OPEN = "ENTER_NAME_OPEN";
export const ENTER_NAME_CLOSE = "ENTER_NAME_CLOSE";
export const SHOW_NAME_OPEN = "SHOW_NAME_OPEN";
export const PROGRESS_SET = "PROGRESS_SET";
export const FINGERPRINTING_OPEN = "FINGERPRINTING_OPEN";
export const NAME_SET = "NAME_SET";

/* Actions */
export const createFingerprint = () => dispatch => {
  const fingerprint = {
    screen: window.screen,
    performance: window.performance,
    clientInformation: window.clientInformation
  };
  console.log(window);
  dispatch(setFingerprint(fingerprint));
  return;
};

export const fetchFingerprintCheck = () => async (dispatch, getState) => {
  const name = await request("/name", {
    body: getFingerprint(getState())
  });
  dispatch(setName(name));
};

export const startFingerprinting = () => async (dispatch, getState) => {
  dispatch(closeWarning());
  dispatch(openFingerprinting());
  dispatch(createFingerprint());
  await sleep(200);
  dispatch(setProgress(20));
  await dispatch(fetchFingerprintCheck());
  dispatch(setProgress(100));
  await sleep(600);
  getName(getState()) ? dispatch(openShowName()) : dispatch(openEnterName());
};

/* Action Creators */
export const closeWarning = () => ({
  type: WARNING_CLOSE,
  payload: { warningOpen: false, nameFormOpen: true }
});

export const openEnterName = payload => ({
  type: ENTER_NAME_OPEN,
  payload
});

export const startFingerprintCheck = payload => ({
  type: FINGERPRINT_CHECK_START,
  payload
});

export const completeFingerprintCheck = payload => ({
  type: FINGERPRINT_CHECK_COMPLETE,
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
