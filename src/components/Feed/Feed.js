import React from 'react'
import './Feed.css'
import Post from '../Post/Post'
import TweetBox from '../TweetBox/TweetBox'


const Feed = () => {
  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed__header'>
            <h2>Home</h2>
        </div>
        <TweetBox />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

        {/* TweetBox */}
        {/* Content */}
    </div>
  )
}

export default Feed