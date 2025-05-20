import React from 'react'

function Payment() {
  return (
    <div>
      <h1>Payment</h1>
      <form>
        <input type="text" placeholder="Student ID" />
        <input type="number" placeholder="Amount" />
        <button type="submit">Pay</button>
      </form>
    </div>
  )
}

export default Payment