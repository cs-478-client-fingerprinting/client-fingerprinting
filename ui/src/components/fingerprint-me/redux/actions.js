import { request } from "../../../utils";
import { getFingerprint, getName } from "./selectors";
import sleep from "../../../utils/sleep";

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

const createFingerprint = () => ({
  screen: window.screen,
  performance: window.performance,
  clientInformation: window.clientInformation
});

/* Actions */
export const startFingerprinting = () => async (dispatch, getState) => {
  dispatch(openFingerprinting());

  const fingerprint = createFingerprint();
  console.log(window);

  await sleep(200);
  dispatch(setProgress(20));

  const name = await request("/name", {
    body: getFingerprint(getState())
  });

  dispatch(setFingerprint(fingerprint));
  dispatch(setName(name));
  dispatch(setProgress(100));

  await sleep(600);
  dispatch(name ? openShowName() : openEnterName());
};

export const handleNameFormSubmit = name => e => dispatch => {
  e.preventDefault();
  e.stopPropagation();
  dispatch(openShowName(name));
};

/* Action Creators */
export const closeWarning = payload => ({
  type: WARNING_CLOSE,
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
