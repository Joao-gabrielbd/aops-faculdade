import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from '../../styles/cartStyle';

export default function CheckoutButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.botaoFinalizar} onPress={onPress}>
      <Text style={styles.botaoTexto}>Pagar Agora</Text>
    </TouchableOpacity>
  );
}
