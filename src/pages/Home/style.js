import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: '100%',
  },
  containerLogo: {
    width: '100vw',
    height: 'calc(100vh - 110px)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPhoto: {
    ...StyleSheet.absoluteFillObject,
  },
  carousel: {
    width: '100vw',
    height: 'calc(100vh - 110px)',
  },
  colorCarousel: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#5B352C',
    width: '100vw',
    height: 'calc(100vh - 110px)',
    opacity: 0.75,
  },
  transparentLogo: {
    width: '66.5vw',
    height: '17vh',
  },
  title: {
    fontFamily: 'SourceSansPro_700Bold',
    fontSize: 24,
    color: '#5B352C',
    textAlign: 'center',
    marginTop: '40px',
    marginBottom: '24px',
  },
  text: {
    fontFamily: 'SourceSansPro_400Regular',
    fontSize: 20,
    color: '#5B352C',
    textAlign: 'center',
  },
  favoritesContainer: {
    marginBottom: '30px',
    width: '100%',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: '10px',
  },
  favoritesImage: {
    width: '190px',
    height: '190px',
    borderRadius: 100,
  },
  favoritesText: {
    fontFamily: 'SourceSansPro_400Regular',
    fontSize: 18,
    color: '#5B352C',
  },
  button: {
    height: 43,
    width: "80vw",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5B352C",
    marginBottom: '35px',
    marginHorizontal: 'auto',
    fontFamily: "SourceSansPro_600SemiBold",
  },
  buttonText: {
    color: "#D8A35D",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "SourceSansPro_600SemiBold",
  },
  aboutUsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDCFA9',
    paddingHorizontal: '28px',
    paddingBottom: '35px',
  },
  aboutUsImage: {
    width: '375px',
    height: '268px',
  },
  feedbackContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2E7C7',
    paddingHorizontal: '28px',
  },
  quoteTitle: {
    fontFamily: 'SourceSansPro_700Bold',
    fontSize: 20,
    color: '#5B352C',
    textAlign: 'center',
    marginTop: '5px',
    marginBottom: '35px',
  },
  footerContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5B352C",
    paddingHorizontal: '28px',
  },
  footerImage: {
    marginTop: '30px',
    width: '196px',
    height: '90px',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginVertical: '25px',
    gap: '10px'
  },
  icons: {
    width: '20px',
    height: '20px',
  },
  textFooter: {
    fontFamily: 'SourceSansPro_400Regular',
    fontSize: 14,
    color: '#D8A35D',
    textAlign: 'center',
    marginTop: '12px',
    marginBottom: '30px',
  },
  linkFooter: {
    fontFamily: 'SourceSansPro_600SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: '15px',
  },
});
