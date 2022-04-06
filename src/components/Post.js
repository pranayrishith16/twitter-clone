import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post = ({displayName, username, verified, text, image, avatar}) => {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar />
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        Pranay Rishith <span>
                            <VerifiedIcon className='post__badge'/>
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>I challenge you to build twitter clone</p>
                </div>
            </div>
            <img
                src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
                alt=''
            />
            <div className='post__footer'>
                <ChatBubbleOutlineIcon fontSize="small"/>
                <RepeatIcon  fontSize="small"/>
                <FavoriteBorderIcon  fontSize="small"/>
                <PublishIcon  fontSize="small"/>
            </div>
        </div>
    </div>
  )
}

export default Post