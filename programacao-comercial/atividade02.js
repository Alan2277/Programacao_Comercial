import React from 'react';
import { Text, View } from 'react-native'

const Nome = (valor) => {
    return (
        <View>
            <Text style={styleNome}>
                O nome eh {valor.name}
            </Text>
        </View>
    );
};

const MeuApp = () => {
    return (
        <View>
            <Nome name="Alan" />
            <Nome name="Alexandre" />
            <Nome name="Sampaio" />
        </View>
    )
}

const styleNome = {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center'
}

export default MeuApp;