import React, {useEffect, useState} from 'react'
import './Feed.css'
import Post from '../Post/Post'
import TweetBox from '../TweetBox/TweetBox'
import db from '../../firebase'
import FlipMove from 'react-flip-move'

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  console.log(posts)
  
  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed__header'>
            <h2>Home</h2>
        </div>
        <TweetBox />

        <FlipMove>
          {posts.map(post => (
            <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verfied={post.verfied}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
            />
            ))}
        </FlipMove>

        {/* TweetBox */}
        {/* Content */}
    </div>
  )
}

export default Feed
