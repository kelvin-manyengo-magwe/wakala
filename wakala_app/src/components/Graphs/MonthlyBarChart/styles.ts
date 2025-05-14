import { StyleSheet } from 'react-native';




export const styles = StyleSheet.create({
  axisArrows: {
    position: 'absolute',
    top: 5,
    left: 0,
    zIndex: 1,
  },
  arrowX: {
    position: 'absolute',
    bottom: -8,
    left: 130,
    transform: [{ rotate: '0deg' }],
  },
  arrowY: {
    position: 'absolute',
    top: 60,
    left: -12,
    transform: [{ rotate: '0deg' }],
  },
  yAxisLabel: {
    position: 'absolute',
    top: -10,
    left: -4,
    fontSize: 10,
    transform: [{ rotate: '-90deg' }],
    fontWeight: 'bold',
  },
});
