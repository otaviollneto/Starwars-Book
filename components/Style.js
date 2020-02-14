import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    scrollTextTitleBig:{
        color:'#FFC208', 
        fontSize:32, 
        marginTop:5,
        fontWeight: 'bold'
    },
    scrollTextTitle:{
        color:'#FFC208', 
        fontSize:16, 
        marginTop:5    
    },
    scrollText:{
        color: '#FFF', 
        fontSize:16
    },
    scrollButton:{
        flex:1,
        backgroundColor: '#FFC208',
        borderRadius: 10,
        width: 150,
        padding: 5,
        margin: 5,
        marginTop: 10,
        color: '#333', 
        alignItems: "center"
    },
    scrollButtonText:{
        color: '#333', 
        fontSize:16,
    }
});