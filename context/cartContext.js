import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  const quantidadeItens = carrinho.length;
  const valorTotal = carrinho.reduce((soma, item) => soma + (item.preco || 0), 0);

  return (
    <CartContext.Provider value={{ 
      carrinho, 
      adicionarAoCarrinho, 
      limparCarrinho, 
      quantidadeItens, 
      valorTotal 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}