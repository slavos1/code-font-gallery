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

const replaceValueAt = (array, idx, value) => {
  console.log("array before=", array);
  const updated = [...array.slice(0, idx), value, ...array.slice(idx + 1)];
  console.log("array before=", updated);
  return updated;
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
