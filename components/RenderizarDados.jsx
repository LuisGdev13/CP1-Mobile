import { Text, View, StyleSheet} from "react-native";

export default ({nomeAluno,cAluno, disciAluno, descAluno})=>{
    return(
        <View style={styles.box}>
            <Text style={styles.titulo}>De</Text>
            <Text>Nome do Aluno: {nomeAluno}</Text>
            <Text>Curso do aluno: {cAluno}</Text>
            <Text>A matéria favorita do aluno: {disciAluno} </Text>
            <Text>Descrição do aluno: {descAluno}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create ({
box: {
  marginTop: 100,
  padding: 15,
  backgroundColor: "#838383",
  borderRadius: 10,
  width: '100%'
}
})