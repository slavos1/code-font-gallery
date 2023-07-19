import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";
import { DEFAULT_STYLE, STYLE_NAMES } from "./hi-styles";
import { useContext } from "react";
import { Context } from "./Context";

// const HiliteStyleSelect = ({ value, setValue }) => {
const HiliteStyleSelect = () => {
  const { context, dispatch } = useContext(Context);

  const label = "highlight.js style";
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        label={label}
        value={context.highlight.style || DEFAULT_STYLE}
        onChange={(event) =>
          dispatch({
            type: "changeStyle",
            style: event.target.value,
          })
        }
      >
        {STYLE_NAMES.map((styleName, idx) => (
          <MenuItem key={idx} value={styleName}>
            {styleName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

HiliteStyleSelect.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func,
};

export default HiliteStyleSelect;
