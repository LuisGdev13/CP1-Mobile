import { Text, View, StyleSheet} from "react-native";

export default ({nomeAluno,cAluno, disciAluno, descAluno})=>{
    return(
        <View style={styles.box}>
            <Text style={styles.titulo}>Respostas</Text>
            <Text style={styles.resposta}>Nome do Aluno: {nomeAluno}</Text>
            <Text style={styles.resposta}>Curso do aluno: {cAluno}</Text>
            <Text style={styles.resposta}>A matéria favorita do aluno: {disciAluno} </Text>
            <Text style={styles.resposta}>Descrição do aluno: {descAluno}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
box: {
    width: '100%',
    backgroundColor: '#0b112420',
    marginTop: 50,
    padding: 20,
    borderRadius: 30,
    gap: 10,
    borderWidth: 2,
    borderColor: '#ffffff'
},
titulo: {
    color: '#ee9519',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1
},
resposta: {
    
}
})