import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2'
const MonthlyCurrency = () => {

    const getData = () => {
        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {function: 'DIGITAL_CURRENCY_MONTHLY', market: 'CNY', symbol: 'BTC'},
            headers: {
              'X-RapidAPI-Key': '1d91cb947bmsh9e61035ea610ff5p1644b2jsn3101db2df639',
              'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function(response) {
              console.log(response.data)
          }).catch(function (error) {
              console.error(error);
          });
    }
  return (
    // <Line style={{ width: 700}}
    <div>
        <button onClick={getData}>get</button>
        
    </div>
    
  )
}

export default MonthlyCurrency