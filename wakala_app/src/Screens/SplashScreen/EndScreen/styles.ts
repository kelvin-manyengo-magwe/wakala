import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
    image: {
        width: 370,
        height: 250,
        marginTop: 30,
        },
  featureContainer: {
    marginBottom: 40,
  },
  featureText: {
    fontSize: 25,
    fontWeight: 'bold',
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
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 8,
    width: 200,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  ctaContainer: {
      marginBottom: 30,
      },
  ctaText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

});
