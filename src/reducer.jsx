import { FONT_DEFS } from "./font-defs";
import { DEFAULT_STYLE } from "./hi-styles";

export const DEFAULT_FONT_SIZE = 80;

export const initialState = {
  expanded: Array(FONT_DEFS.length).fill(false),
  highlight: {
    style: DEFAULT_STYLE,
    fontSize: DEFAULT_FONT_SIZE,
  },
};

// import.meta.env is Vite concept
export const IS_DEVEL =
  import.meta.env.DEV && import.meta.env.MODE == "development";

const replaceValueAt = (array, idx, value) => {
  // console.log("array before=", array);
  const updated = [...array.slice(0, idx), value, ...array.slice(idx + 1)];
  // console.log("array before=", updated);
  return updated;
};

const booleansAsString = (expanded) =>
  expanded.map((b) => (b ? "1" : "0")).join("");

const stateDataForLogging = (state) => {
  return {
    expanded: booleansAsString(state.expanded),
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
        expanded: state.expanded.map(() => false),
      };
    }
    case "expandAll": {
      return {
        ...state,
        expanded: state.expanded.map(() => true),
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
        expanded: replaceValueAt(
          state.expanded,
          action.position,
          !action.expanded
        ),
      };
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
};
