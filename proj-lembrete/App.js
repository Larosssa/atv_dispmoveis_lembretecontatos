import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import ContatoItem from './components/ContatoItem';
import Header from './components/Header';

export default function App() {
  const [nome, setNome] = useState (''); /*usuario vai digitando e vai guardando*/
  const [telefone, setTelefone] = useState ('');
  const[contatos, setContatos] = useState ([]); 


  const capturarNome = (nome) => {
    setNome(nome);     /*atualiza o estado chamando a função de cima e depois isso vai ser alimentado numa lista*/
  } 
  const capturarTelefone = (telefone) => {
    setTelefone(telefone);     /*atualiza o estado chamando a função de cima e depois isso vai ser alimentado numa lista*/
  } 

  const removerContato = (keyASerRemovida) =>{
    setContatos(contatos => {
      return contatos.filter((contato) => {
         return contato.identificador !== keyASerRemovida
        })
      });
    }
  
  const adicionarContato = () => {
    setContatos(contatos => { 
      let ultimaPos = -1; 
      if (contatos.length > 0) {
        ultimaPos = contatos[contatos.length - 1].identificador + 2;
      } else {
        ultimaPos = 10 + (ultimaPos + 1) *2
      }
      let identificador = ultimaPos;
      return [...contatos, {nome: nome, telefone: telefone, identificador: identificador}]}
    );  
  }
  return (
    <View style = {estilos.telaPrincipalView}>
      <Header titulo="Agenda">
      </Header>  
      <View>
        {/*usuario ira inserir os lembretes aqui*/ }
        <TextInput
          placeholder = 'Nome'
          style = {estilos.contatoTextInput}
          onChangeText = {capturarNome}
          value = {nome}
        />
        <TextInput
          placeholder = 'Telefone'
          style = {estilos.contatoTextInput}
          onChangeText = {capturarTelefone}
          value = {telefone}
        />        
        
        <Button
          title = 'Adicionar'
          onPress = {adicionarContato}
        />  
      </View>

      <FlatList 
          data={contatos}
          renderItem={
            (contato) => (
          <ContatoItem nome={contato.item.nome} telefone={contato.item.telefone} identificador={contato.item.identificador} j={removerContato}> 
          </ContatoItem >)}
      />         
    </View>
);}

const estilos = StyleSheet.create({
telaPrincipalView: {
  padding: 50 
}, 
contatoTextInput: {
  borderBottomColor: 'black', 
  borderBottomWidth: 1, 
  marginBottom: 4, 
  padding: 12, 
  textAlign: "center"
}
})
