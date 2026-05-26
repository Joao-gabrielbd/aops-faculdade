import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from '../../styles/profileStyle';

export default function LogoutButton({ onPress }) {
  return (
    <View style={styles.acoesContainer}>
      <TouchableOpacity style={styles.botaoSair} onPress={onPress}>
        <Text style={styles.botaoSairTexto}>Fazer Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
