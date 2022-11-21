import React from 'react'

const exchange = ({exchangeRate,chosenPrimaryCurrency,chosenSecondyCurrency}) => {
  return (
    <div>
        <strong>{exchangeRate}</strong>
        <p>Convert from {chosenPrimaryCurrency} to {chosenSecondyCurrency}</p>
    </div>
  )
}

export default exchange