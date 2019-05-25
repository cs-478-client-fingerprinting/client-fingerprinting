import {
  WARNING_CLOSE,
  ENTER_NAME_CLOSE,
  ENTER_NAME_OPEN,
  SHOW_NAME_OPEN,
  PROGRESS_SET,
  FINGERPRINTING_OPEN,
  FINGERPRINT_SET,
  NAME_SET,
  FINGERPRINTING_CLOSE
} from "./actions";

const initialState = {
  loading: false,
  warningOpen: true,
  enterNameOpen: false,
  fingerprintingOpen: false,
  showNameOpen: false,
  name: "",
  progress: 0,
  fingerprint: {}
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ENTER_NAME_OPEN:
      return {
        ...state,
        enterNameOpen: true,
        fingerprintingOpen: false
      };

    case WARNING_CLOSE:
      return { ...state, warningOpen: false };

    case FINGERPRINTING_OPEN:
      return {
        ...state,
        fingerprintingOpen: true,
        warningOpen: false,
        showNameOpen: false
      };

    case ENTER_NAME_CLOSE:
      return { ...state, enterNameOpen: false, name: payload };

    case NAME_SET:
      return { ...state, name: payload };

    case SHOW_NAME_OPEN:
      return {
        ...state,
        showNameOpen: true,
        fingerprintingOpen: false,
        enterNameOpen: false,
        name: payload || state.name
      };

    case PROGRESS_SET:
      return { ...state, progress: payload };

    case FINGERPRINT_SET:
      return { ...state, fingerprint: payload };

    case FINGERPRINTING_CLOSE:
      return { ...state, fingerprintingOpen: false };

    default:
      return state;
  }
};

export default reducer;
