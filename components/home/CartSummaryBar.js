import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from '../../styles/homeStyle';

export default function CartSummaryBar({ quantity, total, onOpenCart }) {
  return (
    <View style={styles.barraCarrinho}>
      <View style={styles.carrinhoInfo}>
        <Text style={styles.carrinhoQtd}>{quantity} {quantity === 1 ? 'item' : 'itens'}</Text>
        <Text style={styles.carrinhoTotal}>Total: R$ {total.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        style={[styles.botaoVerCarrinho, quantity === 0 && styles.botaoDesativado]}
        onPress={onOpenCart}
        disabled={quantity === 0}
      >
        <Text style={styles.botaoVerCarrinhoTexto}>Ver Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}
