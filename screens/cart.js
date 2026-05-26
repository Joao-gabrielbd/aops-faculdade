import React from 'react';
import { View, SafeAreaView, Alert } from 'react-native';

import { useCart } from '../context/cartContext';
import { styles } from '../styles/cartStyle';
import ScreenHeader from '../components/common/ScreenHeader';
import CartSummary from '../components/cart/CartSummary';
import CheckoutButton from '../components/cart/CheckoutButton';

export default function CartScreen({ navigation }) {
  const { carrinho, valorTotal, limparCarrinho } = useCart();

  const handlePagar = () => {
    Alert.alert(
      'Sucesso!',
      `Pagamento de R$ ${valorTotal.toFixed(2)} processado! Obras adicionadas a sua colecao.`
    );
    limparCarrinho();
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Meu Carrinho" styles={styles} onBack={() => navigation.goBack()} />

      <View style={styles.content}>
        <CartSummary items={carrinho} total={valorTotal} />
      </View>

      {carrinho.length > 0 && <CheckoutButton onPress={handlePagar} />}
    </SafeAreaView>
  );
}
