import React from 'react'

function Scholarship() {
  return (
    <div>
      <h1>Apply for Scholarship</h1>
      <form>
        <input type="text" placeholder="Student ID" />
        <input type="text" placeholder="Scholarship Type" />
        <button type="submit">Apply</button>
      </form>
    </div>
  )
}

export default Scholarship