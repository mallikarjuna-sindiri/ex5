import React, { useState } from 'react'

function Transfer({ balance, setBalance }) {
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')

  const handleTransfer = (e) => {
    e.preventDefault()
    const transferAmount = parseFloat(amount)
    if (transferAmount > 0 && transferAmount <= balance) {
      setBalance(balance - transferAmount)
      alert(`Transferred $${transferAmount} to ${recipient}`)
      setAmount('')
      setRecipient('')
    } else {
      alert('Invalid transfer amount')
    }
  }

  return (
    <div>
      <h1>Transfer</h1>
      <p>Current Balance: ${balance}</p>
      <form onSubmit={handleTransfer}>
        <input
          type="text"
          placeholder="Recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Transfer</button>
      </form>
    </div>
  )
}

export default Transfer