import { View, Text, Image, StyleSheet } from 'react-native';
import { DATA_BASE } from './DATA_BASE';

function DetailView({ navigation, route }) {
    const item = route.params.burgue
    return (
        <View style={styles.container}>

            <View style={styles.estiloImagem}>
                <Image source={{ uri: item.imagem }} style={styles.formatacaoImagem} />
            </View>

            <View style={styles.formatacaoTitulo}>
                <Text style={styles.estiloTitulo}>{item.nome}</Text>
            </View>

            <View style = {styles.formatacaoDescricao}>
                <Text style = {styles.estiloDescricao}>{item.descricao}</Text>
            </View>

            <View style = {styles.formatacaoValor}>
                <Text style = {styles.estiloValor}>R$ {item.valor.toFixed(2)}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8
    },
    formatacaoIcone: {

    },
    formatacaoTitulo: {
        alignItems: 'center',
        padding: 5
    },
    estiloTitulo: {
        fontSize: 24,
        color: 'red',
        fontWeight: 'bold',

    },
    formatacaoImagem: {
        width: 600,
        height: 425,
    },
    estiloImagem: {
        alignItems: 'center',
        paddingBottom: 10,
        paddingHorizontal: 9,
    },
    formatacaoDescricao: {
        paddingTop: 5,
        paddingHorizontal: 6
        
    },
    estiloDescricao: {
        fontSize: 20
    },
    formatacaoValor: {
        paddingTop: 17,
        paddingHorizontal: 6
    },  
    estiloValor: {
        color: '#6495ED',
        fontSize: 18,
        fontWeight: 'bold',
    },




})

export default DetailView;