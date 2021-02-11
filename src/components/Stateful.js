import React, { Component } from "react";

class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "Hola Mundo",
    };
  }
}

export default Stateful;
