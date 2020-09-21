import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const ContatoItem = (props) => {
  return (
    <TouchableOpacity onLongPress={() => props.j(props.identificador)}>
      <View style = {estilos.itemNaListaView}>
           <Text>{props.identificador}</Text>
          <Text>{props.nome}</Text>
          <Text>{props.telefone}</Text>
      </View> 
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  itemNaListaView: { 
    padding: 12, 
    backgroundColor: '#d1e9ff', 
    borderColor: 'white',
    borderEndWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
});

export default ContatoItem;