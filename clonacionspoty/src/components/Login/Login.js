import React from 'react'
import { LoginButton, LoginContainer } from './styles'

const endpoint ="https://accounts.spotify.com/authorize"
const clientID = "920f597c6d2a45f889512e11a2e99cee"
const redirectUri="http://localhost:3001/";
const scopes = ["user-read-currently-playing", "user-read-recently-played", "user-read-playback-state","user-top-read", "user-modify-playback-state"]

const loginURL= `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true`



const Login = () => {
  return (
    <LoginContainer>
      <img src="http://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo" />
       <LoginButton href={loginURL} >Login with spotify</LoginButton>
     </LoginContainer>
  )
}

export default Login