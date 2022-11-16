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
        justifyContent: "space-between",
        marginBottom: 40,

    },

    image: {
        width: 100, 
        height: 100,

    },

    button: {
        backgroundColor:'#41414B',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    
    buttonText: {
        color: '#FFF',
        fontSize: 16,
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
        fontSize: 13,
        padding: 10,
        marginTop: 10
    },
})