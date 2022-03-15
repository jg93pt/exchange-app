import React from 'react';
import { json, checkStatus, currencies } from './utils';

// Global variable for api link
const host = 'api.frankfurter.app';

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
    this.handleChange = this.handleChange.bind(this);
  }

  // Initial state 
  componentDidMount() {
       const { amount, baseAcronym, quoteAcronym } = this.state;
        this.getRate(amount, baseAcronym, quoteAcronym);
        
   
}
// Get amount value from Input
handleChange(event) {
  this.setState({ amount: event.target.value });
}

//Get values and Conversion function
  getRate = (amount, base, quote) => {
    fetch(`https://${host}/latest?amount=${amount}base=${base}&symbols=${quote}`)
    .then(checkStatus)
    .then(json)
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
      
      const rate = data.rates[quote];
      this.setState({
        rate,
        amount,
        quoteValue: Number((amount * rate).toFixed(3)),
      });
    })
    .catch(error => console.error(error.message));
}

//Change dropdown Base currency
changeBaseAcronym = (event) => {
const baseAcronym = event.target.value;
this.setState({ baseAcronym });
this.getRate(baseAcronym, this.state.quoteAcronym);
}

//Change dropdown  Quote currency
changeQuoteAcronym = (event) => {
const quoteAcronym = event.target.value;
this.setState({ quoteAcronym });
this.getRate(this.state.baseAcronym, quoteAcronym);
}


  render() {
    const { amount, quoteValue, baseAcronym, quoteAcronym } = this.state;

    const currencyOptions = Object.keys(currencies).map(currencyAcronym => <option key={currencyAcronym} value={currencyAcronym}>{currencyAcronym} - {currencies[currencyAcronym].name}</option>);
    
    return (
      <div className="container main-page-title">
        <div className="row mt-5">
          <div className="col-12 mt-5 text-center">
          <h1 className="sm-screen">Currency Converter</h1>
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
                    <select className="form-select" value={baseAcronym} onChange={e => {this.changeBaseAcronym(e); this.getRate(e)}}> {currencyOptions}</select>
                    </div>
                  </div>
                  <div className='col-lg-1 mt-4'>
                    <button className="form-control exchange-button"><svg  stroke="currentColor" fill="currentColor" strokeWidth="0" height="2em" viewBox="0 0 512 512" className="desktopIcon" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M304 48l112 112-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302"></path></svg></button>
                  </div>
                  <div className="col-lg-4">
                  <label>To</label>
                  <div className="dropdown">
                  <select className="form-select" value={quoteAcronym} onChange={e => {this.changeQuoteAcronym(e); this.getRate(e)}}> {currencyOptions}</select>
                    </div>
                </div>
                </div>
                <div className='row ms-1 me-1 shadow-lg p-3 mb-5 bg-body rounded-bottom'>
                  <h5 className="small-currency-title">{amount} {baseAcronym} =</h5>
                  <h3 className="big-currency-title mb-4">{quoteValue} {quoteAcronym}</h3>
                  <h5 className="small-currency-title">{quoteValue} {quoteAcronym} = {amount} {baseAcronym}</h5>
                </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}
export default CurrencyConverter;