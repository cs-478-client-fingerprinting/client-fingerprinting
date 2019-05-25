import { request, sleep } from "../../utils";
import md5 from "md5";
import { getFingerprint, getName } from "./selectors";

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

const createCanvasFingerprint = canvas => {
  const ctx = canvas.current.getContext("2d");

  // Text with lowercase/uppercase/punctuation symbols
  var txt = "Network Security - Client Fingerprinting";
  ctx.textBaseline = "top";

  // The most common type
  ctx.font = "14px 'Arial'";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#f60";
  ctx.fillRect(125, 1, 62, 20);

  // Some tricks for color mixing to increase the difference in rendering
  ctx.fillStyle = "#069";
  ctx.fillText(txt, 2, 15);
  ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
  ctx.fillText(txt, 4, 17);

  return md5(canvas.current.toDataURL());
};

const createFingerprint = canvas => ({
  PixelDepth: window.screen.pixelDepth,
  CanvasFingerprintHash: createCanvasFingerprint(canvas)
});

/* Actions */
export const startFingerprinting = (canvas, close) => async dispatch => {
  const fingerprint = createFingerprint(canvas);
  console.log(window, fingerprint);

  await sleep(200);
  dispatch(setProgress(20));

  const res = await request("/fingerprint", {
    body: JSON.stringify(fingerprint),
    method: "POST"
  });

  dispatch(setFingerprint(fingerprint));
  res.name && dispatch(setName(res.name));
  dispatch(setProgress(100));

  await sleep(800);
  close(() => dispatch(res.exists ? openMatchFound() : openEnterName()))();
  dispatch(setProgress(0));
};

export const handleNameFormSubmit = name => (dispatch, getStore) => e => {
  e && e.preventDefault();
  e && e.stopPropagation();
  request("/fingerprint", {
    body: { fingerprint: getFingerprint(getStore()), name },
    method: "PUT"
  });
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
