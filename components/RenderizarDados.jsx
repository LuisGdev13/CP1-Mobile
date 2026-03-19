import { Text, View } from "react-native";

export default ({nomeAluno,cAluno, disciAluno})=>{
    return(
        <View>
            <Text>Nome do Aluno: {nomeAluno}</Text>
            <Text>Curso do aluno: {cAluno}</Text>
            <Text>A matéria favorita do aluno: {disciAluno} </Text>
        </View>
        
    )
}