import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Switch } from 'react-native';
import styles from './estilo';
import btnvoltar from '../assets/btn-volta.png';
import firebase from '../assets/firebaseConnect';
import AppLoading from 'expo';
import {
  useFonts, SourceSansPro_300Light, SourceSansPro_300Light_Italic, SourceSansPro_400Regular,
  SourceSansPro_400Regular_Italic, SourceSansPro_600SemiBold, SourceSansPro_600SemiBold_Italic,
  SourceSansPro_700Bold,
} from '@expo-google-fonts/source-sans-pro';

console.disableYellowBox = true;
export default function App() {

  let [fontsLoaded] = useFonts({
    SourceSansPro_300Light,
    SourceSansPro_300Light_Italic,
    SourceSansPro_400Regular,
    SourceSansPro_400Regular_Italic,
    SourceSansPro_600SemiBold,
    SourceSansPro_600SemiBold_Italic,
    SourceSansPro_700Bold,
  });

  return (
    <View style={styles.container}>
      <Image source={btnvoltar} style={styles.btnvoltar} />
      <View style={styles.containerFormulario}>
        <Text style={styles.title}>Termos e Condições</Text>

        <View style={styles.areaTermos}w>

          <Text style={styles.textoNome}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate, 
          est ac maximus dapibus, erat mi sagittis nisi, posuere tempor eros erat id felis. Sed ut ipsum sed massa 
          tristique rhoncus sed a augue. Aliquam eros nisl, porttitor et sapien sed, semper consectetur urna.<p />
          Proin suscipit massa nunc, nec vehicula purus egestas eu. Sed tristique ex at purus pellentesque, vel congue 
          lectus scelerisque. Aenean augue velit, maximus non lobortis ut, ornare non ante. Praesent tempor odio at enim 
          sollicitudin convallis.<p />
          Ut a turpis tempor justo blandit fringilla et eu nisl. Ut elementum elit in elit convallis, 
          ac pharetra nisi fringilla. Proin nisi orci, rutrum et fermentum eu, imperdiet ac nunc. Donec suscipit, erat in 
          sodales lacinia, libero risus ultrices odio, sit amet consequat sapien nulla ut arcu.<p/>
          Donec mollis urna id elit ultricies placerat. Curabitur rhoncus dapibus est, ac pharetra massa feugiat nec.
          Etiam arcu quam, accumsan id laoreet sed, accumsan eget ex. Cras lorem quam, faucibus et velit id, 
          tempus hendrerit leo. Etiam venenatis gravida diam non porttitor.</Text>

        </View>

        <TouchableOpacity style={styles.botao}
          underlayColor="#D8A35D">
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>

        
      </View>

    </View >
  );

}


