import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native';
import { DATA_BASE } from './DATA_BASE';
import { TouchableOpacity } from 'react-native';

const icone = { uri: "https://cdn-1.webcatalog.io/catalog/ifood/ifood-icon-filled-256.webp?v=1675613748311" }


function ListItem({ item, navigation }) {
    function onPressItem() {
        navigation.navigate("Detalhes", { burgue: item })
    }

    return (
        <View style={styles.formatacaoItem}>

            <TouchableOpacity onPress={onPressItem}>

                
                <View style={styles.estiloImagem}>
                    <Image style={styles.formatacaoImagem} source={{ uri: item.imagem }} />
                </View>

                <View style={styles.formatacaoView}>

                    <View>
                        <Text style={styles.estiloNome}>{item.nome}</Text>
                    </View>

                    <View style={styles.formatacaoDescricao}>
                        <Text style={styles.estiloDescricao}>{item.descricao}</Text>
                    </View>

                    <View>
                        <Text style={styles.estiloValor}>R$ {item.valor.toFixed(2)}</Text>
                    </View>

                </View>

            </TouchableOpacity>

        </View>
    )
}

function ListView(props) {
    return (
        <View style={styles.formatacaoView}>

            <View style={styles.estiloIcone}>
                <Image
                    style={styles.formatacaoIcone}
                    source={(uri = icone)}
                />
            </View>
            <View style={styles.estiloTituloPrincipal}>
                <Text style={styles.formatacaoTituloPrincipal}>LISTA DE HAMBURGUES</Text>
            </View>

            <FlatList data={DATA_BASE} renderItem={({ item }) => <ListItem item={item} navigation={props.navigation} />} />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    formatacaoIcone: {
        width: 80,
        height: 80,
    },
    estiloIcone: {
        alignItems: 'center',
        padding: 15,

    },
    estiloTituloPrincipal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    formatacaoTituloPrincipal: {
        fontWeight: 'bold',
        fontSize: 17
    },
    formatacaoTitulo: {
        alignItems: 'center',
        padding: 10,
    },
    estiloTitulo: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    formatoTextInput: {
        borderBottomWidth: 1,
        paddingHorizontal: 1,
        paddingVertical: 15,
    },
    formatacaoButton: {
        paddingTop: 15,
    },
    formatacaoItem: {
        paddingHorizontal: 6,
        paddingBottom: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FFDAB9',
        flexDirection: 'row',
    },
    estiloImagem: {
        paddingHorizontal: 10,
    },
    formatacaoImagem: {
        width: 115,
        height: 95,
    },
    formatacaoView: {
        flexDirection: 'column',
    },
    estiloNome: {
        fontWeight: 'bold',
        fontSize: 20
    },
    formatacaoDescricao: {
        maxWidth: 580,
    },
    estiloDescricao: {
        textAlign: 'justify',
        fontSize: 17,
    },
    estiloValor: {
        color: '#6495ED',
        fontSize: 17,
        fontWeight: 'bold',
    },
});



export default ListView;


