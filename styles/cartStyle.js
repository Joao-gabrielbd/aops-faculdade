import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#EAEAEA' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  voltarTexto: { color: '#007AFF', fontSize: 16, fontWeight: '600' },
  content: { flex: 1, padding: 20 },
  vazioText: { textAlign: 'center', fontSize: 16, color: '#666', marginTop: 40 },
  lista: { backgroundColor: '#fff', padding: 15, borderRadius: 12, elevation: 2 },
  resumoTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: '#333' },
  itemLinha: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  itemNome: { fontSize: 15, color: '#444' },
  itemPreco: { fontSize: 15, fontWeight: '600', color: '#333' },
  divisor: { height: 1, backgroundColor: '#EAEAEA', marginVertical: 15 },
  totalText: { fontSize: 18, fontWeight: 'bold', textAlign: 'right', color: '#34C759' },
  botaoFinalizar: { backgroundColor: '#34C759', margin: 20, paddingVertical: 15, borderRadius: 10, alignItems: 'center' },
  botaoTexto: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  espacoHeader: { width: 50 }
});
