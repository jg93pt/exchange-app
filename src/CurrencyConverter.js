import React from 'react';
import { Link } from "react-router-dom";
import Exchange from './ExchangeRate';


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
                  <h5 className="text-center main-content-subtitle">EUR to USD</h5>
              </div>
        </div>
    </div>
    <h5 className="text-center main-content-subtitle" id="only-sm">EUR to USD</h5>
    <div className="container-xxl">
              <div className="row ms-5 me-5 shadow-lg p-3 mb-5 bg-body rounded rounded-5 border border-1 border-dark">
                <div className="col-md-3">
                  <label>Amount</label>
                  <input type="number" className="form-control input-style" min="0" defaultValue={1}/>
                  </div>
                  <div className="col-md-3">
                  <label>From</label>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle form-control" type="button" id="dropdownFromCurrency" data-bs-toggle="dropdown" aria-expanded="false">
                    EUR-EURO
                    </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownFromCurrency">
                        <li><a className="dropdown-item" href="#">USD-UNITED STATES DOLLAR</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                  <label id="hide-label">Exchange</label>
                  <button className ="btn btn-primary btn-lg text-uppercase letter-space form-control" id="exchange-button"><img src={require("./img/exchange.png")} className="icon-img"/></button>
                    </div>
                  <div className="col-md-3">
                  <label>To</label>
                  <div class="dropdown">
                    <button className="btn btn-secondary dropdown-toggle form-control" type="button" id="dropdownToCurrency" data-bs-toggle="dropdown" aria-expanded="false">
                    USD-UNITED STATES DOLLAR
                    </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownToCurrency">
                        <li><a className="dropdown-item" href="#">EUR-EURO</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
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