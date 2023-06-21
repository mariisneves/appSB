import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D8A35D',
  },

  botao: {
    height: 43,
    width: 315,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5B352C',
    marginTop: 15,
    fontFamily: 'SourceSansPro_600SemiBold',
  },
  botaoTexto: {
    fontSize: 14,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    color: '#5B352C',
    fontFamily: 'SourceSansPro_600SemiBold',
  },
});
