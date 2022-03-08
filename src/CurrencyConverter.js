import React from 'react';
import { Link } from "react-router-dom";


class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {

    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 mt-5 text-center">
          <h1 class="sm-screen">Currency Converter</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Currency;