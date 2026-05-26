
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/loginStyle';

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
