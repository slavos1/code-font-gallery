import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
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
  zenburn
} from "react-syntax-highlighter/dist/esm/styles/hljs";

let STYLES = {
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
export const getStyle = (idx) => STYLES[idx];

const HiliteStyle = ({ value, setValue }) => {
  const label = "highlight.js style";
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        label={label}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        {Object.keys(STYLES).map((styleName, idx) => (
          <MenuItem key={idx} value={styleName}>
            {styleName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default HiliteStyle;
