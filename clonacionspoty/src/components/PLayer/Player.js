import React from 'react'
import Body from '../Body/Body'
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import { SpotifyBody } from './styles';


const Player = () => {
  return (
    <>
    <SpotifyBody>
    <SideBar/>
     <Body/>
     
     </SpotifyBody>
     <Footer/>
     </>
  )
}

export default Player