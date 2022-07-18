import React from 'react'

import Navbar from '../../components/Navbar'
import style from './style.module.css'

const Rules = () => {
  return (
    <div>
      <Navbar />
      <div className='content'>
        <div className={`${style.text_content}`}>
          <ul>
            <li>
              <div className='dot'></div>
              Omegle reserves the right to ban (temporarily or permanently) any
              misspelled or offensive user.
            </li>
            <li>
              <div className='dot'></div>
              The service are not available to, and shall not be accessed or
              used by, persons under the age of 13.
            </li>
            <li>
              <div className='dot'></div>
              The service may, in their entirety or in part, be protected by
              copyright, trademark and/or other laws of the United States of
              America, other countries, or other jurisdictions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Rules
