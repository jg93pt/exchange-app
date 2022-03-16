import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CurrencyConverter from './CurrencyConverter';
import ExchangeRate from './ExchangeRate';

import './App.css';


// For nav menu items
class App extends Component {
  state = {
    flag: true
  }
  handleClick= () => {
    if (this.state.flag == true)
    {
      this.setState({flag: this.state.flag})
    }
    else
    this.setState({flag: !this.state.flag})
  }

  handleClickExchange= () => {
    if (this.state.flag == false)
    {
      this.setState({flag: this.state.flag})
    }
    else
    this.setState({flag: !this.state.flag})
  }

  render () {
  return (
    <Router>
    <nav className="navbar navbar-expand-md navbar-light shadow p-3 mb-5 rounded" id="navColor">
      <div className="container-fluid ms-5">
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={this.handleClick}>
              <Link className="nav-link" aria-current="page" id="navbar-text" to="/CurrencyConverter"><h5 id="title-color" className={`${this.state.flag ? 'focus-item' : ''}`}>Currency Converter</h5></Link>
            </li>
            <li className="nav-item" onClick={this.handleClickExchange}>
              <Link className="nav-link" aria-current="page" id="navbar-text" to="/ExchangeRate"><h5 id="title-color" className={`${this.state.flag ? '' : 'focus-item'}`}>Exchange Rate</h5></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        <Route path="/" exact component={CurrencyConverter} />
        <Route path="/CurrencyConverter" exact component={CurrencyConverter} />
        <Route path="/ExchangeRate" component={ExchangeRate} />
    </Router>
  );
}
}

export default App;
