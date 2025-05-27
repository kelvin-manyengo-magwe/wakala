import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  svgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  svg: {
    flex: 1,
  },
  content: {
      width: 250,
      flex: 1,
      justifyContent: 'center',
      marginLeft: 130,
      zIndex: 1,
  },
  mainText: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    lineHeight: 32,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: '#E63946',
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 2,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  wakalaShopsImage: {
      width: 270,
      height: 200,
      marginBottom: 70,
      marginLeft: 20,
  },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        paddingBottom: 20,
        left: 20,
    },
    bottomButton: {
        backgroundColor: 'white',
        paddingHorizontal: 60,
        paddingVertical: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
});