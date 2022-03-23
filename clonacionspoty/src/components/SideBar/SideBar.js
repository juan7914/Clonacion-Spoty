import React from 'react'
import { Playlists, SidebarContainer } from './styles'
import  SideBarChoice  from './SidebarChoice';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'


const SideBar = () => {
  return (
    <SidebarContainer >
    <img src="http://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo" />
    <SideBarChoice title="Home" Icon={HomeIcon} />
    <SideBarChoice title="Search" Icon={ SearchIcon} />
    <SideBarChoice title="Your Library" Icon={ LibraryMusicIcon} />
    <Playlists>PLAYLIST </Playlists>
    <hr/>
    <SideBarChoice title="2022 Chillout Music"  />
    <SideBarChoice title="Punk Rock" />

    </SidebarContainer>
  )
}

export default SideBar