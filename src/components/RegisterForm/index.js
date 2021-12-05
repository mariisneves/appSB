import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
  StatusBar,
  ScrollView,
  LogBox,
} from "react-native";
import styles from "./style";
import btnvoltar from "../../assets/images/btn-volta.png";
import firebase from "../../services/firebaseConnect";
import { useNavigation } from "@react-navigation/core";

export default function RegisterForm() {
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
  const toggleSwitch = () => setTermos((previousState) => !previousState);
  const [messagem, setMensagem] = useState();
  const [isRegistred, setIsRegistred] = useState();

  const { navigate, goBack } = useNavigation();

  async function cadastrar() {
    if ((nome !== "") & (email !== "")) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha)
        .then(() => {
          setIsRegistred(true);
        })
        .catch((erro) => {
          setIsRegistred(false);
          switch (erro.message) {
            case "Password should be at least 6 characters":
              setMensagem("A senha precisa ter 6 ou mais caracteres");
              break;
            case "The email address is already in use by another account.":
              setMensagem("Email já cadastrado");
              break;
            case "The email address is badly formatted.":
              setMensagem("Formato do email inválido");
              break;
            default:
              setMensagem("Não foi possível cadastrar");
              break;
          }
        });

      let usuarios = await firebase.database().ref("Clientes");
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
        termos: termos ? "Aceito" : "Não aceito",
      });

      alert("Cadastro feito com sucesso!");
      setNome("");
      setEmail("");
      setTelefone("");
      setEndereco("");
      setNumero("");
      setComplemento("");
      setCidade("");
      setEstado("");
      setCep("");
      setSenha("");
      setSenhaRep("");
      setTermos;

      navigate("Login");
    } else {
      alert("Os dados devem ser preenchidos");
    }
  }

  LogBox.ignoreAllLogs(true);

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar />
        <TouchableOpacity onPress={() => goBack()}>
          <Image source={btnvoltar} style={styles.btnvoltar} />
        </TouchableOpacity>
        <View style={styles.containerFormulario}>
          <Text style={styles.title}>
            Preencha os campos abaixo para completar o seu cadastro
          </Text>
          <View style={styles.areaFormulario}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Nome completo"
                placeholderTextColor="#5B352C"
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setNome(texto)}
                value={nome}
              />

              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#5B352C"
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setEmail(texto)}
                value={email}
              />

              <TextInput
                style={styles.input}
                placeholder="Telefone"
                placeholderTextColor="#5B352C"
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setTelefone(texto)}
                value={telefone}
              />

              <TextInput
                style={styles.input}
                placeholder="Endereço"
                placeholderTextColor="#5B352C"
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setEndereco(texto)}
                value={endereco}
              />

              <View style={styles.doisForms}>
                <TextInput
                  style={styles.inputDois}
                  placeholder="Nº"
                  placeholderTextColor="#5B352C"
                  underlineColorAndroid="transparent"
                  onChangeText={(texto) => setNumero(texto)}
                  value={numero}
                />

                <TextInput
                  style={styles.inputDois}
                  placeholder="Complemento"
                  placeholderTextColor="#5B352C"
                  underlineColorAndroid="transparent"
                  onChangeText={(texto) => setComplemento(texto)}
                  value={complemento}
                />
              </View>

              <View style={styles.doisForms}>
                <TextInput
                  style={styles.inputDois}
                  placeholder="Cidade"
                  placeholderTextColor="#5B352C"
                  underlineColorAndroid="transparent"
                  onChangeText={(texto) => setCidade(texto)}
                  value={cidade}
                />

                <TextInput
                  style={styles.inputDois}
                  placeholder="Estado"
                  placeholderTextColor="#5B352C"
                  underlineColorAndroid="transparent"
                  onChangeText={(texto) => setEstado(texto)}
                  value={estado}
                />
              </View>

              <TextInput
                style={styles.input}
                placeholder="CEP"
                placeholderTextColor="#5B352C"
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setCep(texto)}
                value={cep}
              />

              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#5B352C"
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setSenha(texto)}
                value={senha}
              />

              <TextInput
                style={styles.input}
                placeholder="Repetir senha"
                placeholderTextColor="#5B352C"
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
              <Text style={styles.textoNome}>
                Li e aceito os{" "}
                <Text
                  style={styles.textoNome}
                  onPress={() => navigate("Terms")}
                >
                  termos e condições
                </Text>
                .
              </Text>
            </View>

            {isRegistred ? null : (
              <Text
                style={{
                  color: "#5B352C",
                  fontWeight: "bold",
                  alignSelf: "center",
                  fontSize: 15,
                  marginTop: 30,
                }}
              >
                {messagem}
              </Text>
            )}

            <TouchableOpacity
              style={styles.botao}
              onPress={cadastrar}
              underlayColor="#D8A35D"
              disabled={termos ? false : true}
            >
              <Text style={styles.botaoTexto}>Finalizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
