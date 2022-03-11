import React from 'react';
import { Link } from "react-router-dom";


class Exchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {

    return (
      <div className="container main-page-title">
      <div className="row mt-5">
        <div className="col-12 mt-5 text-center">
        <h1 className="sm-screen">Exchange Rate</h1>
        </div>
      </div>
    </div>
    )
  }
}

export default Exchange;