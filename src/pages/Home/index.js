import React, { useReducer, useState } from 'react'
import NavBar from '../../components/Navbar'
import bannerImage from '../../assets/image/banner.png'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { TagsInput } from 'react-tag-input-component'

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}
const Home = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState([""])
  const handleclick = () => {
    navigate('/chat')
  };
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submit, setSubmit] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 3000);
  }
  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <div>
      <NavBar />
      <div className='content'>
        <div>
          <div className={`text_content ${style.text_content}`}>
            <h3>
              A place for scientists to find love.

              <br /><br />

              Chat with people who share your zest for science.
            </h3>

            <h5>Start chatting :</h5>
            <div className={'button_container'}>
              <button onClick={() => handleclick()} className={`btn main_btn`}>
                Video
              </button>
              <button
                onClick={() => handleclick()}
                className={`btn  secondary_btn`}
              >
                Text message
              </button>
            </div>
            <div className={'button_container'}>
              {submit &&
                <ul>
                  {Object.entries(formData).map(([name, value]) => (
                    <li key={name}>{name}:{value.toString()}</li>
                  ))}
                </ul>
              }

              <form onSubmit={handleSubmit} className={'interest'} placeHolder='Add Interests'>
                <TagsInput
                  className={`tags`}
                  name="interests"
                  value={select}
                  placeHolder='Add Interests'
                  onChange={setSelect}
                />
              </form>
              <button type='submit' className={'submit_btn'}>Add</button>
            </div>
            <p className={style.warning}>
              Satisfy your intellectual needs by talking to other who are just like you !
            </p>
          </div>
        </div>
        <div>
          <div className={'banner_container'}>
            <img
              src={bannerImage}
              style={{
                width: '600px',
              }}
              alt='video call'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
