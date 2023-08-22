import react from 'react';
import { Text, View } from 'react-native';


const Disciplina = ({ nome, curso, disciplina }) => {
    return (
        <View>
            <Text style={styles.title}>Disciplina</Text>
            <Text><Text style={styles.enunciado}>Nome:</Text> {nome}</Text>
            <Text><Text style={styles.enunciado}>Curso:</Text> {curso}</Text>
            <Text><Text style={styles.enunciado}>Disciplina:</Text> {disciplina}</Text>
            <Text>-</Text>
        </View>
    )
}


export default App = () => {
    return (
        <View>
            <Disciplina nome="Alan" curso="Computação" disciplina="Programação Comercial" />
            <Disciplina nome="Alexadnre" curso="Informática" disciplina="Técnicas de Programação" />
            <Disciplina nome="Sampaio" curso="Computação" disciplina="Estrutura de Dados" />

        </View>
    )
}



const styles = {
    title: {
        fontWeight: 'bold',
        color: "white",
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'black',
    },
    enunciado: {
        fontWeight: 'bold',
    },
}