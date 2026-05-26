import React from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from '../styles/profileStyle';
import ScreenHeader from '../components/common/ScreenHeader';
import ProfileAvatar from '../components/profile/ProfileAvatar';
import ProfileInfoBox from '../components/profile/ProfileInfoBox';
import LogoutButton from '../components/profile/LogoutButton';

export default function ProfileScreen({ navigation }) {
  const usuario = {
    nome: 'Joao Gabriel',
    email: 'joao123@gmail.com',
    membroDesde: 'Maio de 2026',
    obrasCompradas: 4
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Meu Perfil" styles={styles} onBack={() => navigation.goBack()} />
      <ProfileAvatar usuario={usuario} />
      <ProfileInfoBox usuario={usuario} />
      <LogoutButton onPress={() => navigation.replace('Login')} />
    </SafeAreaView>
  );
}
