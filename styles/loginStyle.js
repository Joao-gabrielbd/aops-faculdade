
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardContainer: {
    flex: 1, 
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  headerContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1C1E', 
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'black', 
  },
  formContainer: {
    borderRadius: 16,
    padding: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.35)', 
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    overflow: 'hidden', 
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3A3F47',
    marginBottom: 8,
  },
  input: {
    height: 50,
    backgroundColor: '#F5F7FA',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1A1C1E',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E4E7EC',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#0066CC',
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#0066CC',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0066CC',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  footerText: {
    color: '#6C727F',
    fontSize: 14,
  },
  registerText: {
    color: '#0066CC',
    fontSize: 14,
    fontWeight: 'bold',
  },
  espacoForm: {
    height: 12,
  },
});
