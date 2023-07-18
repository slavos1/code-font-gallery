import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";
import { getStyleNames } from "./HiliteStyles";

const HiliteStyleSelect = ({ value, setValue }) => {
  const label = "highlight.js style";
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        label={label}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        {getStyleNames().map((styleName, idx) => (
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
