import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Switch, StatusBar, ScrollView } from 'react-native';
import styles from './Register/estilo';
import btnvoltar from './assets/btn-volta.png';
import firebase from './assets/firebaseConnect';
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

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [endereco, setEndereco] = useState();
  const [numero, setNumero] = useState();
  const [complemento, setComplemento] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [cep, setCep] = useState();
  const [senha, setSenha] = useState();
  const [senha_rep, setSenhaRep] = useState();
  const [termos, setTermos] = useState(false);
  const toggleSwitch = () => setTermos(previousState => !previousState);

  async function cadastrar() {

    if (nome !== '' & email !== '') {
      firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(resultado => {
          setCarregando(0);
          setMsgStatus('sucesso');
        }).catch(erro => {
          setCarregando(0);
          setMsgStatus('falhou');
          switch (erro.message) {
            case 'Password should be at least 6 characters':
              setMsg('A senha precisa ter 6 ou mais caracteres');
              break;
            case 'The email address is already in use by another account.':
              setMsg('Email já cadastrado');
              break;
            case 'The email address is badly formatted.':
              setMsg('Formato do email inválido');
              break;
            default:
              setMsg('Não foi possível cadastrar');
              break
          }

        })
    

    let usuarios = await firebase.database().ref('Clientes');
    let chave = usuarios.push().key;
    usuarios.child(chave).set({
      nome: nome,
      email: email,
      telefone: telefone,
      endereco: endereco,
      numero: numero,
      complemento: complemento,
      cidade: cidade,
      estado: estado,
      cep: cep,
      senha: senha,
      senha_rep: senha_rep,
      termos: termos ? 'Aceito' : 'Não aceito'
    });

    alert('Cadastro feito com sucesso!');
    setNome('');
    setEmail('');
    setTelefone('');
    setEndereco('');
    setNumero('');
    setComplemento('');
    setCidade('');
    setEstado('');
    setCep('');
    setSenha('');
    setSenhaRep('');
    setTermos
  } else {
    alert('Os dados devem ser preenchidos');
  }
}

return (
  <View style={styles.container}>
    <ScrollView>
    <StatusBar />
    <Image source={btnvoltar} style={styles.btnvoltar} />
    <View style={styles.containerFormulario}>
      <Text style={styles.title}>Preencha os campos abaixo para completar o seu cadastro</Text>
      <View style={styles.areaFormulario}>

        <View>
          <TextInput style={styles.input}
            placeholder="Nome completo"
            placeholderTextColor='#5B352C'
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setNome(texto)}
            value={nome}
          />

          <TextInput style={styles.input}
            placeholder="E-mail"
            placeholderTextColor='#5B352C'
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setEmail(texto)}
            value={email}
          />

          <TextInput style={styles.input}
            placeholder="Telefone"
            placeholderTextColor='#5B352C'
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setTelefone(texto)}
            value={telefone}
          />

          <TextInput style={styles.input}
            placeholder="Endereço"
            placeholderTextColor='#5B352C'
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setEndereco(texto)}
            value={endereco}
          />

          <View style={styles.doisForms}>
            <TextInput style={styles.inputDois}
              placeholder="Nº"
              placeholderTextColor='#5B352C'
              underlineColorAndroid="transparent"
              onChangeText={(texto) => setNumero(texto)}
              value={numero}
            />

            <TextInput style={styles.inputDois}
              placeholder="Complemento"
              placeholderTextColor='#5B352C'
              underlineColorAndroid="transparent"
              onChangeText={(texto) => setComplemento(texto)}
              value={complemento}
            />
          </View>

          <View style={styles.doisForms}>
            <TextInput style={styles.inputDois}
              placeholder="Cidade"
              placeholderTextColor='#5B352C'
              underlineColorAndroid="transparent"
              onChangeText={(texto) => setCidade(texto)}
              value={cidade}
            />

            <TextInput style={styles.inputDois}
              placeholder="Estado"
              placeholderTextColor='#5B352C'
              underlineColorAndroid="transparent"
              onChangeText={(texto) => setEstado(texto)}
              value={estado}
            />
          </View>

          <TextInput style={styles.input}
            placeholder="CEP"
            placeholderTextColor='#5B352C'
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setCep(texto)}
            value={cep}
          />

          <TextInput style={styles.input}
            placeholder="Senha"
            placeholderTextColor='#5B352C'
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setSenha(texto)}
            value={senha}
          />

          <TextInput style={styles.input}
            placeholder="Repetir senha"
            placeholderTextColor='#5B352C'
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setSenhaRep(texto)}
            value={senha_rep}
          />

        </View>

        <View style={styles.switchTermos}>

          <Switch
            // style={{ paddingTop: 15 }}
            trackColor={{ false: "#767577", true: "#5B352C" }}
            onValueChange={toggleSwitch}
            value={termos}
          />
          <Text style={styles.textoNome}>Li e aceito os termos e condições.</Text>
        </View>

        <TouchableOpacity style={styles.botao}
          onPress={cadastrar}
          underlayColor="#D8A35D">
          <Text style={styles.botaoTexto}>Finalizar</Text>
        </TouchableOpacity>

      </View>
    </View>
    </ScrollView>
  </View >
);

}


