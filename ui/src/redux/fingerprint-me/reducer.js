import {
  WARNING_CLOSE,
  ENTER_NAME_CLOSE,
  ENTER_NAME_OPEN,
  SHOW_NAME_OPEN,
  PROGRESS_SET,
  FINGERPRINTING_OPEN,
  FINGERPRINT_SET,
  NAME_SET,
  FINGERPRINTING_CLOSE,
  MATCH_FOUND_OPEN,
  DELETE_PROGRESS_SET,
  DELETE_OPEN,
  WARNING_OPEN,
  UNIQUENESS_SET
} from "./actions";

const initialState = {
  loading: false,
  warningOpen: true,
  enterNameOpen: false,
  fingerprintingOpen: false,
  showNameOpen: false,
  matchFoundOpen: false,
  deleteOpen: false,
  name: "",
  progress: 0,
  deleteProgress: 100,
  fingerprint: {},
  uniqueness: {}
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ENTER_NAME_OPEN:
      return {
        ...state,
        enterNameOpen: true,
        fingerprintingOpen: false,
        matchFoundOpen: false
      };

    case WARNING_CLOSE:
      return { ...state, warningOpen: false };

    case WARNING_OPEN:
      return { ...state, warningOpen: true, deleteOpen: false };

    case FINGERPRINTING_OPEN:
      return {
        ...state,
        fingerprintingOpen: true,
        warningOpen: false,
        showNameOpen: false,
        matchFoundOpen: false
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
        name: payload || state.name,
        matchFoundOpen: false
      };

    case PROGRESS_SET:
      return { ...state, progress: payload };

    case FINGERPRINT_SET:
      return { ...state, fingerprint: payload };

    case FINGERPRINTING_CLOSE:
      return { ...state, fingerprintingOpen: false };

    case MATCH_FOUND_OPEN:
      return { ...state, matchFoundOpen: true, fingerprintingOpen: false };

    case DELETE_PROGRESS_SET:
      return { ...state, deleteProgress: payload };

    case DELETE_OPEN:
      return { ...state, deleteOpen: true, showNameOpen: false };

    case UNIQUENESS_SET:
      return { ...state, uniqueness: payload };

    default:
      return state;
  }
};

export default reducer;
