import React from 'react';
import { json, checkStatus } from './utils';

class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base: 'EUR',
      compare: 'USD',
      amount: '',
      rate: '',
      reverseRate: '',
      currencies: [
        {
          code: '',
          name: ''
        }
      ],
      rates: [
        {
          currency: '',
          rate: ''
        }
      ]
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }
  // Get amount value from input
  handleChange(event) {
    this.setState({ amount: event.target.value });
  }

  // Get Currency base compare and amount 
  handleCurrencyChange (base, compare, amount){
    this.setState({base, compare, amount})
    fetch(`https://altexchangerateapi.herokuapp.com/latest?${amount}&from=${base}&to=${compare}`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (data.response === 'False') {
          throw new Error(data.Error);
        }

        if (data.response === 'True') {
        }
      })
      .catch((error) => {
        this.setState({ error: error.message });
        console.log(error);
      })
  }

  render() {
    const { base, compare, amount, error } = this.state;
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
                  <h5 className="text-center main-content-subtitle">{base} to {compare} and {amount}</h5>
              </div>
        </div>
    </div>
    <div className="container-xxl">
              <div className="row ms-1 me-1 shadow-lg p-3 bg-body border-top border-1 border-dark" id="split-content">
                <div className="col-lg-3">
                  <label>Amount</label>
                  <input type="number" className="form-control" min="0" defaultValue={1} value={amount}onChange={this.handleChange}/>
                  </div>
                  <div className="col-lg-4">
                  <label>From</label>
                  <div className="dropdown">
                  <select className='form-select'>
                  <option value="AUD">AUD – Australian Dollar</option>
                  <option value="BGN">BGN – Bulgarian Lev</option>
                  <option value="BRL">BRL – Brazilian Real</option>
                  <option value="CAD">CAD – Canadian Dollar</option>
                  <option value="CHF">CHF – Swiss Franc</option>
                  <option value="CNY">CNY – Chinese Renminbi Yuan</option>
                  <option value="CZK">CZK – Czech Koruna</option>
                  <option value="DKK">DKK – Danish Krone</option>
                  <option value="EUR">EUR – Euro</option>
                  <option value="GBP">GBP – British Pound</option>
                  <option value="HKD">HKD – Hong Kong Dollar</option>
                  <option value="HRK">HRK – Croatian Kuna</option>
                  <option value="HUF">HUF – Hungarian Forint</option>
                  <option value="IDR">IDR – Indonesian Rupiah</option>
                  <option value="ILS">ILS – Israeli New Sheqel</option>
                  <option value="INR">INR – Indian Rupee</option>
                  <option value="ISK">ISK – Icelandic Króna</option>
                  <option value="JPY">JPY – Japanese Yen</option>
                  <option value="KRW">KRW – South Korean Won</option>
                  <option value="MXN">MXN – Mexican Peso</option>
                  <option value="MYR">MYR – Malaysian Ringgit</option>
                  <option value="NOK">NOK – Norwegian Krone</option>
                  <option value="NZD">NZD – New Zealand Dollar</option>
                  <option value="PHP">PHP – Philippine Peso</option>
                  <option value="PLN">PLN – Polish Złoty</option>
                  <option value="RON">RON – Romanian Leu</option>
                  <option value="SEK">SEK – Swedish Krona</option>
                  <option value="SGD">SGD – Singapore Dollar</option>
                  <option value="THB">THB – Thai Baht</option>
                  <option value="TRY">TRY – Turkish Lira</option>
                  <option value="USD">USD – United States Dollar</option>
                  <option value="ZAR">ZAR – South African Rand</option>
                    </select>
                    </div>
                  </div>
                  <div className='col-lg-1 mt-4'>
                    <button className="form-control exchange-button"><svg  stroke="currentColor" fill="currentColor" strokeWidth="0" height="2em" viewBox="0 0 512 512" className="desktopIcon" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M304 48l112 112-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302"></path></svg></button>
                  </div>
                  <div className="col-lg-4">
                  <label>To</label>
                  <div className="dropdown">
                  <select className='form-select'>
                  <option value="AUD">AUD – Australian Dollar</option>
                  <option value="BGN">BGN – Bulgarian Lev</option>
                  <option value="BRL">BRL – Brazilian Real</option>
                  <option value="CAD">CAD – Canadian Dollar</option>
                  <option value="CHF">CHF – Swiss Franc</option>
                  <option value="CNY">CNY – Chinese Renminbi Yuan</option>
                  <option value="CZK">CZK – Czech Koruna</option>
                  <option value="DKK">DKK – Danish Krone</option>
                  <option value="EUR">EUR – Euro</option>
                  <option value="GBP">GBP – British Pound</option>
                  <option value="HKD">HKD – Hong Kong Dollar</option>
                  <option value="HRK">HRK – Croatian Kuna</option>
                  <option value="HUF">HUF – Hungarian Forint</option>
                  <option value="IDR">IDR – Indonesian Rupiah</option>
                  <option value="ILS">ILS – Israeli New Sheqel</option>
                  <option value="INR">INR – Indian Rupee</option>
                  <option value="ISK">ISK – Icelandic Króna</option>
                  <option value="JPY">JPY – Japanese Yen</option>
                  <option value="KRW">KRW – South Korean Won</option>
                  <option value="MXN">MXN – Mexican Peso</option>
                  <option value="MYR">MYR – Malaysian Ringgit</option>
                  <option value="NOK">NOK – Norwegian Krone</option>
                  <option value="NZD">NZD – New Zealand Dollar</option>
                  <option value="PHP">PHP – Philippine Peso</option>
                  <option value="PLN">PLN – Polish Złoty</option>
                  <option value="RON">RON – Romanian Leu</option>
                  <option value="SEK">SEK – Swedish Krona</option>
                  <option value="SGD">SGD – Singapore Dollar</option>
                  <option value="THB">THB – Thai Baht</option>
                  <option value="TRY">TRY – Turkish Lira</option>
                  <option value="USD">USD – United States Dollar</option>
                  <option value="ZAR">ZAR – South African Rand</option>
                </select>
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
export default Currency;