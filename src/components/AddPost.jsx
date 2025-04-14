// src/components/AddPost.jsx
import React, { useState } from 'react'

const AddPost = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && content) {
      onAdd({ title, content })
      setTitle('')
      setContent('')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <h2>Add New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      /><br /><br />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows="5"
        cols="40"
      /><br /><br />
      <button type="submit">Add Post</button>
    </form>
  )
}

export default AddPost
