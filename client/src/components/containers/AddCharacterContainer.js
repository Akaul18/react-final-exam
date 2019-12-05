import React, { Component } from "react";

import AddCharacter from "../forms/AddCharacter";

class AddCharacterContainer extends Component {
  render() {
    const { id, firstName, lastName, onInputChange } = this.props;
    return (
      <AddCharacter
        id={id}
        firstName={firstName}
        lastName={lastName}
        onInputChange={onInputChange}
      />
    );
  }
}

export default AddCharacterContainer;
