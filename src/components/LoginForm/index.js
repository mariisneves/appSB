import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Linking,
  Image,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";
import Logo from "../../assets/images/logo_color.png";
import { useNavigation } from "@react-navigation/core";
import firebase from "../../services/firebaseConnect";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState();
  const [message, setMessage] = useState();

  const { navigate } = useNavigation();

  function loginHandler() {
    if ((email !== "") & (password !== "")) {
      setIsLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          setMessage("Logado com sucesso!");

          let user = userCredential.user;

          navigate("Welcome", { idUser: user.email });
        })
        .catch((error) => {
          setMessage("Ooops. Algo deu errado. \n" + error.message);
        })
        .finally(() => setIsLoading(false));
    } else {
      setMessage("Os dados devem ser preenchidos");
    }
  }

  function changePassword() {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => setMessage("E-mail enviado com sucesso!"))
      .catch((error) => {
        setMessage("Algo de errado aconteceu :/ \n" + error.message);
      });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <TextInput
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
        placeholder="Senha"
        keyboardType="password"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => loginHandler()}
        underlayColor="#5B352C"
        disabled={false}
      >
        <Text
          style={{
            color: "#D8A35D",
            fontWeight: "bold",
            fontSize: 15,
            fontFamily: "SourceSansPro_600SemiBold",
          }}
        >
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoVazado}
        onPress={() => navigate("Register")}
        underlayColor="#5B352C"
      >
        <Text
          style={{
            color: "#5B352C",
            fontWeight: "bold",
            fontSize: 15,
            fontFamily: "SourceSansPro_600SemiBold",
          }}
        >
          Cadastre-se
        </Text>
      </TouchableOpacity>

      {isLoading ? (
        <ActivityIndicator
          size="small"
          color="#EDCFA9"
          style={{ marginTop: 10 }}
        />
      ) : null}

      <Text
        style={{
          color: "#5B352C",
          fontWeight: "bold",
          fontSize: 15,
          marginBottom: 30,
          textAlign: "center",
          marginTop: 30,
          fontFamily: "SourceSansPro_600SemiBold",
        }}
      >
        {message ? message : null}
      </Text>

      <Text style={styles.botaoTexto} onPress={changePassword}>
        Esqueceu a senha?
      </Text>
    </View>
  );
}
