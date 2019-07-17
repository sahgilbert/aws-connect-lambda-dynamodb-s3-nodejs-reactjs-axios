import React, { Component, Fragment } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Table from './Table';

const API_URL = "[INSERT AWS API GATEWAY ENDPOINT URL HERE]";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
  }

  render() {
    return (
      <Fragment>
        <NavBar companyName="Simon Gilbert Corporation"></NavBar>
        <div className="row">
          <div className="col-11 mx-auto col-md-10 offset-md-1">
            <Table apiReceivedResponse={this.state.customers}></Table>
          </div>
        </div>
      </Fragment>
    )
  }

  async componentDidMount() {
    await axios.get(API_URL).then(response => response.data)
    .then((data) => {
      this.setState({ customers: data })
     })
  }
}

export default App;
