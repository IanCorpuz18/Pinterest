import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import PinIcon from "../utils/icons/Pin"
   class Button extends Component{
     render(){
         let bgColor, textWeight, textColor;
         if (this.props.red){
             bgColor="red"
         }
         else{
             bgColor="#cecece",
             textWeight = "bold",
             textColor= "black"
         }
    return(
        <View style={[styles.PinButton, {backgroundColor:bgColor}]}>
        {this.props.icon &&  <PinIcon /> }
        <Text style={[styles.PinButtonText,{fontWeight: textWeight, color: textColor}]}>{this.props.text}</Text>
    </View>
    )
    }
    }
    const styles  = StyleSheet.create({
    PinButton:{    
    flexDirection: 'row',
    backgroundColor: "red",
    padding: 8,
    borderRadius: 6,
    width: 65,
    justifyContent:"space-around",
    alignItems: "center"

    },
    PinButtonText:{
        color: "white"
    }
    })
export default Button;