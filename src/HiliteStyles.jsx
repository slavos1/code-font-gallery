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
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const STYLES = {
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
  solarizedDark,
  solarizedLight,
  srcery,
  tomorrow,
  tomorrowNight,
  tomorrowNightBright,
  zenburn,
};

export const DEFAULT_STYLE = "agate";
export const getStyleNames = () => Object.keys(STYLES);
export const getStyle = (name) => STYLES[name];
