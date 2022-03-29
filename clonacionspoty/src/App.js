
import React, {  useEffect } from 'react';
import './App.css';
import Player from './components/PLayer/Player';
import Login from './components/Login/Login';
import { getTokkenFromURL } from './spotifylogic';
import { useDispatch, useSelector } from 'react-redux';
import {SET_USER, selectUser} from './feactures/UserSlice';
import SpotifyWebApi from 'spotify-web-api-js';
import {selectToken} from './feactures/TokenSlice';
import {SET_TOKEN} from './feactures/TokenSlice';
import { SET_PLAYLIST } from './feactures/PlaylistSlice';


const spotify = new SpotifyWebApi();




function App() {
  
  const token = useSelector(selectToken)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
   const hash =getTokkenFromURL();
  
   const _token = hash.access_token;

    if(_token){
      dispatch(SET_TOKEN(_token))

      spotify.setAccessToken(_token)
      spotify.getMe().then(user=>dispatch(SET_USER(user)))
      console.log("token =>", token);
      spotify.getPlaylist("3VeTroUGdG1DsFJ6hSvFhD").then(playlists=>
        dispatch(SET_PLAYLIST(playlists)))
      
    }

     

  }, [dispatch])

  return (
    <div >
    {
      user? <Player/> : <Login/>
    }
   
            
  
    </div>
  );
}

export default App;
