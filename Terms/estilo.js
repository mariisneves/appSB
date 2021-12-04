import { SourceSansPro_400Regular, SourceSansPro_700Bold_Italic } from '@expo-google-fonts/source-sans-pro';
import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    backgroundColor: '#D8A35D',
  },

  btnvoltar: {
    height: 26,
    width: 26,
    marginVertical: 20,
    marginStart: 10,
  },

  containerFormulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 35,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },

  areaTermos: {
    backgroundColor: '#FFF',
    flex: 1,
  },

  title: {
    textAlign: 'center',
    fontSize: 25,
    color: '#5B352C',
    marginVertical: 25,
    fontFamily: "SourceSansPro_400Regular",
  },

  textoNome: {
    fontSize: 18,
    color: '#5B352C',
    marginStart: 10,
    fontFamily: "SourceSansPro_400Regular",
  },

  botao: {
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5B352C',
    marginTop: 50,
    marginBottom: 20,
  },

  botaoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D8A35D',
    fontFamily: "SourceSansPro_600SemiBold",
  },


});