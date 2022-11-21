import React, { useState } from 'react'
import Exchange from './exchange'
import axios from 'axios';
const Convert = () => {
  const currencies = ['BTC','ETH','USD','XRP','LTC','ADA','JPY'];

  const [chosenPrimaryCurrency, setPrimaryCurrency] = useState("JPY");

  const [chosenSecondyCurrency, setSecondyCurrency] = useState("USD");

  const [amount, setAmount] = useState(1);

  const [exchangeRate , setExchangeRate] = useState(0);

  const [result, setResult] = useState(0)

  const convertCript = () => {

    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {to_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', from_currency: chosenSecondyCurrency},
      headers: {
        'X-RapidAPI-Key': '1d91cb947bmsh9e61035ea610ff5p1644b2jsn3101db2df639',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
      }
    };

    axios.request(options).then((response) => {
      setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
      setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount);
    }).catch((error) => {
      console.error(error);
    });
  }
  return (
    <div>
      <h2>Convert</h2>

    <div>
      <table>
        <body>
          <tr>
            <td>currency:</td>
            <td>
              <input
              type="number"
              name='currency-amount-1'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              />
            </td>
            <td>
              <select
              value={chosenPrimaryCurrency}
              name="currency-option-1"
              onChange={(e) => setPrimaryCurrency(e.target.value)}
              >
                  {currencies.map((currency,key )=> (<option key={key}>{currency}</option>))}
              </select>
            </td>
          </tr>

          <tr>
            <td> secondary currency:</td>
            <td>
              <input
              type="number"
              name='currency-amount-2'
              value={result}
              disabled={true}
              />
            </td>
            <td>
              <select
              value={chosenSecondyCurrency}
              name="currency-option-2"
              onChange={(e) => setSecondyCurrency(e.target.value)}
              >
                  {currencies.map( (currency,key )=> (<option key={key}>{currency}</option>))}
              </select>
            </td>
          </tr>
        </body>
      </table>
      <button onClick={convertCript}>Convert</button>
      </div> 
      <Exchange
      exchangeRate={exchangeRate}
      chosenPrimaryCurrency={chosenPrimaryCurrency}
      chosenSecondyCurrency={chosenSecondyCurrency}
      />
    </div>
  )
}

export default Convert