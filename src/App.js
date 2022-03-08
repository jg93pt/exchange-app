import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CurrencyConverter from './CurrencyConverter';
import ExchangeRate from './ExchangeRate';

import './App.css';



const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <Link className="navbar-brand col-12 text-center" to="/"><h3 class="customColor">Exchange App</h3></Link>
      </nav>
        <Route path="/" exact component={CurrencyConverter} />
        <Route path="/" component={ExchangeRate} />
    </Router>
  );
}

export default App;
