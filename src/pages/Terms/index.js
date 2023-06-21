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
              A Sofistiquée Brigaderia, no papel de Controladora de Dados, se
              compromete com a transparência no tratamento de dados pessoais dos
              nossos clientes. Por isso, esta presente Política de Privacidade
              estabelece como é feita a coleta, uso e transferência de informações
              de clientes que usam nosso site.
              {"\n"}
              {"\n"}
              Ao utilizar nossos serviços, você entende que coletaremos e usaremos
              suas informações pessoais nas formas descritas nesta Política, sob as
              normas de Proteção de Dados (LGPD, Lei Federal 13.709/2018), das
              disposições consumeristas da Lei Federal 8078/1990 e as demais normas
              do ordenamento jurídico brasileiro aplicáveis.
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
