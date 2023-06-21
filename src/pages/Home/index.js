import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar, Linking } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./style";
import { useRoute } from "@react-navigation/core";
import Carousel from "../../assets/images/carousel.JPG";
import TransparentLogo from "../../assets/images/logo_transparent.png";
import BrigTrad from "../../assets/images/brig_trad.png";
import BrigNinho from "../../assets/images/brig_ninho.png";
import AboutUs from "../../assets/images/about_us.png";
import FacebookLogo from '../../assets/images/facebook.png'
import InstagramLogo from '../../assets/images/instagram.png'

console.disableYellowBox = true;
export default function Home() {
  // const { navigate } = useNavigation();
  const route = useRoute();
  const email = route.params.idUser;

  const brigadeiros = [
    {
      nome: "Brigadeiro tradicional",
      foto: BrigTrad,
    },
    {
      nome: "Brigadeiro de Ninho com Nutella",
      foto: BrigNinho,
    },
  ];

  const socialMedia = [
    {
      icon: InstagramLogo,
      url: 'https://www.instagram.com/sofistiqueebrigaderia/'
    },
    {
      icon: FacebookLogo,
      url: 'https://www.facebook.com/sofistiqueebrigaderia'
    },
  ];

  function produtosHandler() {
    //   navigate("Produtos");
  };

  function handlePress(url) {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar />

        <Text
          style={{
            margin: "20px",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          menu
        </Text>

        <View style={styles.containerCarousel}>
          <View style={styles.containerPhoto}>
            <Image style={styles.carousel} source={Carousel} />
            <View style={styles.colorCarousel} />
          </View>
          <View style={styles.containerLogo}>
            <Image style={styles.transparentLogo} source={TransparentLogo} />
          </View>
        </View>

        {/* PRODUCTS */}
        <Text style={styles.title}>Queridinhos dos clientes</Text>
        {brigadeiros.map((item) => {
          return (
            <View style={styles.favoritesContainer}>
              <Image style={styles.favoritesImage} source={item.foto} />
              <Text style={styles.favoritesText}>{item.nome}</Text>
            </View>
          )
        })}
        <TouchableOpacity
          style={styles.button}
          onPress={() => produtosHandler()}
          underlayColor="#5B352C"
          disabled={false}
        >
          <Text style={styles.buttonText}>
            NOSSO CARDÁPIO COMPLETO
          </Text>
        </TouchableOpacity>

        {/* ABOUT US */}
        <Image style={styles.aboutUsImage} source={AboutUs} />
        <View style={styles.aboutUsContainer}>
          <Text style={styles.title}>Um pouco sobre nós</Text>
          <Text style={styles.text}>A Sofistiquée Brigaderia é especializada na fabricação e venda de brigadeiros gourmet. Trabalha tanto com encomendas de brigadeiros para festas e consumo próprio, como também com o fornecimento de brigadeiros para restaurantes.</Text>
        </View>

        {/* FEEDBACK */}
        <View style={styles.feedbackContainer}>
          <Text style={styles.title}>O que nossos clientes
            dizem sobre nós?</Text>
          <Text style={styles.text}>“O melhor que já provei. Parabéns Valeria. Te conheci de longa data, sei o quanto é caprichosa e atenta aos detalhes. Por isso não tem concorrência. Bjs.”</Text>
          <Text style={styles.quoteTitle}>@emporiomartinez</Text>
        </View>

        {/* FOOTER */}
        <View style={styles.footerContainer}>
          <Image style={styles.footerImage} source={TransparentLogo} />
          <View style={styles.iconsContainer}>
            {socialMedia.map((item) => {
              return (
                <TouchableOpacity onPress={() => handlePress(item.url)}>
                  <Image style={styles.icons} source={item.icon} />
                </TouchableOpacity>
              )
            })}
          </View>
          <Text style={styles.linkFooter}>Política de privacidade</Text>
          <Text style={styles.linkFooter}>Eventos</Text>
          <Text style={styles.textFooter}>Sofistiquée Brigaderia | © 2023</Text>
        </View>

      </ScrollView >
    </View >
  );
}
