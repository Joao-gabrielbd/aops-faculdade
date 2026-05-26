import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/profileStyle';

export default function ProfileInfoBox({ usuario }) {
  return (
    <View style={styles.infoBox}>
      <View style={styles.infoLinha}>
        <Text style={styles.infoLabel}>Colecionador desde:</Text>
        <Text style={styles.infoValor}>{usuario.membroDesde}</Text>
      </View>

      <View style={styles.divisor} />

      <View style={styles.infoLinha}>
        <Text style={styles.infoLabel}>Obras na Colecao:</Text>
        <Text style={styles.infoValor}>{usuario.obrasCompradas} quadros</Text>
      </View>
    </View>
  );
}
