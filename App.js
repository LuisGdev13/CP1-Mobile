import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,Button } from 'react-native';
import { useState } from 'react';
import RenderizarDados from "./components/RenderizarDados.jsx"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const[nomeAluno,setNomeAluno]=useState("")
  const[cursoAluno,setCursoAluno]=useState("")
  const [disciplinaAluno, setDisciplinaAluno] = useState("");
  const [descricaoAluno, setDescricao] = useState("");
  const[mostrarDados,setMostrarDados]=useState(false)
  

  return (

    <SafeAreaProvider> 
      <SafeAreaView style={styles.container}>

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
        value={cursoAluno}
      />

      <TextInput 
        placeholder='Digite sua disciplina favorita'
        style={styles.input}
        maxLength={30}
        autoCapitalize='none'
        onChangeText={setDisciplinaAluno}
        value={disciplinaAluno}
      />

      <TextInput 
        placeholder='Faça uma breve descrição sobre o curso '
        style={styles.inputDescricao}
        numberOfLines={3}
        multiline={true}
        maxLength={60}
        autoCapitalize='none'
        onChangeText={setDescricao}
        value={descricaoAluno}
      />

    <Button 
      title='Clique aqui para enviar'
      onPress={()=>setMostrarDados(!mostrarDados)}
    />
        
      <StatusBar style="auto" />
    </SafeAreaView>
  </SafeAreaProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#B0E0E6",
    justifyContent: 'center',
    gap: 10,
  },
  input: {
    backgroundColor: "#ccc",
    width: '100%',
    borderRadius: 10,
    padding: 10,
  },
  inputDescricao: {
    backgroundColor: "#ccc",
    width: '100%',
    borderRadius: 10,
    padding: 10,
    height: 90,
    textAlignVertical: 'top',
  }
});