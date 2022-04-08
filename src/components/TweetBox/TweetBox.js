import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './TweetBox.css'
import db from '../../firebase'

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName:"Pranay rishith",
      username:"pranayrishith16",
      verified:true,
      text:tweetMessage,
      avatar:'',
      image:tweetImage
    })
    setTweetImage('');
    setTweetMessage('');
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
          <Avatar
            avatarStyle='Circle'
            topType='ShortHairShortFlat'
            accessoriesType='Blank'
            hairColor='BrownDark'
            facialHairType='BeardLight'
            facialHairColor='BrownDark'
            clotheType='BlazerShirt'
            eyeType='Default'
            eyebrowType='Default'
            mouthType='Default'
            skinColor='Light'
          />
          <input onChange={e => setTweetMessage(e.target.value)} placeholder='Whats happening' type='text' value={tweetMessage}/>
        </div>
          <input onChange={e => setTweetImage(e.target.value)} className='tweetBox__imageInput' placeholder='Enter image URL' type='text' value={tweetImage}/>
        <Button onClick={sendTweet} className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
