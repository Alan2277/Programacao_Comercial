import {View, Text, Image, StyleSheet} from 'react-native';
import { DATA_BASE } from './datacenter.js';

function DetailView({navigation, route}) {
    const item = route.params.burgue
    return(
        <View>
            <Text>Tela de Detalhes</Text>
            <Text>{item.nome}</Text>
            <Text>{item.descricao}</Text>
            <Text>{item.valor}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },

})

export default DetailView;
