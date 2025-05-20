import React from 'react'

function CheckMaterial({ materials }) {
  return (
    <div>
      <h1>Check Material</h1>
      {materials.length > 0 ? (
        <ul>
          {materials.map((material, index) => (
            <li key={index}>
              <strong>{material.title}</strong> - {material.fileName}
            </li>
          ))}
        </ul>
      ) : (
        <p>No materials uploaded yet.</p>
      )}
    </div>
  )
}

export default CheckMaterial