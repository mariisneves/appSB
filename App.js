import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, Chechbox, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './assets/estilo';
import btnvoltar from './assets/btn-volta.png';
import firebase from './assets/firebaseConnect';
import AppLoading from 'expo';
import {
  useFonts, SourceSansPro_300Light, SourceSansPro_300Light_Italic, SourceSansPro_400Regular,
  SourceSansPro_400Regular_Italic, SourceSansPro_600SemiBold, SourceSansPro_600SemiBold_Italic,
  SourceSansPro_700Bold,
} from '@expo-google-fonts/source-sans-pro';

// export default function App() {
// let [fontsLoaded] = useFonts({
//   SourceSansPro_300Light,
//   SourceSansPro_300Light_Italic,
//   SourceSansPro_400Regular,
//   SourceSansPro_400Regular_Italic,
//   SourceSansPro_600SemiBold,
//   SourceSansPro_600SemiBold_Italic,
//   SourceSansPro_700Bold,
// });

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      telefone: '',
      endereco: '',
      numero: '',
      complemento: '',
      cidade: '',
      estado: '',
      cep: '',
      senha: '',
      senha_rep: '',
      termos: false,
    };

    this.enviarDados = this.enviarDados.bind(this);

  }

  //Metodo que é chamado quando você clica no botao Abrir Conta
  enviarDados() {

    if (this.state.nome === '' || this.state.email === '') {
      alert('Preencha todos dados corretamente!')
      return;
    }

    alert(
      'Cadastro feito com sucesso! \n\n' +
      'Nome: ' + this.state.nome + '\n' +
      'E-mail: ' + this.state.email + '\n' +
      'Telefone: ' + this.state.telefone + ' \n' +
      'Endereço: ' + this.state.endereco + ' \n' +
      'Nº: ' + this.state.numero + ' \n' +
      'Complemento: ' + this.state.complemento + ' \n' +
      'Cidade: ' + this.state.cidade + ' \n' +
      'Estado: ' + this.state.estado + ' \n' +
      'CEP: ' + this.state.cep + ' \n' +
      'Senha: ' + this.state.senha + ' \n' +
      'Repetir a senha: ' + this.state.senha_rep + ' \n' +
      'Termos: ' + ((this.state.termos) ? 'Aceito' : 'Não aceito')
    );

  }


  render() {

    return (
      <View style={styles.container}>
        <Image source={btnvoltar} style={styles.btnvoltar} />
        <View style={styles.containerFormulario}>
          <Text style={styles.title}>Preencha os campos abaixo para completar o seu cadastro</Text>
          <View style={styles.areaFormulario}>

            <View>
              <TextInput style={styles.input}
                placeholder="Nome completo"
                underlineColorAndroid="transparent"
                onChangeText={(texto) => this.setState({ nome: texto })}
              />

              <TextInput style={styles.input}
                placeholder="E-mail"
                underlineColorAndroid="transparent"
                onChangeText={(texto) => this.setState({ email: texto })}
              />

              <TextInput style={styles.input}
                placeholder="Telefone"
                underlineColorAndroid="transparent"
                onChangeText={(texto) => this.setState({ telefone: texto })}
              />

              <TextInput style={styles.input}
                placeholder="Endereço"
                underlineColorAndroid="transparent"
                onChangeText={(texto) => this.setState({ endereco: texto })}
              />

              <View style={styles.doisForms}>
                <TextInput style={styles.inputDois}
                  placeholder="Nº"
                  underlineColorAndroid="transparent"
                  onChangeText={(texto) => this.setState({ numero: texto })}
                />

                <TextInput style={styles.inputDois}
                  placeholder="Complemento"
                  underlineColorAndroid="transparent"
                  onChangeText={(texto) => this.setState({ complemento: texto })}
                />
              </View>

              <View style={styles.doisForms}>
                <TextInput style={styles.inputDois}
                  placeholder="Cidade"
                  underlineColorAndroid="transparent"
                  onChangeText={(texto) => this.setState({ cidade: texto })}
                />

                <TextInput style={styles.inputDois}
                  placeholder="Estado"
                  underlineColorAndroid="transparent"
                  onChangeText={(texto) => this.setState({ estado: texto })}
                />
              </View>

              <TextInput style={styles.input}
                placeholder="CEP"
                underlineColorAndroid="transparent"
                onChangeText={(texto) => this.setState({ cep: texto })}
              />

              <TextInput style={styles.input}
                placeholder="Senha"
                underlineColorAndroid="transparent"
                onChangeText={(texto) => this.setState({ senha: texto })}
              />

              <TextInput style={styles.input}
                placeholder="Repetir senha"
                underlineColorAndroid="transparent"
                onChangeText={(texto) => this.setState({ senha_rep: texto })}
              />

            </View>

            <View style={styles.switchTermos}>
              <Switch
                style={{ paddingTop: 15 }}
                trackColor={{ false: "#767577", true: "#5B352C" }}
                value={this.state.termos}
                onValueChange={(valorTermos) => this.setState({ termos: valorTermos })}
              />
              <Text style={styles.textoNome}>Li e aceito os termos e condições.</Text>
            </View>

            <TouchableOpacity style={styles.botao} onPress={this.enviarDados} underlayColor="#D8A35D">
              <Text style={styles.botaoTexto}>Finalizar</Text>
            </TouchableOpacity>

          </View>
        </View>

      </View >
    );

  }

}
