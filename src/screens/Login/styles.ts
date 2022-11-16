import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1C2B',
        padding: Platform.OS ==="ios" ? 64: 30,
        paddingHorizontal: 30
    },

    logoImage: {
        width: 110, 
        height: 110,
        justifyContent: 'center'
    },


    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },

    input: {
        backgroundColor:'#31333f',
        color: '#fff',
        fontSize: 12,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },

    button: {
        backgroundColor:'#0072d3',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    },

    title: {
        color: '#B1B1BB',
        fontSize: 14,
        fontWeight: 'bold'
    },

    hyperlinkStyle: {
        color: '#FFF',
        fontSize: 14,
        marginTop: 2
      },
})