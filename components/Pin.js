import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {  PinIcon } from '../utils/icons'
import UtilityNavButton from './UtilityNavButton'
import Pic from "./assets/gs.jpg"
import Button from './Button';
class Pin extends Component {
    render() {
        return (
            <View style={styles.PinContainer}>
                <View style={styles.PinHeader}>
                    <View style={styles.UtilityNav}>
                      <UtilityNavButton icon="Back" />
                      <UtilityNavButton icon="Heart" />
                      <UtilityNavButton icon="Share" />
                      <UtilityNavButton icon="More" />
                    </View>
                    <View style={styles.PinButtonContainer}>
                        <Button red icon text="Save" />
                    </View>
                </View>
                <View style={styles.PinContent}>
              
                    <Text style={styles.ImagePlaceHolder}>
                        PlaceHolder</Text>
                </View>

                <View style={styles.PinMeta}>
                    <View style={styles.PinMetaTextContainer}>
                        <Text style={styles.PinMetaText}>
                            Saved from</Text>
                        <Text style={[styles.PinMetaText,styles.TextBold]}>
                            Website.com
</Text>
                    </View>
                    <Button text="Visit" />
                </View>

                <View style={styles.PinUser}>
                    <View style={styles.PinUserAvatar}>
                       
                    </View>
                    <View style={styles.PinUserContainer}>
                        <Text style={styles.PinUserText}>
                            <Text style={styles.TextBold}>User Name </Text>saved to <Text style={styles.TextBold}>
                                Space
           </Text>
                        </Text>
                        <Text style={styles.PinUserText}>Lorem Ipsum</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    PinContainer: {
        flex: 1,
        alignSelf: "stretch"
    },
    PinHeader: {
        backgroundColor: "white",
        flexDirection: "row",
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "space-between",
        padding: 8
    },
    UtilityNav: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between"

    },
    PinButtonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        flexDirection: "row",
    },
    PinButton: {
        flexDirection: 'row',
        backgroundColor: "red",
        padding: 8,
        borderRadius: 6,
        width: 65,
        justifyContent:"space-between",
        alignItems: "center"

    },
    PinButtonText: {
        color: "white"
    },
    PinContent: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 8,
        paddingRight: 8
    },
    ImagePlaceHolder: {
        backgroundColor: "#1e1e1e",
        flex: 1,
        alignSelf: "stretch",
        borderRadius: 6
    },
    PinMeta: {
        // flex: 1,
        backgroundColor: "white",
        flexDirection: "row",
        paddingBottom: 16,
        paddingTop: 16,
        paddingLeft: 8,
        paddingRight: 8,
    },
    PinMetaTextContainer: {
        flex: 1,
    }, 
    UtilityButton: {
        backgroundColor: "#cecece",
        alignItems:"center",
        justifyContent:"center"
    },
    UtilityButtonText:{
        color:"black",
        fontWeight:"bold"
    },
    PinMetaText: {

    },
   
    PinUser: {
        flex: 5,
        flexDirection:"row",
        paddingLeft:8,
        paddingRight:8
    },
    PinUserAvatar: {
        width:50,
        height:50,
        borderRadius:25,
        marginRight:8,
        backgroundColor:"black"
    },
    PinUserContainer: {

    },
    PinUserText: {

    },
    TextBold:{
        fontWeight:"bold"
    }
})
export default Pin;