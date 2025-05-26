import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  time: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 50,
  },
  featureContainer: {
    marginBottom: 40,
  },
  featureText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginVertical: 15,
    lineHeight: 24,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
  },
  ctaButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  ctaText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
