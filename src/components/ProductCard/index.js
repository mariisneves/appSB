import { Card } from '@rneui/base';
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import { Image, View } from 'react-native-web';

export default function ProductCard({ title, image, description, price }) {
  return (
    <Card
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Image
        source={{
          uri: `${image}`,
        }}
      ></Image>

      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: '150px',
        }}
      >
        <Text
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            fontFamily: 'SourceSansPro_600SemiBold',
          }}
        >
          {title}
        </Text>
        <Text style={{ fontFamily: 'SourceSansPro_600SemiBold' }}>
          {description}
        </Text>
        <Text
          style={{
            fontSize: '26px',
            fontWeight: 'bold',
            fontFamily: 'SourceSansPro_600SemiBold',
          }}
        >
          R$ {price},00
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        underlayColor="#5B352C"
        disabled={false}
      >
        <Text
          style={{
            color: '#D8A35D',
            fontWeight: 'bold',
            fontSize: 15,
            fontFamily: 'SourceSansPro_600SemiBold',
          }}
        >
          Adicionar ao carrinho
        </Text>
      </TouchableOpacity>
    </Card>
  );
}
