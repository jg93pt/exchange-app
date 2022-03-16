import React from 'react';
import { json, checkStatus, currencies } from './utils';


class Exchange extends React.Component {
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
        <h1 className="sm-screen">Exchange Rates</h1>
        <h3 className='mt-4 sm-screen exchange-subtitle'>1 EUR</h3>
        <div className="mt-5 container-xxl">
              <div className="row">
                <div class="col-lg-4 shadow-lg p-3 bg-body" id="CurrentCurrency">
                  <div class="mt-2 text-start">
                    <label>Amount</label>
                    <input type="number" className="form-control" min="0"/>
                    </div>
                    <div class="text-start mt-4 mb-2">
                    <label>From</label>
                    <select className="form-select"></select>
                    </div>
                </div>
                <div class="col-lg-7 shadow-lg p-3 bg-body" id="AllCurrencys">
                <div class="row">
                <div class="col-12">
                <table class="table table-responsive">
                  <tbody>
                    <tr>
                      <td class="text-start">EUR</td>
                      <td class="text-end">0</td>
                    </tr>
                    <tr>
                      <td class="text-start">USD</td>
                      <td class="text-end">0</td>
                    </tr>
                    <tr>
                      <td class="text-start">AUD</td>
                      <td class="text-end">0</td>
                    </tr>
                    <tr>
                      <td class="text-start">BGN</td>
                      <td class="text-end">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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

export default Exchange;