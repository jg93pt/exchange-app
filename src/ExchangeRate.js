import React from 'react';
import { json, checkStatus, currencies } from './utils';

// Global variables
const host = 'api.frankfurter.app';

class Exchange extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(props.location.search);
    
    this.state = {
      amount: 1,
      rates: null,
      baseAcronym: params.get('base') || 'EUR',
    };
    this.handleChange = this.handleChange.bind(this); 
  }

  // Initial state 
  componentDidMount() {
    const { amount, baseAcronym} = this.state;
    this.getRates(amount, baseAcronym);
}

//Get values and Conversion function
getRates = (amount, base) => {
  fetch(`https://${host}/latest?amount=${amount}&base=${base}`)
  .then(checkStatus)
  .then(json)
  .then(data => {
    if (data.error) {
      throw new Error(data.error);
    }

      // Gettting the rates values and setting it up the conversion
      const rates = Object.keys(data.rates)
      .filter(acronym => acronym !== base)
      .map(acronym => ({
        acronym,
        rate: data.rates[acronym],
        name: currencies[acronym].name,
      }))

    this.setState({ rates });
    console.log(rates[0].acronym);
  })
  .catch(error => console.error(error.message));
}

// Change based on amount the Currency
handleChange(event) {
  const amount = event.target.value;
  this.setState({ amount });
  this.getRates(amount, this.state.baseAcronym);
}

//Change dropdown Base currency
changeBaseAcronym = (event) => {
const baseAcronym = event.target.value;
this.BaseSelected = event.target.value;
this.setState({ baseAcronym });
this.getRates(this.state.amount, baseAcronym);
}

  render() {
    const { amount, baseAcronym, rates} = this.state;

    const currencyOptions = Object.keys(currencies).map(currencyAcronym => <option key={currencyAcronym} value={currencyAcronym}>{currencyAcronym} - {currencies[currencyAcronym].name}</option>);

    return (
      <div className="container main-page-title">
      <div className="row mt-5">
        <div className="col-12 mt-5 text-center">
        <h1 className="sm-screen main-title">Exchange Rates</h1>
        <h3 className='mt-4 sm-screen exchange-subtitle'>{amount} {baseAcronym}</h3>
        <div className="mt-5 container-xxl">
              <div className="row">
                <div className="col-lg-4 shadow-lg p-3 bg-body" id="CurrentCurrency">
                  <div className="mt-2 text-start">
                    <label>Amount</label>
                    <input type="number" className="form-control" min="0" value={amount} onChange={this.handleChange}/>
                    </div>
                    <div className="text-start mt-4 mb-2">
                    <label>From</label>
                    <select className="form-select" value={baseAcronym} onChange={this.changeBaseAcronym}> {currencyOptions}</select>
                    </div>
                </div>
                <div className="col-lg-7 shadow-lg p-5 bg-body mb-5 pb-5" id="AllCurrencys">
                <table className="table table-responsive">
                  <tbody>
                  {rates?.map(currency =>
                    <tr>
                      <td className="text-start"><b class="me-4">{currency.acronym}</b><small class="lg-only">-</small><small class="mx-4 currency-name lg-only">{currency.name}</small></td>
                      <td className="text-end">{currency.rate}</td>
                    </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Exchange;