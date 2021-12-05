import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./style";
import { useRoute } from "@react-navigation/core";

console.disableYellowBox = true;
export default function Welcome() {
  const route = useRoute();

  const email = route.params.idUser;

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar />

        <Text
          style={{
            margin: 30,
            marginTop: 40,
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Bem vindo(a) {email}!
        </Text>

        <View style={styles.containerFormulario}></View>
      </ScrollView>
    </View>
  );
}
