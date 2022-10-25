import React, { useState } from "react";
import { accessToken } from "mapbox-gl";
import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import { PinDrop } from "@mui/icons-material";
function Map() {
  accessToken = process.env.REACT_APP_MAPBOX_KEY;
  const [suggestions, setSuggestions] = useState([]);

  const [value, setValue] = useState("");
  const handleChange = async (event) => {
    setValue(event.target.value);

    const endPoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?$autocomplete=true&proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${accessToken}`;
    try {
      const response = await fetch(endPoint);
      const results = await response.json();

      setSuggestions(results?.features);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(suggestions);
  const defaultProps = {
    options: suggestions,
    getOptionLabel: (option) => option.place_name,
  };

  return (
    <Box>
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField
            {...params}
            label="disableCloseOnSelect"
            variant="standard"
            onChange={handleChange}
          />
        )}
      />

      <Box
        sx={{
          height: "10vh",
        }}
      >
        {suggestions?.length > 0 &&
          JSON.stringify(
            suggestions.map((suggestion) => suggestion.place_name)
          )}
      </Box>
    </Box>
  );
}

export default Map;
