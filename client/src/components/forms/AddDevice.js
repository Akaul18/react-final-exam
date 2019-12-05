import React from "react";

import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const AddDevice = () => {
  return (
    <form>
      <TextField
        label="Year"
        defaultValue="2019"
        placeholder="i.e. 2019"
        type="number"
        margin="normal"
        variant="outlined"
        style={{ display: "flex", margin: "10px" }}
      />
      <TextField
        label="Brand"
        defaultValue="Apple"
        placeholder="i.e. Apple"
        margin="normal"
        variant="outlined"
        style={{ display: "flex", margin: "10px" }}
      />
      <TextField
        label="Model"
        defaultValue="iPhone"
        placeholder="i.e. iPhone"
        margin="normal"
        variant="outlined"
        style={{ display: "flex", margin: "10px" }}
      />
      <TextField
        label="Price"
        defaultValue="1500"
        placeholder="i.e. 1500"
        type="number"
        margin="normal"
        variant="outlined"
        style={{ display: "flex", margin: "10px" }}
      />
      <Select
        native
        defaultValue="1"
        value="1"
        input={
          <OutlinedInput name="character" id="outlined-age-native-simple" />
        }
        style={{ display: "flex", margin: "10px" }}
      >
        <option value="id">John Smith</option>
      </Select>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: "20px", alignItems: "center", marginLeft: "10px" }}
      >
        Add Device
      </Button>
    </form>
  );
};

export default AddDevice;
