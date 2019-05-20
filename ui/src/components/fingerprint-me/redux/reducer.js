import {
  FINGERPRINT_CHECK_COMPLETE,
  WARNING_CLOSE,
  ENTER_NAME_CLOSE,
  ENTER_NAME_OPEN,
  SHOW_NAME_OPEN,
  PROGRESS_SET,
  FINGERPRINTING_OPEN,
  FINGERPRINT_SET,
  NAME_SET
} from "./actions";

const initialState = {
  loading: false,
  warningOpen: true,
  enterNameOpen: false,
  enterNameShow: false,
  fingerprintingOpen: false,
  fingerprintingShow: false,
  showNameOpen: false,
  name: "",
  progress: 0,
  fingerprint: {}
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FINGERPRINT_CHECK_COMPLETE:
      return { ...state, doesFingerprintExist: payload };

    case ENTER_NAME_OPEN:
      return {
        ...state,
        enterNameOpen: true,
        enterNameShow: true,
        fingerprintingShow: false
      };

    case WARNING_CLOSE:
      return { ...state, warningOpen: false };

    case FINGERPRINTING_OPEN:
      return { ...state, fingerprintingOpen: true, fingerprintingShow: true };

    case ENTER_NAME_CLOSE:
      return { ...state, enterNameOpen: false, name: payload };

    case NAME_SET:
      return { ...state, name: payload };

    case SHOW_NAME_OPEN:
      return {
        ...state,
        showNameOpen: true,
        showNameShow: true,
        fingerprintingOpen: false
      };

    case PROGRESS_SET:
      return { ...state, progress: payload };

    case FINGERPRINT_SET:
      return { ...state, fingerprint: payload };

    default:
      return state;
  }
};

export default reducer;
