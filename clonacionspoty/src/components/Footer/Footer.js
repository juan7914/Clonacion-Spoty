import React from 'react'
import { FooterCenter, FooterContainer, FooterLeft, FooterRight } from './Styles';
import ShuffeIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import Grid from "@material-ui/core/Grid";

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
       <ShuffeIcon />
       <SkipPreviousIcon />
       <PlayCircleOutlineIcon/>
       <SkipNextIcon />
       <RepeatIcon /> 

      
       </FooterCenter>
      <FooterRight>
       <Grid container spacing={2}>
       
        </Grid>
      
       </FooterRight>
    </FooterContainer>
  )
}

export default Footer