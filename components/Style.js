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
    cardbox: {
        flex: 1, 
        marginBottom: 20, 
        backgroundColor: '#0e1717', 
        borderRadius: 10, 
        padding:10
    },
    scrollTextTitleBig:{
        color:'#FFC208', 
        fontSize:18, 
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
        backgroundColor: '#FFC208',
        borderRadius: 10,
        width: 150,
        padding: 5,
        margin: 5,
        marginTop: 10,
        color: '#333', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollButtonText:{
        color: '#333', 
        fontSize:16,
    },
    modalbox: {
        flex:1, 
        marginTop: 22, 
        paddingBottom: 50,
        backgroundColor: '#000', 
        paddingTop:30, 
        paddingStart:20, 
        paddingEnd:10
    },
    modaltitle:{
        fontSize: 32,
        fontWeight: "bold",
        color: 'white',
        alignSelf:"center",
        padding: 10
    }
});