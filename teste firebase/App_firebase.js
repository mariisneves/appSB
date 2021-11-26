import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './assets/firebaseConnect';

export default function App() {
  const [nome, setNome] = useState('Carregando...');

  useEffect(() => {

    async function dados() {

      //Olheiro da nossa database
      await firebase.database().ref('nome').once('value', (snapshot) => {
        setNome(snapshot.val());
      });
    }

    dados();

  }, []);

  return (
    <View style={styles.container}>
      <Text>Testando o BD!</Text>
      <Text style={{ fontSize: 25 }}>Olá {nome}</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
