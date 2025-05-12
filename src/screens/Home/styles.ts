import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
      padding: 24
    },
  
    title: {
      color: "#FFF", 
      fontSize: 24, 
      fontWeight: 'bold', 
      marginTop: 48
    },
  
    subtitle: {
      color: "#6b6b6b", 
      fontSize: 16 
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
    },

    input: {
        flex: 1,
        height: 56,
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        color: "#FDFCFE",
        padding: 16,
        fontSize: 16,
        marginRight: 12
    }, 

    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31CF67",
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: "#FFF",
        fontSize: 24,
    }
  })