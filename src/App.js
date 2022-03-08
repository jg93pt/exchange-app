import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CurrencyConverter from './CurrencyConverter';
import ExchangeRate from './ExchangeRate';

import './App.css';



const App = () => {
  return (
    <Router>
    <nav class="navbar navbar-expand-md navbar-light shadow p-3 mb-5 bg-body rounded fixed-top">
      <div class="container-fluid ms-5">
        <div class="" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" id="navbar-text" to="/CurrencyConverter"><h5 id="title-color">Currency Converter</h5></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" id="navbar-text" to="/ExchangeRate"><h5 id="title-color">Exchange Rate</h5></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        <Route path="/CurrencyConverter" exact component={CurrencyConverter} />
        <Route path="/ExchangeRate" component={ExchangeRate} />
    </Router>
  );
}

export default App;
