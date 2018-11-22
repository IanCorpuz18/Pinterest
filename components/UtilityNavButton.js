import { Heart, Back, Share, More } from '../utils/icons'

import React, { Component } from 'react'

   class UtilityNavButton extends Component{
     render(){
 
   switch (this.props.icon){
       case "Back":
       return <Back/>
       case "Heart":
       return <Heart/>
       case "Share":
       return <Share/>
       case "More":
       return <More/>
    
       default:
       return "No Icon"
   }
    
    }
    }
export default UtilityNavButton;