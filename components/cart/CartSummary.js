import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/cartStyle';

export default function CartSummary({ items, total }) {
  if (items.length === 0) {
    return <Text style={styles.vazioText}>Seu carrinho esta vazio.</Text>;
  }

  return (
    <View style={styles.lista}>
      <Text style={styles.resumoTitle}>Resumo do Pedido:</Text>
      {items.map((item, index) => (
        <View key={`${item.id || item.nome}-${index}`} style={styles.itemLinha}>
          <Text style={styles.itemNome}>{item.nome}</Text>
          <Text style={styles.itemPreco}>R$ {item.preco.toFixed(2)}</Text>
        </View>
      ))}
      <View style={styles.divisor} />
      <Text style={styles.totalText}>Total: R$ {total.toFixed(2)}</Text>
    </View>
  );
}
