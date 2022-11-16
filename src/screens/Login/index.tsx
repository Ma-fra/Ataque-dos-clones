import React from 'react'
import { styles } from './styles'
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TextInput, TouchableOpacity, Linking } from 'react-native';
import Logo from '../../assets/disneyplus.png'
import Flechinha from '../../assets/back.png'

export const Login = () => {

    return(
        <View style={styles.container}>
            <StatusBar
                backgroundColor={"#fff"}
            />

            <Image
                source={Flechinha}
                style={styles.botaozinhoImage}
            />

            <View style={styles.containerImage}>
                <Image
                source={Logo}
                style={styles.logoImage}
                />
                </View>

            <Text style={styles.text}>
                Log in with your email
            </Text>
            

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={'#555'}
            />

            <TouchableOpacity style={styles.button}
            >
                <Text style={styles.buttonText}
                >
                    CONTINUE
                </Text>
            </TouchableOpacity>

            <Text style={[styles.title, { marginVertical: 20}]}
            >
                New to Disney+?
            </Text>

            <Text style={[styles.hyperlinkStyle, { marginVertical: 20 }]}
                onPress={() => {
                    Linking.openURL('#');
                  }}
            >
                SIGN UP
            </Text>
        </View>

    )
}