import React from 'react'
import { FooterCenter, FooterContainer, FooterLeft, FooterRight } from './Styles';
import ShuffeIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import Grid from "@material-ui/core/Grid";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHW7LoAcuTJOd9XkQL5lx8_1derrdVornKA&usqp=CAU" alt="cover"/>
       <div>
         <h4>Green Day</h4>
         <p>Jesus of suburbia</p>
        </div>
       </FooterLeft>
      <FooterCenter>
       <ShuffeIcon  className="shuffle"/>
       <SkipPreviousIcon className="icon"/>
       <PlayCircleOutlineIcon className="icon"/>
       <SkipNextIcon className="icon" />
       <RepeatIcon className="repeat"/> 

      
       </FooterCenter>
      <FooterRight>
       <Grid container spacing={2}>
         <Grid item><PlaylistPlayIcon/></Grid>
         <Grid item><VolumeDownIcon/> </Grid>
         <Grid item xs><Slider/></Grid>
        </Grid>
      
       </FooterRight>
    </FooterContainer>
  )
}

export default Footer