import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import ProductCard from '../../components/ProductCard';
import api from '../../services/app';
import { ActivityIndicator } from 'react-native-web';

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const controller = new AbortController();

  api
    .get('Produtos.json', { signal: AbortSignal.timeout(400) })
    .then((result) => {
      setProductList([result.data]);
      const newProductList = productList?.shift();
      setProductList(newProductList);
      console.log(productList);
    })
    .catch((err) => console.log('The following error is happening: ' + err))
    .finally(() => {
      controller.abort();
    });

  return (
    <View>
      <ScrollView>
        <StatusBar />

        {productList?.length > 0 ? (
          productList
            .filter((el) => {
              if (el === null) {
                return false;
              }
              return true;
            })
            .map((arr) => (
              <ProductCard
                key={arr?.title}
                image={arr?.image}
                title={arr?.title}
                description={arr?.description}
                price={arr?.price}
              />
            ))
        ) : (
          <ActivityIndicator
            size="large"
            color="#EDCFA9"
            style={{ marginTop: 10 }}
          />
        )}
      </ScrollView>
    </View>
  );
}
