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
    flex: 1,
  },

  title: {
    textAlign: 'center',
    fontSize: 25,
    color: '#5B352C',
    marginVertical: 25,
  },

  doisForms: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textoNome: {
    fontSize: 18,
    color: '#5B352C',
    marginStart: 10,
  },

  input: {
    backgroundColor: '#F2E7C7',
    color: '#5B352C',
    height: 43,
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
    placeholderTextColor: '#5B352C',
    fontSize: 18,
  },

  inputDois: {
    backgroundColor: '#F2E7C7',
    color: '#5B352C',
    height: 43,
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
    placeholderTextColor: '#5B352C',
    fontSize: 18,
    width: '49%',
  },

  switchTermos: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
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
    color: '#D8A35D'
  },

});