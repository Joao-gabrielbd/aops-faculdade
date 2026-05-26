import React, { useState } from 'react';
import { Alert } from 'react-native';

import AuthScreenLayout from '../components/auth/AuthScreenLayout';
import AuthHeader from '../components/auth/AuthHeader';
import AuthFooterLink from '../components/auth/AuthFooterLink';
import RegisterForm from '../components/auth/RegisterForm';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!nome.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Erro de Validacao', 'Por favor, preencha todos os campos obrigatorios.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Erro de Validacao', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    Alert.alert('Sucesso!', 'Conta criada com sucesso!', [
      { text: 'OK', onPress: () => navigation.navigate('Login') }
    ]);
  };

  return (
    <AuthScreenLayout>
      <AuthHeader title="Criar Conta" subtitle="Cadastre-se para acessar a galeria" />
      <RegisterForm
        nome={nome}
        email={email}
        password={password}
        onChangeNome={setNome}
        onChangeEmail={setEmail}
        onChangePassword={setPassword}
        onSubmit={handleRegister}
      />
      <AuthFooterLink
        text="Ja tem uma conta? "
        linkText="Faca Login"
        onPress={() => navigation.navigate('Login')}
      />
    </AuthScreenLayout>
  );
}
