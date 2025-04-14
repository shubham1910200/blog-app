// src/pages/Home.jsx
import React, { useState } from 'react'
import BlogList from '../components/BlogList'
import AddPost from '../components/AddPost'

const Home = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is the first blog post.' },
    { id: 2, title: 'Second Post', content: 'Another awesome article.' },
  ])

  const handleAddPost = (newPost) => {
    setPosts(prev => [...prev, { ...newPost, id: prev.length + 1 }])
  }

  return (
    <div className="container">
      <h1>📝 My Blog</h1>
      <AddPost onAdd={handleAddPost} />
      <BlogList posts={posts} />
    </div>
  )
}

export default Home
