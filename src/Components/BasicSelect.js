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
    <div className="w-1/6 p-1">
      <Box sx={{ minWidth: "100%" }}>
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
    </div>
  );
}
