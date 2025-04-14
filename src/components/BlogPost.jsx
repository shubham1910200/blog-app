// src/components/BlogPost.js
import React from 'react'

const BlogPost = ({ post }) => {
  if (!post) return <p>Post not found.</p>

  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  )
}

export default BlogPost
