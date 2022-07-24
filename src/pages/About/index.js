import React from 'react'
import Navbar from '../../components/Navbar'

import style from './style.module.css'
import bannerImage from '../../assets/image/about_banner.svg'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='content'>
        <div>
          <div className={`text_content ${style.text_content}`}>
            <p>
              Chat: The final frontier.
              These are the webapp of the chat-app startalk.
              It’s continuing mission to talk to strange new people.
              To seek out new life and new civilization.
              To boldly go where many man has gone before.
            </p>
          </div>
        </div>
        <div>
          <div className={'banner_container'}>
            <img
              src={bannerImage}
              style={{
                width: '400px',
              }}
              alt='video call'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
