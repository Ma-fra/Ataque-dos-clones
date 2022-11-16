import React from "react"
import { TouchableOpacity, View, Image, Text } from "react-native"
import { styles } from "./styles"
import Raya from '../../assets/Raya.png'
import Sisu from '../../assets/Sisu.png'
import Mulan from '../../assets/Mulan.png'
import Feiticeira from '../../assets/Feiticeira.png'
import Grogu from '../../assets/Grogu.png'

export const Profile = () => {
    return(
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image
                    source={Raya}
                    style={styles.image}
                /> 
                <Image 
                    source={Sisu}
                    style={styles.image}
                />
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

            <TouchableOpacity style={styles.button}
            >
                <Text style={styles.buttonText}
                >
                    EDITAR PERFIS
                </Text>
            </TouchableOpacity>

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


        </View>



    )
}