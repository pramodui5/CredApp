import React, { Component } from "react";
import Nav from "./nav/Nav";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav history={this.props.history} />
      </div>
    );
  }
}

export default Dashboard;
