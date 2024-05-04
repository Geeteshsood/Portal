import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({
  lb,
  names,
  appliedFilters,
  setAppliedFilters,
}) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);

    const appFilters = { ...appliedFilters };
    appFilters[lb] = event.target.value;
    setAppliedFilters(appFilters);
  };

  return (
    <Box sx={{ m: 1, minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{lb}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
