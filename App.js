import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,Button, TextBase } from 'react-native';
import { useState } from 'react';
import RenderizarDados from "./components/RenderizarDados.jsx"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const[nomeAluno,setNomeAluno]=useState("")
  const[cAluno,setCursoAluno]=useState("")
  const [disciAluno, setDisciplinaAluno] = useState("");
  const [descAluno, setDescricao] = useState(false);
  const[mostrarDados,setMostrarDados]=useState(false)
  

  return (

    <SafeAreaProvider> 
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Cadastro de Aluno</Text>
        <Text style={styles.subtitulo}>Preencha seus dados aqui: </Text>
        

        
      <TextInput 
        placeholder='Digite o seu nome'
        style={styles.input}
        maxLength={10} 
        autoCapitalize='none'
        onChangeText={setNomeAluno}
        value={nomeAluno}
      />

      <TextInput 
        placeholder='Digite qual seu curso'
        style={styles.input}
        maxLength={30}
        autoCapitalize='none'
        onChangeText={setCursoAluno}
        value={cAluno}
      />

      <TextInput 
        placeholder='Digite sua disciplina favorita'
        style={styles.input}
        maxLength={30}
        autoCapitalize='none'
        onChangeText={setDisciplinaAluno}
        value={disciAluno}
      />

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
      title='Clique aqui para enviar'
      onPress={()=>setMostrarDados(!mostrarDados)}
    />

    {mostrarDados && (
  <RenderizarDados 
    nomeAluno={nomeAluno}
    cAluno={cAluno}
    disciAluno={disciAluno}
    descAluno={descAluno}
  />
)}

        
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
    backgroundColor: "#838383",
    width: '100%',
    borderRadius: 10,
    padding: 10,
  },
  inputDescricao: {
    backgroundColor: "#838383",
    width: '100%',
    borderRadius: 10,
    padding: 10,
    height: 90,
    textAlignVertical: 'top',
  },
  titulo: {
    color: '#5c98c8',
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
});