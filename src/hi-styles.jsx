import {
  solarizedLight,
  solarizedDark,
  paraisoDark,
  docco,
  agate,
  monokaiSublime,
  tomorrow,
  tomorrowNight,
  tomorrowNightBright,
  a11yDark,
  a11yLight,
  arta,
  ascetic,
  dracula,
  far,
  github,
  monokai,
  nightOwl,
  srcery,
  zenburn,
  rainbow
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const HILITE_STYLES = {
  a11yDark,
  a11yLight,
  agate,
  arta,
  ascetic,
  docco,
  dracula,
  far,
  github,
  monokai,
  monokaiSublime,
  nightOwl,
  paraisoDark,
  rainbow,
  solarizedDark,
  solarizedLight,
  srcery,
  tomorrow,
  tomorrowNight,
  tomorrowNightBright,
  zenburn,
};
export const DEFAULT_STYLE = "agate";
export const STYLE_NAMES = Object.keys(HILITE_STYLES);

export const getStyle = (name) => HILITE_STYLES[name] || DEFAULT_STYLE;
