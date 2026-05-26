import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/profileStyle';

export default function ProfileAvatar({ usuario }) {
  return (
    <View style={styles.avatarContainer}>
      <View style={styles.avatarPlaceholder}>
        <Text style={styles.avatarLetras}>AP</Text>
      </View>
      <Text style={styles.usuarioNome}>{usuario.nome}</Text>
      <Text style={styles.usuarioEmail}>{usuario.email}</Text>
    </View>
  );
}
