import { Text, View, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native';
import { DATA_BASE } from './DATA_BASE';
import { TouchableOpacity } from 'react-native';

const iconeLogo = { uri: "https://cdn-icons-png.flaticon.com/512/4479/4479138.png" }


function ListItem({ item, navigation }) {
    function onPressItem() {
        navigation.navigate("Detail", { burgue: item })
    }
    //navigation: é uma propriedade que direcionar a navegação entre as telas//
    //navigate: é a função que realiza a navegação para a rota informada//
    return (
        <TouchableOpacity onPress={onPressItem}>
            <View style={styles.formatacaoItem}>

                <View style={styles.estiloImagem}>
                    <Image style={styles.formatacaoImagem} source={{ uri: item.imagem }} />
                </View>

                <View style={styles.formatacaoView}>

                    <View>
                        <Text style={styles.estiloNome}>{item.nome}</Text>
                    </View>

                    <View>
                        <Text style={styles.estiloDescricao}>{item.descricao}</Text>
                    </View>

                    <View>
                        <Text style={styles.estiloValor}>R$ {item.valor.toFixed(2)}</Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}

function ListView(props) {
    return (
        <View style={styles.formatacaoView}>
            <View style = {styles.formatacaoTituloHamburgueria}>
            <Text style = {styles.tituloHamburgueria}>MESTRE DO HAMBÚRGUER</Text>
            </View>
            <View style={styles.estiloIcone}>
                <Image
                    style={styles.formatacaoIcone}
                    source={(uri = iconeLogo)}
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
        fontSize: 17,
        fontFamily: 'monospace'
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
        borderRadius: 10,
    },
    formatacaoView: {
        flexDirection: 'column',
        flex: 7
    },
    estiloNome: {
        fontWeight: 'bold',
        fontSize: 20
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
    formatacaoTituloHamburgueria:{
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tituloHamburgueria:{
        paddingHorizontal: 5,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'red',
        fontFamily: 'monospace'
        
    },
});



export default ListView;


