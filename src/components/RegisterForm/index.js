import React, { useState, useEffect } from "react";
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
  const [senha, setSenha] = useState();
  const [senha_rep, setSenhaRep] = useState();
  const [termos, setTermos] = useState(false);
  const toggleSwitch = () => setTermos((previousState) => !previousState);
  const [messagem, setMensagem] = useState();
  const [emailMessage, setEmailMessage] = useState();
  const [isRegistred, setIsRegistred] = useState();
  const [isEnabled, setIsEnabled] = useState();

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
        senha: senha,
        senha_rep: senha_rep,
        termos: termos ? "Aceito" : "Não aceito",
      });

      alert("Cadastro feito com sucesso!");
      setNome("");
      setEmail("");
      setSenha("");
      setSenhaRep("");
      setTermos;

      navigate("Login");
    } else {
      alert("Os dados devem ser preenchidos");
    }
  }

  LogBox.ignoreAllLogs(true);

  // email validation
  useEffect(() => {
    let emailLength = email?.length

    if (emailLength > 0 && !(email.includes('.com'))) {
      setEmailMessage("Por favor, informe um e-mail válido");
    } else {
      setEmailMessage("");
    }
  }, [email]);

  // password validation
  useEffect(() => {
    if (senha == "") {
      setMensagem("Por favor, informe a senha");
    } else if (senha_rep == "") {
      setMensagem("Por favor, confirme a senha");
    } else if (senha != senha_rep) {
      setMensagem("As senhas não são iguais");
    } else {
      setMensagem("");
    }
  }, [senha, senha_rep]);

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
                placeholder="Nome"
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
                placeholder="Senha"
                placeholderTextColor="#5B352C"
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setSenha(texto)}
                secureTextEntry={true}
                value={senha}
              />

              <TextInput
                style={styles.input}
                placeholder="Repetir senha"
                placeholderTextColor="#5B352C"
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setSenhaRep(texto)}
                secureTextEntry={true}
                value={senha_rep}
              />
            </View>

            <View style={styles.switchTermos}>
              <Switch
                trackColor={{ false: "#767577", true: "#5B352C" }}
                onValueChange={toggleSwitch}
                value={termos}
              />
              <Text style={styles.textoTermos}>
                Li e aceito os {''}
                <Text
                  style={styles.linkTermos}
                  onPress={() => navigate("Terms")}
                >
                  termos e condições
                </Text>
                .
              </Text>
            </View>

            {isRegistred ? null : (
              <>
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
                <Text
                  style={{
                    color: "#5B352C",
                    fontWeight: "bold",
                    alignSelf: "center",
                    fontSize: 15,
                    marginTop: 30,
                  }}
                >
                  {emailMessage}
                </Text>
              </>
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
