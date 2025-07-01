import { StyleSheet } from 'react-native';
import { card_width, card_height, width } from './SlidingCard';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  // --- CORRECTED CARD STYLE ---
  // This is the main container for each slide in the carousel.
  card: {
    width: card_width,
    height: card_height,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginHorizontal: (width - card_width) / 2,
    backgroundColor: '#F7F9FC', // Added a very light background color
    elevation: 3, // Adds a subtle shadow on Android
    shadowColor: '#000', // Adds a subtle shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  // These styles are for the dot indicators and are correct.
  dotsContainer: {
    flexDirection: 'row',
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
    borderColor: '#BDBDBD', // Softened the dot border
  },

  // NOTE: The old styles 'cardContent', 'cardText', 'mnoBaseLogo', and 'cardItems'
  // are no longer needed by the new design and have been removed for cleanliness.
});