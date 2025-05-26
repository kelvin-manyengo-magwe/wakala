import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E53935', // red background
    alignItems: 'center',
    justifyContent: 'center',
  },
  redBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#E53935',
  },
  image: {
    width: 300,
    height: 168,
    marginTop: 80,
    borderRadius: 10,
  },
  text: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  button: {
    marginTop: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
});
