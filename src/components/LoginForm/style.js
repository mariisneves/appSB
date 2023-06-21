import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D8A35D",
  },
  logo: {
    marginBottom: 40,
    width: 301,
    height: 140,
  },
  input: {
    width: "80%",
    height: 43,
    backgroundColor: "#F2E7C7",
    color: "#5B352C",
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
    fontFamily: "SourceSansPro_600SemiBold",
    fontSize: 18,
  },
  botao: {
    height: 43,
    width: "80vw",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5B352C",
    marginTop: 15,
    fontFamily: "SourceSansPro_600SemiBold",
  },
  botaoVazado: {
    height: 43,
    width: '80vw',
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#5B352C",
    marginTop: 15,
    fontFamily: "SourceSansPro_600SemiBold",
  },
  botaoTexto: {
    fontSize: 14,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    color: "#5B352C",
    fontFamily: "SourceSansPro_600SemiBold",
  },
});
