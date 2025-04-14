// src/pages/PostDetails.js
import React from 'react'
import { useParams } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

const dummyPosts = [
  { id: 1, title: 'First Post', content: 'This is the full content of the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the full content of the second post.' },
]

const PostDetails = () => {
  const { id } = useParams()
  const post = dummyPosts.find(p => p.id === parseInt(id))

  return (
    <div className="container">
      <BlogPost post={post} />
    </div>
  )
}

export default PostDetails
