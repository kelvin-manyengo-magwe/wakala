import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Svg, { Defs, ClipPath, Ellipse, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export const OnBoarding = () => {
  // Convert clip-path percentages to actual coordinates
  const ellipseWidth = width * 0.4;  // 40% of screen width
  const ellipseHeight = height * 0.7; // 70% of screen height
  const ellipseX = width * 0.71;     // 71% from left
  const ellipseY = height * 0.72;     // 72% from top

  return (
    <View style={styles.container}>


      {/* SVG for clip-path effect */}
      <View style={styles.svgContainer}>
        <Svg height="100%" width="100%" style={styles.svg}>
          <Defs>
            <ClipPath id="clip">
              <Ellipse
                cx={ellipseX}
                cy={ellipseY}
                rx={ellipseWidth}
                ry={ellipseHeight}
              />
            </ClipPath>
          </Defs>

          {/* Red background (outside oval) */}
          <Rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="#E63946"
          />

          {/* White oval (inside) */}
          <Rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="white"
            clipPath="url(#clip)"
          />
        </Svg>
      </View>

      {/* Content */}
      <View style={styles.content}>

                <Image style={styles.wakalaShopsImage} source={ require('../../../../assets/images/icons/wakala-shops.jpg') } />

                <Text style={styles.mainText}>
                  Fuatilia biashara yako kwa makini, urahisi na wakati
                </Text>
      </View>

      {/* Button */}
      <View style={styles.bottomContainer}>
            {/* Your bottom-positioned element */}
            <TouchableOpacity style={styles.bottomButton}>
              <Text style={styles.buttonText}>Endelea</Text>
            </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
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
        borderRadius: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
});

