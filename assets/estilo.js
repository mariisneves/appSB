import React from 'react';
import { StyleSheet } from 'react-native';

export  default StyleSheet.create({

    container: {
        paddingTop: 20,
        marginHorizontal: 35,
        flex: 1,
      },
  
      areaFormulario: {
        flexDirection: 'column',
      },
  
      title: {
        textAlign: 'center',
        fontSize: 25,
        color: '#5B352C',
        marginBottom: 25,
      },
  
      textoNome: {
        fontSize: 18,
        color: '#5B352C',
        // fontWeight: 'regular',
      },
  
      input: {
        backgroundColor: '#F2E7C7',
        color: '#5B352C',
        height: 43,
        padding: 10,
        marginBottom: 5,
        marginTop: 5,
        placeholderTextColor: '#5B352C',
      },
  
      checkboxTermos: {
        flexDirection: 'row',
        alignItems: 'center'
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