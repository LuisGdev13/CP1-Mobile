import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,Button } from 'react-native';
import { useState } from 'react';
import RenderizarDados from "./components/RenderizarDados.jsx"

export default function App() {
  const[nomeAluno,setNomeAluno]=useState("")
  const[emailAluno,setEmailAluno]=useState("")
  const[mostrarDados,setMostrarDados]=useState(false)

  return (
    <View style={styles.container}>
     
      <TextInput 
        placeholder='Digite o seu nome'
        style={styles.input}
        maxLength={10}
        autoCapitalize='words'
        onChangeText={setNomeAluno}
      />

      <TextInput 
        placeholder='Digite qual seu curso'
        style={styles.input}
        maxLength={30}
        autoCapitalize='none'
        onChangeText={setEmailAluno}
      />

      <TextInput 
        placeholder='Digite sua disciplina favorita'
        style={styles.input}
        maxLength={30}
        autoCapitalize='none'
        onChangeText={setEmailAluno}
      />

    <Button 
      title='Clique aqui para enviar'
      onPress={()=>setMostrarDados(!mostrarDados)}
    />

    {mostrarDados&&<RenderizarDados nomeAluno={nomeAluno} eAluno={emailAluno}/>}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:200,
    gap:10
  },
  image:{
    resizeMode:"center"
  },
  input:{
    backgroundColor:"#ccc",
    width:300,
    borderRadius:10
  }
});