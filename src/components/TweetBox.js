import { Avatar, Button } from '@mui/material'
import React from 'react'
import './TweetBox.css'

const TweetBox = () => {
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
          <input placeholder='Whats happening' type='text'/>
        </div>
          <input className='tweetBox__imageInput' placeholder='Enter image URL' type='text'/>
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox