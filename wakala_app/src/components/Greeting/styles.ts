import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 5,
  },
  icon: {
    marginRight: 12,
  },
  greetingMessage: {
    fontSize: 16,
    color: '#6c757d', // A soft, secondary gray color
    fontFamily: 'Nunito-Regular',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#343a40', // A strong, dark gray for the name
    fontFamily: 'Nunito-Regular',
    marginTop: -2, // Brings the name closer to the greeting
  },
});


export default styles;