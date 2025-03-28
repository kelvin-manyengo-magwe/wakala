import { StyleSheet } from 'react-native';
import { card_width, card_height, width } from './SlidingCard';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  card: {
    width: card_width,
    height: card_height,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    marginHorizontal: (width - card_width)/2,
     },
     cardItems: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: "bold",
        color: "white",
     },
      dotsContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      dot: {
        width: 10,
        height: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: "gray",
      },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        paddingLeft: 18,
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginVertical: 5,
    },
});