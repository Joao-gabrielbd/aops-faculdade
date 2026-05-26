import React, { useState } from 'react';
import { Alert } from 'react-native';

import AuthScreenLayout from '../components/auth/AuthScreenLayout';
import AuthHeader from '../components/auth/AuthHeader';
import AuthFooterLink from '../components/auth/AuthFooterLink';
import LoginForm from '../components/auth/LoginForm';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    console.log(`Tentando logar com: ${email}`);
    navigation.replace('Dashboard');
  };

  return (
    <AuthScreenLayout>
      <AuthHeader title="Bem-vindo" subtitle="Faca login para continuar" />
      <LoginForm
        email={email}
        password={password}
        onChangeEmail={setEmail}
        onChangePassword={setPassword}
        onSubmit={handleLogin}
      />
      <AuthFooterLink
        text="Nao tem uma conta? "
        linkText="Cadastre-se"
        onPress={() => navigation.navigate('Register')}
      />
    </AuthScreenLayout>
  );
}
