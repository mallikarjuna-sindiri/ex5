import React, { useState } from 'react'

function Invoice() {
  const [invoiceData, setInvoiceData] = useState({
    customerName: '',
    email: '',
    phone: '',
    items: [{ description: '', quantity: 1, price: 0 }],
  })

  const handleChange = (e, index) => {
    const { name, value } = e.target
    if (name === 'description' || name === 'quantity' || name === 'price') {
      const updatedItems = [...invoiceData.items]
      updatedItems[index][name] = name === 'quantity' || name === 'price' ? parseFloat(value) || 0 : value
      setInvoiceData({ ...invoiceData, items: updatedItems })
    } else {
      setInvoiceData({ ...invoiceData, [name]: value })
    }
  }

  const addItem = () => {
    setInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, { description: '', quantity: 1, price: 0 }],
    })
  }

  const removeItem = (index) => {
    const updatedItems = invoiceData.items.filter((_, i) => i !== index)
    setInvoiceData({ ...invoiceData, items: updatedItems })
  }

  const calculateTotal = () => {
    return invoiceData.items.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Invoice generated successfully!')
    console.log('Invoice Data:', invoiceData)
  }

  return (
    <div>
      <h1>Invoice Generation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={invoiceData.customerName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Customer Email"
          value={invoiceData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Customer Phone"
          value={invoiceData.phone}
          onChange={handleChange}
          required
        />
        <h2>Items</h2>
        {invoiceData.items.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              name="description"
              placeholder="Item Description"
              value={item.description}
              onChange={(e) => handleChange(e, index)}
              required
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) => handleChange(e, index)}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={item.price}
              onChange={(e) => handleChange(e, index)}
              required
            />
            <button type="button" onClick={() => removeItem(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addItem}>
          Add Item
        </button>
        <h3>Total: ${calculateTotal()}</h3>
        <button type="submit">Generate Invoice</button>
      </form>
    </div>
  )
}

export default Invoice