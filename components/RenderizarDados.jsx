import { Text } from "react-native";

export default ({nomeAluno,eAluno})=>{
    return(
        <View>
            <Text>Nome Aluno:{nomeAluno}</Text>
            <Text>Email Aluno:{eAluno}</Text>
        </View>
        
    )
}