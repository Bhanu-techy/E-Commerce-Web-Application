import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

function Login() {

   const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [showSubmitErr, setShowErr] = useState(false)
    const [errMsg, setErrmsg ] = useState("")

     const navigate = useNavigate();

    const submitForm = async event => {
        event.preventDefault()

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      navigate("/", {replace : true})
    } else {
      setErrmsg(data.error_msg)
      setShowErr(true)
    }
    }


  return (
    <div className='login-container'>
        <div className='login-div'>
          <form onSubmit={submitForm}>
            <h3 className='store-name'>Lumina Store</h3>
          <div className="input-container">
                  <label htmlFor="username">USERNAME</label>
                  <input
                    id="username"
                    type="text"
                    className="login-input"
                    value={username}
                    onChange={(e)=>setUserName(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="password">PASSWORD</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    className="login-input"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                {showSubmitErr && <p className="error-msg">{errMsg}</p>}
                <button type="submit" className="login-button">
                  Login
                </button>
              </form>
        </div>
    </div>
  )
}

export default Login