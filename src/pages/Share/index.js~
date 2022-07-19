import React from 'react'
import Navbar from '../../components/Navbar'

import style from './style.module.css'
import bannerImage from '../../assets/image/share_banner.png'
import facebook from '../../assets/icon/Facebook.png'
import discord from '../../assets/icon/Discord.png'
import instagram from '../../assets/icon/Instagram.png'
import reddit from '../../assets/icon/Reddit.png'
import snapchat from '../../assets/icon/Snapchat.png'
import twitter from '../../assets/icon/Twitter.png'

const Share = () => {
  return (
    <div>
      <Navbar />
      <div className='content'>
        <div>
          <div className={`text_content ${style.text_content}`}>
            <h3>Share on your social media</h3>
            <div className={style.icons}>
              {/* row 1 */}
              <div className={style.row}>
                <div className={style.icon_container}>
                  <img src={facebook} alt='facebook' />
                </div>
                <div className={style.icon_container}>
                  <img src={discord} alt='discord' />
                </div>
                <div className={style.icon_container}>
                  <img src={reddit} alt='instagram' />
                </div>
              </div>

              {/* row 2 */}
              <div className={style.row}>
                <div className={style.icon_container}>
                  <img src={instagram} alt='facebook' />
                </div>
                <div className={style.icon_container}>
                  <img src={snapchat} alt='discord' />
                </div>
                <div className={style.icon_container}>
                  <img src={twitter} alt='instagram' />
                </div>
              </div>
            </div>
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

export default Share
