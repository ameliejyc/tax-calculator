import React from 'react'

const TaxTable = ({ band, taxable, rate, emoji }) => (
  <tr>
    <td>{band}</td>
    <td>
      {taxable}
      <span role="img" aria-label="emoji"> {emoji}</span>
    </td>
    <td>{rate}</td>
  </tr>
)

export default TaxTable