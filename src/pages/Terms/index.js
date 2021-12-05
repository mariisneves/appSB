import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./style";
import { useNavigation } from "@react-navigation/core";

console.disableYellowBox = true;
export default function Terms() {
  7;

  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar />
        <View style={styles.containerFormulario}>
          <Text style={styles.title}>Termos e Condições</Text>

          <View style={styles.areaTermos}>
            <Text style={styles.textoNome}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vulputate, est ac maximus dapibus, erat mi sagittis nisi, posuere
              tempor eros erat id felis. Sed ut ipsum sed massa tristique
              rhoncus sed a augue. Aliquam eros nisl, porttitor et sapien sed,
              semper consectetur urna.{"\n"}
              {"\n"}
              Proin suscipit massa nunc, nec vehicula purus egestas eu. Sed
              tristique ex at purus pellentesque, vel congue lectus scelerisque.
              Aenean augue velit, maximus non lobortis ut, ornare non ante.
              Praesent tempor odio at enim sollicitudin convallis.{"\n"}
              {"\n"}
              Ut a turpis tempor justo blandit fringilla et eu nisl. Ut
              elementum elit in elit convallis, ac pharetra nisi fringilla.
              Proin nisi orci, rutrum et fermentum eu, imperdiet ac nunc. Donec
              suscipit, erat in sodales lacinia, libero risus ultrices odio, sit
              amet consequat sapien nulla ut arcu.
              {"\n"}
              {"\n"}
              Ut a turpis tempor justo blandit fringilla et eu nisl. Ut
              elementum elit in elit convallis, ac pharetra nisi fringilla.
              Proin nisi orci, rutrum et fermentum eu, imperdiet ac nunc. Donec
              suscipit, erat in sodales lacinia, libero risus ultrices odio, sit
              amet consequat sapien nulla ut arcu.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => goBack()}
            style={styles.botao}
            underlayColor="#D8A35D"
          >
            <Text style={styles.botaoTexto}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
