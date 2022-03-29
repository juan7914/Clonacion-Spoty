import { HeaderContainer, HeaderRight, HeaderLeft } from './styles'
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import {useSelector} from "react-redux";
import  {selectUser}  from '../../feactures/UserSlice';


const Header = () => {
  const user = useSelector(selectUser)
  return (
    <HeaderContainer>
           <HeaderLeft>
           <SearchIcon/>
           <input type="text" placeholder="Search for Artistc, Songs, or other"/>
            </HeaderLeft>
           <HeaderRight>
             <Avatar src={ user?.images[0]?.url} alt={user?.id}/>
             <h4>{ user?.id  }</h4>
            </HeaderRight>
    </HeaderContainer>
  )
}

export default Header