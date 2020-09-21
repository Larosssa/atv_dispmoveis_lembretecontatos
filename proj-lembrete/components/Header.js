import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const Header = (props) => {
  return (
      <View style = {estilos.tituloAgenda}><Text>{props.titulo}</Text></View>
  );
};

const estilos = StyleSheet.create({
    tituloAgenda: { 
      padding: 12, 
      backgroundColor: 'white', 
      borderColor: 'black',
      borderEndWidth: 1,
      marginBottom: 8,
      borderRadius: 8
    }
  });

export default Header;