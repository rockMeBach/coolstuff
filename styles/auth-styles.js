import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    default: {
      color: 'white',
      fontFamily: 'Lato-Black'
    },
    loginFooter:{
      flex: 1, 
      display: 'flex', 
      justifyContent: 'flex-end'
    },
    submitButton: {
      backgroundColor: 'white',
      marginTop: 30,
      color: 'black',
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
    },
    socialLogins: {
      backgroundColor: 'black',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 20,
      color: 'black',
      padding: 10,
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center'
    },
    buttonText: {
      color: 'black'
    },
    circleButton: {
      borderWidth: 1,
      borderColor:'#262928',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      backgroundColor: '#262928',
      borderRadius: 50,
    },
    label:{
      marginTop: 20
    },
    heading: {
      marginTop: 20,
      fontSize: 40
    },
    subHeading: {
      fontSize: 30
    },
    homeHeading: {
      fontSize: 20,
      textAlign: 'center',
    },
    input: {
      height: 50,
      marginTop: 15,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 10,
      padding: 10,
    },
    searchSection: {
      backgroundColor: 'white',
      flexDirection: 'row',
      borderRadius: 10,
      marginTop: 20
    },
    searchIcon: {
      padding: 10,
    },
    searchInput:{
      flex: 1,
      fontFamily: 'Lato-Black'
    },
    navbar:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    product:{
      overflow: 'hidden',
      borderRadius: 10,
      flex: 1,
      marginTop: 10,
      elevation: 10
    }
  })

export default styles