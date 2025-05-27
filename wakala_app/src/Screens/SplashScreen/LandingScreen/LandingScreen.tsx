import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { AppStackParamList } from '../../../navigation/routes';
import { StackNavigationProp } from '@react-navigation/stack';





type LandingScreenProp = StackNavigationProp<AppStackParamList, 'LandingScreen'>;

interface LandingScreenProps {
    navigation: LandingScreenProp
};


const { width } = Dimensions.get('window');


export const LandingScreen = ({navigation}: LandingScreenProps) => {

        useEffect(() => {
                            setTimeout(() => {
                                navigation.navigate('EndScreen');
                            }, 3000);
                        },[]);

  return (
    <View style={styles.container}>
                      <View style={styles.imageWrapper}>
                              {/* Red Background Square */}
                              <View style={styles.redSquare} />

                              {/* White Background Square */}
                              <View style={styles.whiteSquare} />

                              {/* Image (top layer) */}
                              <Image
                                source={require('../../../../assets/images/icons/wakala-mno-circle.jpg')} // 🔁 Replace with your local image
                                style={styles.image}
                                resizeMode="cover"
                              />
                      </View>

                      {/* Text box */}
                      <View style={styles.textContainer}>
                                <Text style={styles.text}>
                                  Changanua na{'\n'}
                                  fuatilia mzunguko{'\n'}
                                  wa pesa kwa{'\n'}
                                  urahisi kwa{'\n'}
                                  kutumia wakala{'\n'}
                                  app
                                </Text>


                      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: width * 0.85,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redBorder: {
    backgroundColor: '#E53935',
    padding: 5,
    transform: [{ rotate: '-2deg' }],
  },

  textContainer: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    padding: 15,
    marginBottom: 150,
    width: width * 0.9,
    alignItems: 'center',
    borderRadius: 5,
    elevation: 2,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    lineHeight: 30,
  },
  imageWrapper: {
      width: width * 0.85,
      height: 200,
      marginBottom: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    redSquare: {
      position: 'absolute',
      width: '95%',
      height: '100%',
      backgroundColor: '#E53935',
      transform: [{scale: 1.2 }],
      zIndex: 1,
    },
    whiteSquare: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      transform: [ {scale: 1.1 }, { rotate: '-3deg' }],
      zIndex: 2,
    },
    image: {
      width: '100%',
      height: '100%',
      zIndex: 3,
    },
});
