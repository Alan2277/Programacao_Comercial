import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const YourApp = () => {
    return (
        <View style={style.center}>
            <Text>
                <h1>
                  Informações do aluno
                </h1>
                <p>
                  <strong>Nome:</strong> Alan Alexandre Sampaio<br></br>
                  <strong>Idade:</strong> 19 anos<br></br>
                  <strong>Curso:</strong> Licenciatura em Computação<br></br>
                  <strong>Faculdade:</strong> IFPI
                </p>
            </Text>
        </View>
    );
}
const style = StyleSheet.create({
    center: {
        flex: 1, justifyContent: "center", alignItems:
            "center"   
    },
})

export default YourApp;