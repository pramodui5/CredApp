import React, { Component } from "react";
import Nav from "./nav/Nav";
import Datatable from "./Datatable";
import Search from "./search/Search";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav history={this.props.history} />
        <Search />
        <Datatable />
      </div>
    );
  }
}

export default Dashboard;
