import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from '../../styles/homeStyle';

export default function ProductCard({ produto, onAdd }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: produto.imagem }} style={styles.produtoImagem} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <Text style={styles.produtoNome} numberOfLines={1}>{produto.nome}</Text>
        <Text style={styles.autorNome} numberOfLines={1}>{produto.autor}</Text>
        <Text style={styles.produtoPreco}>R$ {produto.preco.toFixed(2)}</Text>
        <TouchableOpacity style={styles.botaoComprar} onPress={() => onAdd(produto)}>
          <Text style={styles.botaoTexto}>Adicionar a Colecao</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
