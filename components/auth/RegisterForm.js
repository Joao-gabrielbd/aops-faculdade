import React from 'react';
import { View } from 'react-native';
import { BlurView } from 'expo-blur';

import { styles } from '../../styles/loginStyle';
import Input from '../input';
import Button from '../button';

export default function RegisterForm({
  nome,
  email,
  password,
  onChangeNome,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}) {
  return (
    <BlurView intensity={60} tint="light" style={styles.formContainer}>
      <Input
        label="Nome Completo *"
        placeholder="Seu nome"
        value={nome}
        onChangeText={onChangeNome}
      />

      <Input
        label="E-mail *"
        placeholder="seu@email.com"
        keyboardType="email-address"
        value={email}
        onChangeText={onChangeEmail}
      />

      <Input
        label="Senha *"
        placeholder="Minimo 6 caracteres"
        secureTextEntry={true}
        value={password}
        onChangeText={onChangePassword}
      />

      <View style={styles.espacoForm} />

      <Button title="Cadastrar" onPress={onSubmit} />
    </BlurView>
  );
}
