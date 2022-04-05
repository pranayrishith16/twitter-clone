import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import VerifiedIcon from '@mui/icons-material/Verified';

const Post = () => {
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
            </div>
        </div>
    </div>
  )
}

export default Post