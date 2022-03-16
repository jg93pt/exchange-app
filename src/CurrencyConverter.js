import React from 'react';
import { json, checkStatus, currencies } from './utils';

// Global variables
const host = 'api.frankfurter.app';
let bool = 0;

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);

    const params = new URLSearchParams(props.location.search);

    this.state = {
      amount: 1,
      quoteValue: 0,
      rate: 0,
      baseAcronym: params.get('base') || 'EUR',
      quoteAcronym: params.get('quote') || 'USD',
    };
    this.BaseSelected = 'EUR';
    this.QuoteSelected = 'USD';
    this.QuoteValueSelected = 0;
    this.handleChange = this.handleChange.bind(this); 
    this.handleSwapValuesChangeData = this.handleSwapValuesChangeData.bind(this);
  }

  // Initial state 
  componentDidMount() {
      const { amount, baseAcronym, quoteAcronym } = this.state;
      this.getRate(amount, baseAcronym, quoteAcronym);
}

//Get values and Conversion function
  getRate = (amount, base, quote) => {
    fetch(`https://${host}/latest?amount=${amount}&from=${base}&to=${quote}`)
    .then(checkStatus)
    .then(json)
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
        // Gettting the rates values and setting it up the conversion
      const rate = data.rates[quote];
      this.setState({
        quoteValue: (amount * rate),
      });
    })
    .catch(error => console.error(error.message));
}

// Change based on amount the Currency
handleChange(event) {
  const amount = event.target.value;
  this.setState({ amount });
  this.getRate(amount, this.state.baseAcronym, this.state.quoteAcronym);
}

//Change dropdown Base currency
changeBaseAcronym = (event) => {
const baseAcronym = event.target.value;
this.BaseSelected = event.target.value;
this.setState({ baseAcronym });
this.getRate(this.state.amount, baseAcronym, this.state.quoteAcronym);
}

//Change dropdown  Quote currency
changeQuoteAcronym = (event) => {
const quoteAcronym = event.target.value;
this.QuoteSelected = event.target.value;
this.setState({ quoteAcronym });
this.getRate(this.state.amount, this.state.baseAcronym, quoteAcronym);
}

//Swap Base and Quote button
handleSwapValuesChangeData = function (baseAcronym, quoteAcronym)  {
  // If base !== quote
  if (bool == 0) {
   baseAcronym = this.QuoteSelected;
   quoteAcronym = this.BaseSelected;
  this.setState({ baseAcronym, quoteAcronym});
  this.getRate(this.state.amount, baseAcronym, quoteAcronym);
  bool = 1;
  }

  //If base == quote
  else if (bool == 1) {
    baseAcronym = this.BaseSelected;
    quoteAcronym = this.QuoteSelected;
    this.setState({ baseAcronym, quoteAcronym });
    this.getRate(this.state.amount, baseAcronym, quoteAcronym);
    bool = 0;
  } 
}
  
  render() {
    const { amount, quoteValue, baseAcronym, quoteAcronym} = this.state;

    const currencyOptions = Object.keys(currencies).map(currencyAcronym => <option key={currencyAcronym} value={currencyAcronym}>{currencyAcronym} - {currencies[currencyAcronym].name}</option>);
    
    return (
      <div className="container main-page-title">
        <div className="row mt-5">
          <div className="col-12 mt-5 text-center">
          <h1 className="sm-screen main-title">Currency Converter</h1>
          </div>
        </div>
        <div className='row mt-4'>
          <div className="d-flex flex-column bd-highlight mb-3">
            <div className="container mt-1">
              <div className="row ms-1 me-1 shadow-lg p-3 bg-body rounded-top border border-1 border-dark" id="title-div">
                <div className="col-12">
                  <h5 className="text-center main-content-subtitle">{baseAcronym} to {quoteAcronym}</h5>
              </div>
        </div>
    </div>
    <div className="container-xxl">
              <div className="row ms-1 me-1 shadow-lg p-3 bg-body border-top border-1 border-dark" id="split-content">
                <div className="col-lg-3">
                  <label>Amount</label>
                  <input type="number" className="form-control" min="0" value={amount} onChange={this.handleChange}/>
                  </div>
                  <div className="col-lg-4">
                  <label>From</label>
                  <div className="dropdown">
                    <select className="form-select"  value={baseAcronym} onChange={this.changeBaseAcronym}> {currencyOptions}</select>
                    </div>
                  </div>
                  <div className='col-lg-1 mt-4'>
                    <button className="form-control exchange-button" onClick={this.handleSwapValuesChangeData}><svg  stroke="currentColor" fill="currentColor" strokeWidth="0" height="2em" viewBox="0 0 512 512" className="desktopIcon" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M304 48l112 112-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302"></path></svg></button>
                  </div>
                  <div className="col-lg-4">
                  <label>To</label>
                  <div className="dropdown">
                  <select className="form-select" value={quoteAcronym} onChange={this.changeQuoteAcronym}> {currencyOptions}</select>
                    </div>
                </div>
                </div>
                <div className='row ms-1 me-1 shadow-lg p-3 mb-5 bg-body rounded-bottom'>
                  <h5 className="small-currency-title">{amount} {baseAcronym} =</h5>
                  <h3 className="big-currency-title mb-4">{quoteValue} {quoteAcronym}</h3>
                </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}
export default CurrencyConverter;