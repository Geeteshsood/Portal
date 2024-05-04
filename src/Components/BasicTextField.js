import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({
  appliedFilters,
  setAppliedFilters,
  lb,
}) {
  const handleChange = (event) => {
    const appFilters = { ...appliedFilters };
    appFilters[lb] = event.target.value;
    setAppliedFilters(appFilters);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "200px" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={lb}
        variant="outlined"
        onChange={(e) => handleChange(e)}
      />
    </Box>
  );
}
