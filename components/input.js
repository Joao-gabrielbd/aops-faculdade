
import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles/loginStyle';

export default function Input({ label, placeholder, secureTextEntry, keyboardType, value, onChangeText }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
