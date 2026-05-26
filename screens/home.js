import React, { useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { useCart } from '../context/cartContext';
import { styles } from '../styles/homeStyle';
import { PRODUTOS } from '../data/produtos';
import ScreenHeader from '../components/common/ScreenHeader';
import ProductCard from '../components/home/ProductCard';
import PeriodFilter from '../components/home/PeriodFilter';
import CartSummaryBar from '../components/home/CartSummaryBar';

export default function HomeScreen({ navigation }) {
  const { adicionarAoCarrinho, quantidadeItens, valorTotal } = useCart();
  const [periodoSelecionado, setPeriodoSelecionado] = useState('Todos');

  const produtosFiltrados = periodoSelecionado === 'Todos'
    ? PRODUTOS
    : PRODUTOS.filter(item => item.periodo === periodoSelecionado);

  const renderItem = ({ item }) => (
    <ProductCard produto={item} onAdd={adicionarAoCarrinho} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Galeria de Arte" styles={styles} onMenu={() => navigation.openDrawer()} />

      <PeriodFilter
        selectedPeriod={periodoSelecionado}
        onChangePeriod={setPeriodoSelecionado}
      />

      <FlatList
        data={produtosFiltrados}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listaProdutos}
        showsVerticalScrollIndicator={false}
      />

      <CartSummaryBar
        quantity={quantidadeItens}
        total={valorTotal}
        onOpenCart={() => navigation.navigate('Cart')}
      />
    </SafeAreaView>
  );
}
