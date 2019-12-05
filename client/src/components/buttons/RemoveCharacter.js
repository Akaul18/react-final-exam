import React from "react";
import Button from "@material-ui/core/Button";
import { useMutation } from "@apollo/react-hooks";

const RemoveCharacter = () => {
  return (
    <Button variant="contained" color="secondary" style={{ margin: "10px" }}>
      Delete
    </Button>
  );
};

export default RemoveCharacter;
