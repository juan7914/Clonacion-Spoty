import { HeaderContainer, HeaderRight, HeaderLeft } from './styles'
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';

const Header = () => {
  return (
    <HeaderContainer>
           <HeaderLeft>
           <SearchIcon/>
           <input type="text" placeholder="Search for Artistc, Songs, or other"/>
            </HeaderLeft>
           <HeaderRight>
             <Avatar/>
             <h4>Sergio89</h4>
            </HeaderRight>
    </HeaderContainer>
  )
}

export default Header