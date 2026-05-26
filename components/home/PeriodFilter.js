import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { styles } from '../../styles/homeStyle';

export default function PeriodFilter({ selectedPeriod, onChangePeriod }) {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterLabel}>Filtrar por Periodo:</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedPeriod}
          onValueChange={onChangePeriod}
          style={styles.picker}
          dropdownIconColor="#007AFF"
        >
          <Picker.Item label="Todos" value="Todos" />
          <Picker.Item label="Renascimento" value="Renascimento" />
          <Picker.Item label="Impressionismo" value="Impressionismo" />
          <Picker.Item label="Modernismo" value="Modernismo" />
        </Picker>
      </View>
    </View>
  );
}
