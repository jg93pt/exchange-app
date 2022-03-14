import React from 'react';
import currencies from './Currencies';
import { json, checkStatus } from './utils';

// Global variable for api link
const host = 'api.frankfurter.app';

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);

    const params = new URLSearchParams(props.location.search);

    this.state = {
      amount: 0,
      rate: 0,
      baseAcronym: params.get('base') || 'EUR',
      baseValue: 0,
      quoteAcronym: params.get('quote') || 'USD',
      quoteValue: 0,
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
       const { baseAcronym, quoteAcronym } = this.state;
        this.getRate(baseAcronym, quoteAcronym);
   
}
// Get amount value from Input
handleChange(event) {
  this.setState({ amount: event.target.value });
}

  getRate = (base, quote) => {
    this.setState({ loading: true });
    fetch(`https://www.frankfurter.app/latest?base=${base}&symbols=${quote}`)
    .then(checkStatus)
    .then(json)
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }

      const rate = data.rates[quote];

      this.setState({
        rate,
        baseValue: 1,
        quoteValue: Number((1 * rate).toFixed(3)),
        loading: false,
      });
    })
    .catch(error => console.error(error.message));
}


changeBaseAcronym = (event) => {
const baseAcronym = event.target.value;
this.setState({ baseAcronym });
this.getRate(baseAcronym, this.state.quoteAcronym);
this.getHistoricalRates(baseAcronym, this.state.quoteAcronym);
}

changeBaseValue = (event) => {
const quoteValue = this.convert(event.target.value, this.state.rate, this.toQuote);
this.setState({
  baseValue: event.target.value,
  quoteValue,
});
}

changeQuoteAcronym = (event) => {
const quoteAcronym = event.target.value;
this.setState({ quoteAcronym });
this.getRate(this.state.baseAcronym, quoteAcronym);
this.getHistoricalRates(this.state.baseAcronym, quoteAcronym);
}

changeQuoteValue = (event) => {
const baseValue = this.convert(event.target.value, this.state.rate, this.toBase);
this.setState({
  quoteValue: event.target.value,
  baseValue,
});
}

  render() {
    const { amount, baseAcronym, quoteAcronym } = this.state;

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
                    <select className="form-select" value={baseAcronym} onChange={this.changeBaseAcronym} > {currencyOptions}</select>
                    </div>
                  </div>
                  <div className='col-lg-1 mt-4'>
                    <button className="form-control exchange-button"><svg  stroke="currentColor" fill="currentColor" strokeWidth="0" height="2em" viewBox="0 0 512 512" className="desktopIcon" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M304 48l112 112-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302"></path></svg></button>
                  </div>
                  <div className="col-lg-4">
                  <label>To</label>
                  <div className="dropdown">
                  <select className="form-select" value={quoteAcronym} onChange={this.changeQuoteAcronym} > {currencyOptions}</select>
                    </div>
                </div>
                </div>
                <div className='row ms-1 me-1 shadow-lg p-3 mb-5 bg-body rounded-bottom'>
                  <h5 className="small-currency-title">1 AUD =</h5>
                  <h3 className="big-currency-title mb-4">1.3024 BGN</h3>
                  <h5 className="small-currency-title">1 BGN = 1.3024 BGN</h5>
                </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}
export default CurrencyConverter;