import { Text, View, StyleSheet} from "react-native";

export default ({nomeAluno,cAluno, disciAluno, descAluno})=>{
    return(
        <View style={styles.box}>
            <Text style={styles.titulo}>Descrição</Text>
            <View style={styles.linha}>
                <Text style={styles.label}>Nome do aluno:  <Text style={styles.valor}>{nomeAluno}</Text></Text>
            </View>

            <View style={styles.linha}>
                <Text style={styles.label}>Curso do aluno:  <Text style={styles.valor}>{cAluno}</Text></Text>
            </View>

            <View style={styles.linha}>
              <Text style={styles.label}>Matéria favorita:  <Text style={styles.valor}>{disciAluno}</Text></Text>
            </View>

            <View style={styles.linha}>
              <Text style={styles.label}>Descrição:  <Text style={styles.valor}>{descAluno}</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
box: {
    width: '100%',
    backgroundColor: '#3859c5fe',
    marginTop: 20,
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
label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
},
valor: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: 2
}
})