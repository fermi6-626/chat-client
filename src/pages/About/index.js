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
              Omegle (oh·meg·ull) is a great way to meet new friends, even while
              practicing social distancing. When you use Omegle, you are paired
              randomly with another person to talk one-on-one. If you prefer,
              you can add your interests and you'll be randomly paired with
              someone who selected some of the same interests.
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
