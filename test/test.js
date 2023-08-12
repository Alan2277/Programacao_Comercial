import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const MeuApp = () => {
    return (
        <View style={styles.center}>
            <Text style = {styles.title}> Informações do aluno </Text>
            <Text style = {styles.informacao}>Nome: Alan Alexandre Sampaio</Text>
            <Text style = {styles.informacao}>Idade: 19 anos</Text>
            <Text style = {styles.informacao}>Curso: Licenciatura em Computação</Text>
            <Text style = {styles.informacao}>Faculdade: IFPI</Text>
        </View>
    );
}
const styles = ({
    center: {
        flex: 1, 
        justifyContent: "center",
        backgroundColor: 'rgb(232, 232, 232)'
},

    title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'rgb(49, 49, 211)',
    fontWeight: 'bold',
},

    informacao: {
    fontSize: 15,
    color: 'rgb(68, 68, 180)',
    textAlign: 'start',

},
})

export default MeuApp;
