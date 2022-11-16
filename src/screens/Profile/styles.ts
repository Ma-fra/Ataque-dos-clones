import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1B2B',
        padding: Platform.OS ==="ios" ? 64: 30,
        paddingHorizontal: 30
    },

    containerImage: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginBottom: 20,

    },

    image: {
        width: 90, 
        height: 90,
    },
    
    containerButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor:'#41414B',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
        width: 160,
    },
    
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        
    },    

    row: {
        color: '#FFF',
        fontSize: 14,
        padding: 15,
        marginTop: 15,
        borderBottomColor: '#B1B1BB',
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    title: {
        color: '#B1B1BB',
        fontSize: 14,
        padding: 15,
        marginTop: 8
    },

    containerImageNavegacao: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 2,
        marginBottom: 20,

    },

    navegacao: {
        width: 20, 
        height: 20,
        padding: 10,
    }
})