import React from "react"
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, Image, Text } from "react-native"
import { styles } from "./styles"
import Mulan from '../../assets/Mulan.png'
import Feiticeira from '../../assets/Feiticeira.png'
import Grogu from '../../assets/Grogu.png'
import Casa from '../../assets/home.png'
import Lupa from '../../assets/lupa.png'
import Download from '../../assets/download.png'



export const Profile = () => {
    return(
        <View style={styles.container}>
            <StatusBar
                backgroundColor={"#fff"}
            />

            <View style={styles.containerImage}>
                <Image
                    source={Mulan}
                    style={styles.image}
                />
                <Image
                    source={Feiticeira}
                    style={styles.image}
                />
                <Image 
                    source={Grogu}
                    style={styles.image}
                />
            </View>
            
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}
                    >
                    <Text style={styles.buttonText}
                    >
                        EDITAR PERFIS
                    </Text>
                </TouchableOpacity>
            </View>    

            <Text style={styles.row}>Minha Lista</Text>
            <Text style={styles.row}>Configurações do Aplicativo</Text>
            <Text style={styles.row}>Conta</Text>
            <Text style={styles.row}>Avisos Legais</Text>
            <Text style={styles.row}>Ajuda</Text>
            <Text style={styles.row}>Sair</Text>

            <Text style={[styles.title, {marginVertical: 20}]}
            >
                Versão: 2.13.0-rc3 (2210240)
            </Text>

            <View style={styles.containerImageNavegacao}>
                <Image
                    source={Casa}
                    style={styles.navegacao}
                />
                <Image
                    source={Lupa}
                    style={styles.navegacao}
                />
                <Image
                    source={Download}
                    style={styles.navegacao}
                />
                <Image
                    source={Mulan}
                    style={styles.navegacao}
                />
            </View>
        </View>
    )
}