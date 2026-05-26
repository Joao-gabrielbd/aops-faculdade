import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ScreenHeader({
  title,
  styles,
  onBack,
  onMenu,
  backLabel = 'Voltar',
  menuLabel = 'Menu',
}) {
  const action = onBack || onMenu;
  const actionLabel = onBack ? backLabel : menuLabel;
  const actionTextStyle = onBack ? styles.voltarTexto : styles.menuTexto;

  return (
    <View style={styles.header}>
      {action ? (
        <TouchableOpacity onPress={action}>
          <Text style={actionTextStyle}>{actionLabel}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.espacoHeader} />
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.espacoHeader} />
    </View>
  );
}
