import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,Button, TextBase } from 'react-native';
import { useState } from 'react';
import RenderizarDados from "./components/RenderizarDados.jsx"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const[nomeAluno,setNomeAluno]=useState("")
  const[cAluno,setCursoAluno]=useState("")
  const [disciAluno, setDisciplinaAluno] = useState("");
  const [descAluno, setDescricao] = useState("");
  const[mostrarDados,setMostrarDados]=useState(false)
  
  // obriga a pessoa preencher todos os campos
  const handleEnviar = () => { 
  if (
    nomeAluno.trim() === "" ||
    cAluno.trim() === "" ||
    disciAluno.trim() === "" ||
    descAluno.trim() === ""
  ) {
    alert("Preencha todos os campos!");
    return;
  }

  setMostrarDados(true);
};

  return (
    <SafeAreaProvider> 
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Cadastro de Aluno</Text>
        <Text style={styles.subtitulo}>Preencha seus dados aqui: </Text>
        

      <View style={styles.boxForm}>  

      <Text style={styles.textTitulo}>Nome</Text> 
      <TextInput 
        placeholder='Digite o seu nome'
        style={styles.input}
        maxLength={10} 
        autoCapitalize='none'
        onChangeText={setNomeAluno}
        value={nomeAluno}
      />

      <Text style={styles.textTitulo}>Curso</Text>
      <TextInput 
        placeholder='Digite qual seu curso'
        style={styles.input}
        maxLength={30}
        autoCapitalize='none'
        onChangeText={setCursoAluno}
        value={cAluno}
      />

      <Text style={styles.textTitulo}>Disciplina</Text>
      <TextInput 
        placeholder='Digite sua disciplina favorita'
        style={styles.input}
        maxLength={30}
        autoCapitalize='none'
        onChangeText={setDisciplinaAluno}
        value={disciAluno}
      />

      <Text style={styles.textTitulo}>Descrição</Text>
      <TextInput 
        placeholder='Faça uma breve descrição sobre o curso '
        style={styles.inputDescricao}
        numberOfLines={3}
        multiline={true}
        maxLength={60}
        autoCapitalize='none'
        onChangeText={setDescricao}
        value={descAluno}
      />
    
    <Button 
      title='Enviar'
      onPress={handleEnviar}
    />
  </View>

    {mostrarDados && (
  <RenderizarDados 
    nomeAluno={nomeAluno}
    cAluno={cAluno}
    disciAluno={disciAluno}
    descAluno={descAluno}
  />)}
        
      <StatusBar style="auto" />
    </SafeAreaView>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    padding: 20,
    backgroundColor: "#445ea7",
    justifyContent: 'flex-start',
    gap: 10,
  },
  input: {
    backgroundColor: "#a6a5a5",
    width: '100%',
    borderRadius: 10,
    padding: 10,
  },
  inputDescricao: {
    backgroundColor: "#a6a5a5",
    width: '100%',
    borderRadius: 10,
    padding: 10,
    height: 90,
    textAlignVertical: 'top',
  },
  titulo: {
    color: '#ee9519',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2
  },
  subtitulo: {
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 15,
  },
  boxForm: {
    width: '100%',
    backgroundColor: '#0b112420',
    padding: 20,
    borderRadius: 30,
    gap: 10,
    borderWidth: 2,
    borderColor: '#ffffff'
  },
  textTitulo: {
    fontSize: 17,
    fontStyle: "italic",
    fontWeight: 'bold'
  }
});