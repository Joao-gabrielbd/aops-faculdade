import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/loginStyle';

export default function AuthHeader({ title, subtitle }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
