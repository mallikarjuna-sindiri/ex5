import React, { useState } from 'react'

function UploadMaterial({ materials, setMaterials }) {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState(null)

  const handleUpload = (e) => {
    e.preventDefault()
    if (title && file) {
      const newMaterial = { title, fileName: file.name }
      setMaterials([...materials, newMaterial]) // Add new material to the state
      setTitle('')
      setFile(null)
      alert('Material uploaded successfully!')
    } else {
      alert('Please provide a title and select a file.')
    }
  }

  return (
    <div>
      <h1>Upload Material</h1>
      <form onSubmit={handleUpload}>
        <input
          type="text"
          placeholder="Material Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default UploadMaterial