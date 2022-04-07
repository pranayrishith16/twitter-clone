import React, {useEffect, useState} from 'react'
import './Feed.css'
import Post from '../Post/Post'
import TweetBox from '../TweetBox/TweetBox'

const Feed = () => {
  const [posts, setPosts] = useState([]);
  
  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed__header'>
            <h2>Home</h2>
        </div>
        <TweetBox />
        {posts.map(post => (
          <Post 
          displayName={post.displayName}
          username={post.username}
          verfied={post.verfied}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
        ))}

        {/* TweetBox */}
        {/* Content */}
    </div>
  )
}

export default Feed
