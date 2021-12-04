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

  areaFormulario: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },

  title: {
    textAlign: 'center',
    fontSize: 25,
    color: '#5B352C',
    marginVertical: 25,
    fontFamily: "SourceSansPro_400Regular",
  },

  doisForms: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textoNome: {
    fontSize: 18,
    color: '#5B352C',
    marginStart: 10,
    fontFamily: "SourceSansPro_400Regular",
  },

  input: {
    backgroundColor: '#F2E7C7',
    color: '#5B352C',
    height: 43,
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
    fontSize: 18,
    fontFamily: "SourceSansPro_400Regular",
  },

  inputDois: {
    backgroundColor: '#F2E7C7',
    color: '#5B352C',
    height: 43,
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
    fontSize: 18,
    width: '49%',
    fontFamily: "SourceSansPro_400Regular",
  },

  switchTermos: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  botao: {
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5B352C',
    marginTop: 20,
    marginBottom: 20,
  },

  botaoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D8A35D',
    fontFamily: "SourceSansPro_600SemiBold",
  },

});