import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';

const iconeLanchonete = 'https://cdn-icons-png.flaticon.com/512/2389/2389695.png';
const iconeEntrega = 'https://cdn-icons-png.flaticon.com/512/1986/1986928.png';
const iconeAumentar = 'https://cdn-icons-png.flaticon.com/512/10513/10513569.png';
const iconeDiminuir = 'https://cdn.icon-icons.com/icons2/510/PNG/512/minus-round_icon-icons.com_50094.png';

function DetailView({ route }) {
    const item = route.params.burgue

    const [valor,setValor] = useState(0)

    function onPressAumentar() {
        setValor(valor + 1)
    }
    function onPressDiminuir() {
        if (valor > 0) {
            setValor( valor - 1 )
        }
    }
    function valorComprar(){
        let valorHamburgue = 0
        return(
            valorHamburgue = item.valor*valor
        )
        }
    function onPressAdicionar(){
        alert(
            "Pedido adicionado no carrinho!"
        )
        setValor(0)
    }
    return (
        <View style={styles.container}>

            <View style={styles.estiloImagem}>
                <Image source={{ uri: item.imagem }} style={styles.formatacaoImagem} />
            </View>

            <View style={styles.formatacaoTitulo}>
                <Text style={styles.estiloTitulo}>{item.nome}</Text>
            </View>

            <View style={styles.formatacaoDescricao}>
                <Text style={styles.estiloDescricao}>{item.descricao}</Text>
            </View>

            <View style={styles.formatacaoValor}>
                <Text style={styles.estiloValor}>R$ {item.valor.toFixed(2)}</Text>
            </View>
            <View style={styles.formatacaoViewPrincipalEntrega}>
                <View style={styles.formatacaoEntrega}>
                    <View style={styles.formatacaoViewLocalidade}>
                        <Image source={{ uri: iconeLanchonete }} style={styles.formatacaoIcone} />
                    </View>
                    <Text style={styles.estiloNomeEntrega}>Mestre do Hambúrguer</Text>
                    <Text style={styles.estiloSimbolo}>●</Text>
                    <Image source={{ uri: iconeEntrega }} style={styles.formatacaoIcone}></Image>
                    <Text style={styles.estiloSimbolo}>—</Text>
                    <Text style={styles.estiloNomeEntrega}>{item.tempo} min</Text>
                    <Text style={styles.estiloSimbolo}>●</Text>
                    <Text style={styles.estiloValorEntrega}>R$ 2,99</Text>
                </View>
            </View>

            <View style = {styles.estiloViewAdcionar}>

                <TouchableOpacity onPress={onPressDiminuir}>
                    <Image source={{uri: iconeDiminuir}} style={styles.formatacaoIcone} />
                </TouchableOpacity>
                <View style = {styles.formatacaoAdicionar}>
                    <Text>{valor}</Text>
                </View>
                <TouchableOpacity onPress={onPressAumentar}>
                    <Image source={{uri: iconeAumentar}} style={styles.formatacaoIcone} />
                </TouchableOpacity>
                <View style = {styles.formatacaoViewPrincipalValorHamburgue}>
                <View style = {styles.formatacaoValorHamburgue}>
                    <Text style = {styles.estiloValorHamburgue}>{valorComprar().toFixed(2)}</Text>
                </View>
                </View>
                
                <View style = {styles.formatacaoButton}>
                    <Button title="Adicionar" color={'red'} onPress={onPressAdicionar}></Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8
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
        paddingTop: 15,
        paddingHorizontal: 6
    },
    estiloValor: {
        color: '#6495ED',
        fontSize: 18,
        fontWeight: 'bold',
    },
    formatacaoViewPrincipalEntrega: {
        paddingTop: 15,
        alignItems: 'center',
    },
    formatacaoEntrega: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 7,
        padding: 5,
        paddingHorizontal: 6,
        alignItems: 'center'
    },
    formatacaoViewLocalidade: {
        flexDirection: 'column',
        paddingRight: 4,
    },
    formatacaoIcone: {
        width: 35,
        height: 35,
    },
    estiloNomeEntrega: {
        paddingHorizontal: 5,
        fontSize: 17,
        fontWeight: 'bold'
    },
    formatacaoIconeVerificado: {
        width: 35,
        height: 35,
    },
    estiloViewIconeVerificado: {
        paddingLeft: 4
    },
    formatacaoViewTempo: {
        flexDirection: 'row'
    },
    formatacaoTextoEntrega: {
        alignItems: 'center'
    },
    estiloValorEntrega: {
        color: '#6495ED',
        fontSize: 17,
        fontWeight: 'bold',
    },
    estiloViewAdcionar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 26,
    },
    formatacaoAdicionar: {
        paddingHorizontal: 13
    },
    estiloSimbolo: {
        paddingHorizontal: 5,
    },
    formatacaoButton: {
        alignItems: 'center',
        paddingLeft: 6,
    },
    formatacaoViewPrincipalValorHamburgue:{
        paddingHorizontal: 13,
    },
    formatacaoValorHamburgue:{
        borderWidth: 1,
        borderRadius: 7,
        padding: 3,
        paddingHorizontal: 10
    },
    estiloValorHamburgue: {
        color: '#6495ED',
        fontSize: 17,
        fontWeight: 'bold',
    },

})
export default DetailView;