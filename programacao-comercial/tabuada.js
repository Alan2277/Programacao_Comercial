import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

let inc = 0;

const multiplicacao = () => {
    return inc * 5;
}

const incrementacao = () => {
    numero = inc + 1;
    inc = numero;
    return numero;
}


const App = () => {
    return (
        <View style={style.container}>
            <Text style={style.textstyle}>
                Tabuada do 5:
            </Text>
            <Text style={style.linhastyle}>5 * {incrementacao()} = {multiplicacao()}</Text>
            <Text />
            <Text style={style.linhastyle}>5 * {incrementacao()} = {multiplicacao()} </Text>
            <Text />
            <Text style={style.linhastyle}>5 * {incrementacao()} = {multiplicacao()} </Text>
            <Text />
            <Text style={style.linhastyle}>5 * {incrementacao()} = {multiplicacao()} </Text>
            <Text />
            <Text style={style.linhastyle}>5 * {incrementacao()} = {multiplicacao()} </Text>
            <Text />
            <Text style={style.linhastyle}>5 * {incrementacao()} = {multiplicacao()} </Text>
            <Text />
            <Text style={style.linhastyle}>5 * {incrementacao()} = {multiplicacao()} </Text>
            <Text />
            <Text style={style.linhastyle}>5 * {incrementacao()} = {multiplicacao()} </Text>
            <Text />
            <Text style={style.linhastyle}>5 * {incrementacao()} = {multiplicacao()} </Text>
            <Text />
            <Text style={style.linhastyle}>5 * {incrementacao()} = {multiplicacao()} </Text>

        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'start',
        backgroudColor: 'gray',
    },
    textstyle: {
        fontSize: 19,
        color: 'blue',
        textAlign: 'center'
    },
    linhastyle: {
        fontSize: 15,
        color: 'red',
        textAlign: 'start'
    }
});

export default App;