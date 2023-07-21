import { FONT_DEFS, fontDefKey } from "./font-defs";
import { DEFAULT_STYLE } from "./hi-styles";
import { fromPairs } from "lodash-es";

export const DEFAULT_FONT_SIZE = 80;

const setAllOpen = (value = false) =>
  fromPairs(FONT_DEFS.map((def) => [fontDefKey(def), value]));

export const initialState = {
  open: setAllOpen(),
  highlight: {
    style: DEFAULT_STYLE,
    fontSize: DEFAULT_FONT_SIZE,
  },
};

// XXX import.meta.env is Vite concept
export const IS_DEVEL =
  import.meta.env.DEV && import.meta.env.MODE == "development";

const stateDataForLogging = (state) => {
  return {
    open: JSON.stringify(state.open, {space:"  "}),
    ...state.highlight,
  };
};

export const logStateChange = (action, state, nextState) => {
  const groupName = `action.type='%c${action.type}%c' received`;
  console.groupCollapsed(groupName, "color: red;", "");
  console.table(action);
  console.table({
    state: stateDataForLogging(state),
    nextState: stateDataForLogging(nextState),
  });
  console.groupEnd(groupName);
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "collapseAll": {
      return {
        ...state,
        open: setAllOpen(false),
      };
    }
    case "expandAll": {
      return {
        ...state,
        open: setAllOpen(true),
      };
    }
    case "changeStyle": {
      return {
        ...state,
        highlight: {
          ...state.highlight,
          style: action.style,
        },
      };
    }
    case "changeFontSize": {
      return {
        ...state,
        highlight: {
          ...state.highlight,
          fontSize: action.fontSize,
        },
      };
    }
    case "toggleOne": {
      return {
        ...state,
        open: {
          ...state.open,
          [action.key]: !action.open,
        },
      };
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
};
