import React, { Component } from "react";

import "../../App";
import Container from "@material-ui/core/Container";
import uuidv4 from "uuid/v4";
import AddCharacterContainer from "../containers/AddCharacterContainer";
import AddDeviceContainer from "../containers/AddDeviceContainer";

import Characters from "../lists/Characters";
import Title from "../layout/Title";

class Home extends Component {
  state = {
    id: uuidv4(),
    firstName: "",
    lastName: ""
  };

  handleInputChange = (key, value) => {
    this.setState({ [key]: value });
  };
  render() {
    const { id, firstName, lastName } = this.state;
    return (
      <Container className="App">
        <Title />
        <AddCharacterContainer
          id={id}
          firstName={firstName}
          lastName={lastName}
          onInputChange={this.handleInputChange}
        />
        <AddDeviceContainer />
        <Characters />
      </Container>
    );
  }
}

export default Home;
