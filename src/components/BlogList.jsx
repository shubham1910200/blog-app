// src/components/BlogList.js
import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div
          key={post.id}
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '15px',
            marginBottom: '20px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.content.slice(0, 100)}...</p>
          <Link to={`/post/${post.id}`} style={{ color: '#0077cc' }}>
            Read More →
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList
