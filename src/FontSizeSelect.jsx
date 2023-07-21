import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "./Context";
import { DEFAULT_FONT_SIZE } from "./reducer";

const FONT_SIZES = [75, 80, 90, 100];

const FontSizeSelect = () => {
  const { context, dispatch } = useContext(Context);

  const label = "Font size";
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        label={label}
        value={context.highlight.fontSize || DEFAULT_FONT_SIZE}
        onChange={(event) =>
          dispatch({
            type: "changeFontSize",
            fontSize: event.target.value,
          })
        }
      >
        {FONT_SIZES.map((percent, idx) => (
          <MenuItem key={idx} value={percent}>
            {percent}%
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

FontSizeSelect.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func,
};

export default FontSizeSelect;
