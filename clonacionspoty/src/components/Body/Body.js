import React from 'react'
import { BodyContainer, Icons, Info, InfoText, Songs } from './styles';
import Header from "./Header";
import {useSelector} from "react-redux";
import { selectPLaylist } from '../../feactures/PlaylistSlice';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Favoriteicon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";



 
const Body = () => {
 
  const playlist = useSelector(selectPLaylist);
  console.log("playlist =>", playlist)

  return (
    <BodyContainer>
         <Header />
         <Info>
           <img src={playlist?.images[0]?.url } alt=""/>
           <InfoText>
             <h4>PLAYLIST</h4>
             <h2>American Idiot</h2>
             <p>{playlist?.name}</p>
           </InfoText> 
          </Info>
          <Songs>
           <Icons>
                <PlayCircleFilledIcon  className="playButton"/> 
                <Favoriteicon fontSize="large"/> 
                <MoreHorizIcon fontSize= "large" />
             </Icons>
             {

               playlist?.tracks?.items.map((item, index )=>(
                 <SongRow track={item.track}  key={index}/>
               ))
             }
           </Songs>
    </BodyContainer>
  )
}

export default Body