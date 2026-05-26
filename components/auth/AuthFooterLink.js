import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from '../../styles/loginStyle';

export default function AuthFooterLink({ text, linkText, onPress }) {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.registerText}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
}
