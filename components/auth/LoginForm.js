import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';

import { styles } from '../../styles/loginStyle';
import Input from '../input';
import Button from '../button';

export default function LoginForm({ email, password, onChangeEmail, onChangePassword, onSubmit }) {
  return (
    <BlurView intensity={60} tint="light" style={styles.formContainer}>
      <Input
        label="E-mail"
        placeholder="seu@email.com"
        keyboardType="email-address"
        value={email}
        onChangeText={onChangeEmail}
      />

      <Input
        label="Senha"
        placeholder="Sua senha"
        secureTextEntry={true}
        value={password}
        onChangeText={onChangePassword}
      />

      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <Button title="Entrar" onPress={onSubmit} />
    </BlurView>
  );
}
