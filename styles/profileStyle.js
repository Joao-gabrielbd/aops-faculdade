import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  voltarTexto: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  avatarLetras: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  usuarioNome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  usuarioEmail: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  infoBox: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  infoLabel: {
    fontSize: 15,
    color: '#666',
  },
  infoValor: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  divisor: {
    height: 1,
    backgroundColor: '#EAEAEA',
  },
  acoesContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  botaoSair: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF3B30',
  },
  botaoSairTexto: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: 'bold',
  },
  espacoHeader: {
    width: 50,
  },
});
