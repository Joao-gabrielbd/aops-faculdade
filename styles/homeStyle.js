import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#EAEAEA' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  menuTexto: { color: '#007AFF', fontSize: 16, fontWeight: '600' },
  filterContainer: { backgroundColor: '#fff', paddingHorizontal: 15, paddingVertical: 8, margin: 10, borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
  filterLabel: { fontSize: 14, fontWeight: '600', color: '#555' },
  pickerWrapper: { backgroundColor: 'transparent', width: 140, justifyContent: 'center' },
  picker: { width: 140, height: 40, color: '#007AFF' },
  listaProdutos: { paddingHorizontal: 10, paddingTop: 5, paddingBottom: 100 },
  card: { flex: 0.5, backgroundColor: '#fff', margin: 6, borderRadius: 12, overflow: 'hidden', elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 1.41 },
  produtoImagem: { width: '100%', height: 140 },
  infoContainer: { padding: 10 },
  produtoNome: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 2 },
  autorNome: { fontSize: 11, color: '#777', fontStyle: 'italic', marginBottom: 6 },
  produtoPreco: { fontSize: 14, fontWeight: 'bold', color: '#007AFF', marginBottom: 10 },
  botaoComprar: { backgroundColor: '#007AFF', paddingVertical: 8, borderRadius: 6, alignItems: 'center' },
  botaoTexto: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
  barraCarrinho: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15, borderTopWidth: 1, borderTopColor: '#EAEAEA', elevation: 10 },
  carrinhoInfo: { flexDirection: 'column' },
  carrinhoQtd: { fontSize: 12, color: '#666' },
  carrinhoTotal: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  botaoVerCarrinho: { backgroundColor: '#34C759', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 8 },
  botaoDesativado: { backgroundColor: '#A1E3B1' },
  botaoVerCarrinhoTexto: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  espacoHeader: { width: 40 }
});
