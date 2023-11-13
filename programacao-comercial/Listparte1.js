import {Text, View, Button, StyleSheet, Image} from 'react-native';
import { FlatList } from 'react-native';
import { DATA_BASE } from './datacenter.js';
import { TouchableOpacity } from 'react-native';

const icone = {uri: "https://cdn-1.webcatalog.io/catalog/ifood/ifood-icon-filled-256.webp?v=1675613748311"}


function ListItem({item, navigation}){
  function onPressItem() {
    navigation.navigate("Detalhes", {burgue:item})
  }

    return (
        <View style={styles.formatacaoItem}>
          
          <TouchableOpacity onPress={onPressItem}>
            <Image style = {{height: 100, width: 100}} source={{uri:item.imagem}}/>
            <Text>{item.nome}</Text>
            <Text>{item.descricao}</Text>
            <Text>{item.valor}</Text>
          </TouchableOpacity>
        
      </View>
    )
}

function ListView (props){
    return (
        <View>            
          <FlatList data = {DATA_BASE} renderItem={({item}) => <ListItem item = {item} navigation = {props.navigation}/>}/>
            <View style = {styles.estiloIcone}>
                <Image
                    style = {styles.formatacaoIcone}
                    source = {(uri= icone)}
                />
            </View>
            <View style={styles.estiloTituloPrincipal}>
                <Text style={styles.formatacaoTituloPrincipal}>LISTA DE HAMBURGUES</Text>
            </View>
           
            
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
    formatacaolayout: {
      borderWidth: 1,
      padding: 12,
      borderColor: 'rgba(0, 0, 0, .1)',
      paddingHorizontal: 17,
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
      paddingHorizontal: 2,
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
      width: 85,
      height: 75,
    },
    formatacaoView: {
      flexDirection: 'column',
    },
    estiloNome: {
      fontWeight: 'bold',
    },
    formatacaoDescricao: {
      maxWidth: 495,
    },
    estiloDescricao: {
      textAlign: 'justify',
      fontSize: 13,
    },
    estiloValor: {
      color: 'blue',
    },
  });



export default ListView;



