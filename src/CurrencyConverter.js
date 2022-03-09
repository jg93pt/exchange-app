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
      <div className="container main-page-title">
        <div className="row mt-5">
          <div className="col-12 mt-5 text-center">
          <h1 className="sm-screen">Currency Converter</h1>
          </div>
        </div>
        <div className='row mt-4'>
          <div className="d-flex flex-column bd-highlight mb-3">
            <div className="container-xxl mt-1" id="no-sm">
              <div className="row ms-5 me-5 shadow-lg p-3 bg-body rounded rounded-5 border border-1 border-dark" id="title-div">
                <div className="col-xl-12">
                  <h5 className="text-center">EUR to USD</h5>
              </div>
        </div>
    </div>
    <h5 className="text-center" id="only-sm">EUR to USD</h5>
    <div className="container-xxl">
              <div className="row ms-5 me-5 shadow-lg p-3 mb-5 bg-body rounded rounded-5 border border-1 border-dark">
                <div className="col-md-4">
                  <p className="text-left">Amount</p>
                  </div>
                  <div className="col-md-4">
                  <p className="text-left">From</p>
                  </div>
                  <div className="col-md-4">
                  <p className="text-left">To</p>
                  </div>
        </div>
    </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Currency;